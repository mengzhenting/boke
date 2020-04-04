<template>
  <div class="wrapper-page">
    <el-pagination
      :current-page="nowpage"
      @current-change="changenum"
      class="page"
      background=""
      layout="prev, pager, next"
      :total="totalpage"
      :page-size="pagesize"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  props: ['pagesize', 'totalpage'],
  data() {
    return {
      nowpage: 1,
      path: ''
    }
  },
  methods: {
    changenum(value) {
      this.$router.push({ path: this.path + value })
    }
  },
  mounted() {
    this.path = this.$route.fullPath
    this.nowpage = +this.path.slice(this.path.length - 1)
    this.path = this.path.slice(0, this.path.length - 1)
  }
}
</script>
<style lang="less" scoped>
.page {
  display: inline-block;
  padding-top: 30px;
  padding-bottom: 20px;
}
.wrapper-page {
  display: flex;
  justify-content: center;
}
</style>
