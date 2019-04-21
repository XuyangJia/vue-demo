<template>
  <div class="goodsdesc-container">
    <h3>{{ info.title }}</h3>
    <div class="content" v-html="info.content"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      info: {}
    };
  },
  methods: {
    getGoodsInfo() {
      this.$http.get("api/goods/getdesc/" + this.id).then(result => {
        if (result.body.status === 0) {
          this.info = result.body.message[0];
        }
      });
    }
  },
  components: {},
  created() {
    this.getGoodsInfo();
  }
};
</script>

<style lang="scss">
.goodsdesc-container {
  padding: 4px;
  h3 {
    font-size: 16px;
    text-align: center;
    color: aqua;
  }
  .content {
    width: 100%;
  }
}
</style>
