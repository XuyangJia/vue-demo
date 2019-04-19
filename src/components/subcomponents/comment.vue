<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入要评论的内容。。。" maxlength="120" v-model="message"></textarea>
    <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
    <div class="cmt-list">
      <div class="cmt-item" v-for="(item, i) in comments" :key="item.add_time">
        <div
          class="cmt-title"
        >第{{ i+1 }}楼&nbsp;&nbsp;用户：{{ item.user_name }}&nbsp;&nbsp;发表时间：{{ item.add_time | dateFormat }}</div>
        <div class="cmt-body">{{ item.content || '这个用户很烂，啥也不会说' }}</div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain @click="getMore">更多</mt-button>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      comments: [],
      pageIndex: 1,
      message: ""
    };
  },
  methods: {
    getComments() {
      this.$http
        .get(`getcomments/${this.id}?pageindex=${this.pageIndex}`)
        .then(result => {
          if (result.body.status === 0) {
            this.comments = this.comments.concat(result.body.message);
          } else {
            Toast("获取评论列表失败！");
          }
        });
    },
    getMore() {
      this.pageIndex++;
      this.getComments();
    },
    postComment() {
      if (!this.message.trim()) {
        return Toast("评论内容不能为空！");
      }
      this.$http
        .post(`postcomment/${this.id}`, { content: this.message.trim() })
        .then(result => {
          if (result.body.status === 0) {
            Toast(result.body.message);
            this.comments.unshift({
              add_time: Date.now(),
              user_name: "匿名用户",
              content: this.message
            });
          } else {
            Toast("获取评论列表失败！");
          }
        });
    }
  },
  props: ["id"],
  created() {
    this.getComments();
  }
};
</script>


<style lang="scss" scoped>
.cmt-container {
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    height: 90px;
    margin: 0;
  }
  .cmt-list {
    margin: 5px 0;
    .cmt-item {
      font-size: 13px;
      .cmt-title {
        background-color: #ccc;
        line-height: 35px;
      }
      .cmt-body {
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
}
</style>
