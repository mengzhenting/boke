<template>
  <el-col class="side-bar hidden-sm-and-down" :md="6">
    <div class="wrapper">
      <div class="top">
        <p class="hot">{{hot}}</p>
        <p class="contain">
          <span
            :style="{backgroundColor: `${color[Math.floor(Math.random()*5)]}`}"
            class="cube"
            :key="item.id"
            v-for="item in datebaes"
          >{{item.title}}</span>
        </p>
      </div>
      <div class="qrcode">
        <p class="author-weixin">作者微信</p>
        <div>
          <img class="picture" src="../assets/img/weixin.png" alt="">
        </div>
      </div>
      <div class="total">
        <p class="total-info">统计信息</p>
        <p class="artical">
          <span>文章总数:</span>
          <span>{{ totalnum }}</span>
        </p>
        <p class="artical">
          <span>总浏览量:</span>
          <span>{{pageviews}}</span>
        </p>
      </div>
      <div class="link">
        <p class="title">友情链接</p>
        <a :key="item.id" v-for="item in link" href="">
          <span class="circle-link">·</span>
          <span>{{item.title}}</span>
        </a>
      </div>
    </div>
  </el-col>
</template>
<script>
export default {
  data() {
    return {
      totalnum: '',
      pageviews: '',
      link: [
        {
          id: 1,
          title: '孟震霆的博客'
        },
        { id: 2, title: '孟震霆的博客' },
        { id: 3, title: '孟震霆的博客' },
        { id: 4, title: '孟震霆的博客' },
        { id: 5, title: '孟震霆的博客' }
      ],
      color: ['#5CB85C', '#D9534F', '#428BCA', '#F0AD4E', '#5BC0DE'],
      hot: '热门标签',
      datebaes: [
        {
          id: 1,
          title: 'mysql'
        },
        {
          id: 2,
          title: 'qwe'
        },
        {
          id: 3,
          title: 'javascript'
        },
        {
          id: 4,
          title: 'linux'
        },
        {
          id: 5,
          title: 'php'
        },
        {
          id: 6,
          title: 'pathon'
        },
        {
          id: 7,
          title: 'apche'
        },
        {
          id: 8,
          title: 'mysql'
        },
        {
          id: 9,
          title: 'qwe'
        },
        {
          id: 10,
          title: 'ss'
        },
        {
          id: 11,
          title: 'javascript'
        },
        {
          id: 12,
          title: 'linux'
        },
        {
          id: 13,
          title: 'php'
        },
        {
          id: 14,
          title: 'pathon'
        },
        {
          id: 15,
          title: 'apche'
        },
        {
          id: 16,
          title: 'mysql'
        },
        {
          id: 17,
          title: 'qwe'
        },
        {
          id: 18,
          title: 'ss'
        },
        {
          id: 19,
          title: 'javascript'
        },
        {
          id: 20,
          title: 'linux'
        },
        {
          id: 21,
          title: 'php'
        },
        {
          id: 22,
          title: 'pathon'
        },
        {
          id: 23,
          title: 'apche'
        },
        {
          id: 24,
          title: 'mysql'
        },
        {
          id: 25,
          title: 'qwe'
        },
        {
          id: 26,
          title: 'ss'
        },
        {
          id: 27,
          title: 'javascript'
        }
      ]
    }
  },
  methods: {
    async require() {
      var { data } = await this.$axios.get('totalnum')
      this.totalnum = data.data[0]['count(*)']
      var { data: data1 } = await this.$axios.get('pageviews')
      this.pageviews = data1.data
    }
  },
  mounted() {
    this.require()
  },
  watch: {
    $route() {
      this.require()
    }
  }
}
</script>
<style lang="less" scoped>
.side-bar {
  .top {
    height: 250px;
    background-color: #fff;

    .hot {
      height: 40px;
      background-color: #fcfcfc;
      line-height: 40px;
      text-align: center;
      color: #999;
      font-size: 14px;
      border-bottom: 1px solid #ddd;
    }
    .contain {
      padding: 5px 20px 20px 30px;
      .cube {
        padding: 0px 5px;
        margin-right: 10px;
        margin-bottom: 5px;
        font-size: 10.5px;
        border-radius: 5px;
        line-height: 16px;
        display: inline-block;
        color: #fff;
        font-weight: bold;
      }
    }
  }
  .qrcode {
    .author-weixin {
      box-sizing: border-box;
      height: 40px;
      color: #999;
      line-height: 40px;
      background-color: #fcfcfc;
      border-bottom: 1px solid #ddd;
      text-align: center;
    }
    margin-top: 30px;
    .picture {
      width: 100%;
    }
  }
  .total {
    padding-bottom: 10px;
    .artical {
      span {
        font-size: 14px;
        color: darkslateblue;
      }
      padding: 10px 0px 6px 80px;
    }
    background-color: #fff;
    margin-top: 20px;
    .total-info {
      box-sizing: border-box;
      height: 40px;
      color: #999;
      line-height: 40px;
      background-color: #fcfcfc;
      border-bottom: 1px solid #ddd;
      text-align: center;
    }
  }
  .link {
    .circle-link {
      vertical-align: -4px;
      font-size: 25px;
    }
    margin-top: 30px;
    padding-bottom: 6px;
    .title {
      box-sizing: border-box;
      height: 40px;
      color: #999;
      line-height: 40px;
      background-color: #fcfcfc;
      border-bottom: 1px solid #ddd;
      text-align: center;
    }
    background-color: #fff;
    a {
      font-size: 15px;
      padding: 0 0 0 70px;
      display: block;
      text-decoration: none;
      color: #008c8c;
    }
    a:hover span {
      color: chocolate;
      text-decoration: underline;
    }
    a:hover .circle-link {
      text-decoration: none;
    }
  }
}
</style>
