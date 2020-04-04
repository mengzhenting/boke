<template>
  <div class="sort">
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
    routeTo() {
      this.$route.params.classification === '首页'
        ? this.$router.push({ path: '/total/1' })
        : this.getValue()
    },
    async getValue() {
      const { data } = await this.$axios.get(
        `sort/${this.$route.params.classification}/${
          this.$route.params.pagenum
        }`
      )
      this.list = data.data
      this.totalpage = data.totalpage
      this.pagesize = data.pagesize
    }
  },
  mounted() {
    this.routeTo()
  },
  watch: {
    $route() {
      this.routeTo()
    }
  }
}
</script>
<style lang="less" scoped>
.sort {
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
