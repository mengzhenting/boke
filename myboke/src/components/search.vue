<template>
  <div class="search">
    <div class="hand">我的文章</div>
    <container :list="list"></container>
    <page :pagesize="pagesize" :totalpage="totalpage"></page>
  </div>
</template>

<script>
import page from './page'
import container from './container'
export default {
  data() {
    return {
      list: [],
      pagesize: 0,
      totalpage: 0
    }
  },
  components: {
    page,
    container
  },
  methods: {
    //   这个函数是用来接收参数并且调用axios返回数据
    async getvalue() {
      var { data } = await this.$axios.get(
        `search/${this.$route.params.type}/${this.$route.params.num}`
      )
      this.list = data.data
      this.totalpage = data.totalpage
      this.pagesize = data.pagesize
    }
  },
  mounted() {
    this.getvalue()
  },
  watch: {
    $route() {
      this.getvalue()
    }
  }
}
</script>
<style lang="less" scoped>
.search {
  overflow: hidden;
  background-color: #fff;
  margin-left: 20px;
  .hand {
    font-size: 14px;
    color: #999;
    text-align: center;
    line-height: 40px;
    background-color: #fcfcfc;
    height: 40px;
  }
}
</style>
