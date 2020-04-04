<template>
  <div class="header">
    <el-row class="nav">
      <el-col :offset="3" :md="3" class="hidden-sm-and-down" :lg="3">
        <div class="header">
          <img src="../assets/img/touxiang.jpg" alt />
          <span>{{title}}</span>
        </div>
      </el-col>
      <el-col :lg="8" :sm="24" :md="18">
        <div class="sort">
          <span
            @click="handle(item.id,item.sort)"
            :class="active === item.id ? 'active' : ''"
            :key="item.id"
            v-for="(item) in sort"
          >{{item.sort}}</span>
        </div>
      </el-col>
      <el-col :lg="3" :offset="3" class="hidden-sm-and-down">
        <div class="search">
          <input
            @keyup.enter="getinput"
            v-model="input"
            placeholder="请输入内容"
            type="text"
            class="input__inner"
          />
          <el-button size="mini" type="info" icon="el-icon-search"></el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "孟震霆的博客",
      active: 1,
      sort: [],
      input: ""
    };
  },
  mounted() {
    this.getValue()
  },
  methods: {
    getinput() {
      this.input
        ? this.$router.push({ path: `/search/${this.input}/1` })
        : this.$message({
          message: '请输入搜索关键字',
          type: 'warn',
          duration: 1000
        })
    },
    async getValue() {
      const { data } = await this.$axios.get('allsort')
      console.log(data)
      this.sort = data.data
      var value = this.$route.params.classification
      this.sort.forEach(element => {
        if (element.sort === value) {
          this.active = element.id
          console.log(element.id)
        }
      })
    },

    handle(id, sort) {
      this.active = id
      this.$router.push({ path: `/sort/${sort}/1` })
    }
  }
};
</script>
<style lang="less" scoped>
.nav {
  .sort {
    width: 530px;
    margin: 0 auto;
    line-height: 40px;
    span {
      color: #000;
      cursor: pointer;
      margin: 0 10px;
      padding: 12px 10px;
    }
    span.active {
      background-color: #ccc;
      color: azure;
    }
  }
  .header {
    color: darkgoldenrod;
    img {
      margin-right: 10px;
      vertical-align: -14px;
      border-radius: 50%;
      border: 1px solid #fff;
      width: 40px;
    }
  }
  .search {
    margin-top: 7px;
    height: 28px;
    .input__inner {
      text-indent: 12px;
      width: 140px;
      border: 1px solid #ccc;
      box-sizing: border-box;
      height: 100%;
      outline: none;
    }
    width: 250px;
  }
  overflow: hidden;
  height: 42px;
  box-shadow: 0px 0px 5px rgb(80, 78, 78);
  background-color: #fff;
}
</style>
