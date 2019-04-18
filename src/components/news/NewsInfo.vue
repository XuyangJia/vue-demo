<template>
  <div class="newsinfo-container">
    <h2 class="title">{{ newsInfo.title }}</h2>
    <p class="subtitle">
      <span>发表时间：{{ newsInfo.add_time | dateFormat }}</span>
      <span>点击{{ newsInfo.click }}次</span>
    </p>
    <hr>
    <div class="content" v-html="newsInfo.content"></div>
    <comment-box :id="this.id"></comment-box>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import comment from '../subcomponents/comment.vue' // 导入评论子组件
export default {
  data() {
    return {
      id: this.$route.params.id,
      newsInfo: {}
    };
  },
  methods: {
    getNewsInfo() {
      this.$http.get("getnew/" + this.id).then(result => {
        if (result.body.status === 0) {
          this.newsInfo = result.body.message[0];
        } else {
          Toast("获取新闻列表失败！");
        }
      });
    }
  },
  components: {
    'comment-box': comment
  },
  created() {
    this.getNewsInfo();
  }
};
</script>

<style lang="scss">
.newsinfo-container {
  padding: 0 4px;
  .title {
    font-size: 16px;
    color: red;
    margin: 15px 0;
    text-align: center;
  }
  .subtitle {
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
  .content {
    img {
      width: 100%;
    }
  }
}
</style>
