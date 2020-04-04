<template>
  <div class="footer">
    <p class="info">
      <a href="https://github.com/liuruil">
        <span class="iconfont icon-GitHub"></span>
      </a>
      <a href="https://github.com/liuruil">
        <span class="iconfont icon-GitHub"></span>
      </a>
      <a href="https://github.com/liuruil">
        <span class="iconfont icon-GitHub"></span>
      </a>
      <a href="https://github.com/liuruil">
        <span class="iconfont icon-GitHub"></span>
      </a>
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      github: 'https://github.com/liuruil'
    }
  }
}
</script>
<style lang="less" scoped>
.footer {
  position: fixed;
  width: 100%;
  bottom: 0;
  margin-top: 20px;
  background-color: #000;
}
.info {
  display: flex;
  justify-content: center;
  padding: 20px 0;
  text-align: center;
  color: #fff;
  a {
    text-decoration: none;
    span {
      font-size: 25px;
    }
    margin: 0 15px;
    color: #fff;
  }
}
</style>
