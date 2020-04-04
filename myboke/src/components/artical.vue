<template>
  <div class="content">
    <div class="topic">
      <h2 class="title" v-html="msg.title"></h2>
      <span class="classification">
        分类 ·
        <a href="javascript:;" class="sort">{{msg.sort}}</a>
      </span>
      <span class="time">
        发布时间 :
        <span class="time">{{msg.time}}</span>
      </span>
      <span class="see">
        <span>浏览量 :</span>
        {{msg.see}}
      </span>
    </div>
    <!-- :subfield="true"分屏显示源码 -->
    <!-- :toolbarsFlag="true"导航栏的显示 -->
    <mavon-editor
      :boxShadow="true"
      class="md markdown"
      :value="msg.content"
      :subfield="false"
      :defaultOpen="'preview'"
      :toolbarsFlag="false"
      :editable="false"
      :scrollStyle="true"
      :previewBackground="background"
      :codeStyle="style"
      :ishljs="true"
    ></mavon-editor>
  </div>
</template>
<script>
export default {
  data() {
    return {
      background: "slategray",
      msg: {},
      style: "atelier-plateau-light"
    };
  },
  async mounted() {
    var id = this.$route.params.id;
    const { data } = await this.$axios.get(`artical/${id}`);
    this.msg = data.data;
  }
};
</script>
<style lang="less" scoped>
.content {
  background-color: #fff;
  margin-left: 30px;
  .topic {
    padding-left: 30px;
    padding-bottom: 10px;
    .classification {
      font-size: 13px;
      color: #b1b1b1;
    }
    .title {
      font-weight: normal;
      padding-top: 10px;
      color: midnightblue;
      padding-bottom: 5px;
    }
    .sort {
      color: #b1b1b1;
      font-size: 13px;
      margin-right: 5px;
      text-decoration: none;
      padding-right: 5px;
    }
    .see {
      color: #b1b1b1;
      font-size: 13px;
      padding-right: 5px;
    }
    .time {
      color: #b1b1b1;
      font-size: 13px;
      padding-right: 5px;
    }
  }
  .markdown {
    border-top: 1px solid #b1b1b1;
  }
}
@media screen and (max-width: 990px) {
  .content {
    width: 100%;
    margin-left: 0;
  }
}
</style>
