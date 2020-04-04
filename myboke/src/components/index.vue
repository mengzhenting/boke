<template>
  <div class="index indexL">
    <div class="hand">我的文章</div>
    <container class="container-artical" :list="list"></container>
    <page :pagesize="pagesize" :totalpage="totalpage"></page>
  </div>
</template>

<script>
import page from '../components/page'
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
    async require() {
      var page = this.$route.params.page
      const { data } = await this.$axios.get(`total/${page}`)
      this.list = data.data
      this.pagesize = data.pagesize
      this.totalpage = data.totalpage
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
.index {
  overflow: hidden;
  background-color: #fff;
  margin-left: 20px;
  margin-bottom: 80px;
  .hand {
    font-size: 14px;
    color: #999;
    text-align: center;
    line-height: 40px;
    background-color: #fcfcfc;
    height: 40px;
  }
}
.container-artical {
  height: 984px;
}
@media screen and (max-width: 990px) {
  .indexL {
    margin-left: 0;
  }
}
</style>
