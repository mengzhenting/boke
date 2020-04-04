<template>
  <div>
    <ul class="wrapper">
      <li class="single-data clearfix" v-for="item in list" :key="item.id">
        <div class="content">
          <router-link class="title" :to="`${'/artical/'+item.id}`">{{item.title}}</router-link>
          <span class="sort">分类 : {{ item.sort }}</span>
          <span class="circle">.</span>
          <span class="time">发布时间 : {{item.time}}</span>
        </div>
        <div class="good">{{item.see}}</div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ['list'],
  data() {
    return {}
  }
}
</script>
<style lang="less" scoped>
.wrapper {
  border-bottom: 1px solid #ddd;
  .single-data {
    border-top: 1px solid #ddd;
    font-size: 15px;
    padding: 10px 20px;

    .content {
      float: left;
      line-height: 20px;
      .title {
        text-decoration: none;
        color: #008c8c;
        display: block;
      }
      .sort {
        color: #b1b1b1;
        font-size: 12px;
      }
      .time {
        padding-left: 5px;
        color: #b1b1b1;
        font-size: 12px;
      }
      .circle {
        vertical-align: 3px;
        margin: 0 5px;
        color: #b1b1b1;
        font-weight: bolder;
      }
    }
    .good {
      margin-top: 10px;
      float: right;
      padding: 2px 16px;
      border-radius: 20px;
      background-color: #8bafce;
      text-align: center;
      margin-right: 20px;
      // line-height: 40px;
      font-size: 12px;
      color: #fff;
      font-weight: bold;
    }
  }
}
</style>
