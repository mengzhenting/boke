<template>
  <div id="app">
    <Header></Header>
    <el-row class="container">
      <sidebar></sidebar>
      <el-col class="content" :md="18" :sm="24">
        <div class="content-info">
          <!-- <router-link></router-link> -->
          <router-view></router-view>
        </div>
      </el-col>
    </el-row>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from './components/header'
import sidebar from './components/side-bar'
import Footer from './components/footer'
export default {
  data() {
    return {}
  },
  methods: {},
  components: {
    Header,
    sidebar,
    Footer
  }
}
</script>
<style lang="less" scoped>
.container {
  margin: 0 auto;
  margin-top: 20px;
  .content {
    .content-info {
      margin: 0 auto;
    }
  }
}
</style>
