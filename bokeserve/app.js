const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')
const mysql = require('mysql');
const marked = require('marked');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'dddd',
    password: 'Liurui123!',
    database: 'myboke'
});
const moment = require('moment');
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/node_modules', express.static(path.join(__dirname, './node_modules')))
app.use('/assets', express.static(path.join(__dirname, './assets')))

app.engine('html', require('express-art-template'))
app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'html')

app.get('/administrator', (req, res) => {
    res.render('index.html', {})
})
app.put('/artical/add', (req, res) => {
    const body = req.body
    body.time = moment(Date.now()).format('YYYY-MM-DD HH:mm')
    conn.query('insert into artical set ?', body, (error, result) => {
        console.log(error)
        console.log(result)
    })
})
app.get('/total/:page', (req, res) => {
    var pagesize = 15;
    var nowpage = req.params.page
    let sql = `select * from artical order by id desc limit ${(nowpage - 1) * pagesize} , ${pagesize}`
    conn.query(sql, (error, result) => {
        if (error) return error.message;
        conn.query('select count(*) from artical', (error1, result1) => {
            if (error1) return res.send(error1.message);
            res.send({
                status: 200,
                data: result,
                pagesize: pagesize,
                totalpage: result1[0]['count(*)']
            })
        })

    })

})
app.get('/artical/:id', (req, res) => {
    var id = req.params.id
    conn.query('select see from artical where id = ?', id, (error, result) => {
        if (error) res.send(error.message)
        var newsee = +result[0].see + 1 + ''
        conn.query('update artical set see=? where id =?;', [newsee, id
        ], (error1, result1) => {
            if (error1) res.send(error1.message);
            conn.query('select * from artical where id = ?', id, (error2, result2) => {
                if (error2) res.send(error2.message)
                res.send({
                    status: 200,
                    data: result2[0]
                })
            })
        })
    })

})
//文章总数
app.get('/totalnum', (req, res) => {
    conn.query('select count(*) from artical', (error, result) => {
        if (error) return res.send(error.message);
        res.send({
            status: 200,
            data: result
        })
    })
})
// 浏览总数
app.get('/pageviews', (req, res) => {
    conn.query('select see from artical', (error, result) => {
        if (error) return res.send(error.message);
        let pageViews = 0;
        result.map((value) => {
            pageViews = pageViews + (+value['see'])
        })
        res.send({
            status: 200,
            data: pageViews
        })
    })
})
//所有分类
app.get('/allsort', (req, res) => {
    conn.query('select * from sort', (error, result) => {
        if (error) return res.send(error.message)
        res.send({
            status: 200,
            data: result
        })
    })
})
app.get('/search/:name/:page', (req, res) => {
    var pagesize = 15;
    var value = '%' + req.params.name + '%'
    var nowpage = req.params.page
    conn.query(`select * from  artical where title like ? order by id desc limit ${(nowpage - 1) * pagesize} , ${pagesize}`, value, (error, result) => {
        if (error) return res.send(error.message)
        conn.query(`select count(*) from  artical where title like ?`, value, (error1, result1) => {
            res.send({
                status: 200,
                data: result,
                pagesize: pagesize,
                totalpage: result1[0]['count(*)']
            })
        })

    })

})
app.get('/sort/:classfication/:page', (req, res) => {
    var pagesize = 15;
    var value = req.params.classfication
    var nowpage = req.params.page
    conn.query(`select * from  artical where sort = ? order by id desc limit ${(nowpage - 1) * pagesize} , ${pagesize}`, value, (error, result) => {
        if (error) return res.send(error.message)
        conn.query(`select count(*) from  artical where title like ?`, value, (error1, result1) => {
            res.send({
                status: 200,
                data: result,
                pagesize: pagesize,
                totalpage: result1[0]['count(*)']
            })
        })

    })

})
app.listen('3000', () => {
    console.log('http://localhost:3000')
})
