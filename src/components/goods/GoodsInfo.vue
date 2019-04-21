<template>
  <div class="goodsinfo-contsiner">
    <transition>
      <div class="ball"></div>
    </transition>
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :swiperData="imgs" :isFull="false"></swiper>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">{{ info.title }}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价：
            <del>￥{{ info.market_price }}</del>&nbsp;&nbsp;销售价：
            <span class="now_price">￥{{ }}</span>
          </p>
          <p>
            购买数量：
            <numbox></numbox>
          </p>
          <div>
            <mt-button type="primary">立即购买</mt-button>
            <mt-button type="danger" @click="addToShopCar">加入购物车</mt-button>
          </div>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：{{ info.goods_no }}</p>
          <p>库存情况：{{ info.stock_quantity }}</p>
          <p>上架时间：{{ info.add_time | dateFormat }}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="goDesc()">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="goComment()">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import comment from "../subcomponents/comment.vue";
import swiper from "../subcomponents/swiper.vue";
import numbox from "../subcomponents/numbox.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      imgs: [],
      info: {}
    };
  },
  methods: {
    getThumbs() {
      // 获取缩略图
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        if (result.body.status === 0) {
          // 循环每个图片数据，补全图片的宽和高
          result.body.message.forEach(item => (item.img = item.src));
          // 把完整的数据保存到 list 中
          this.imgs = result.body.message;
        }
      });
    },
    getGoodsInfo() {
      // 获取缩略图
      this.$http.get("api/goods/getinfo/" + this.id).then(result => {
        if (result.body.status === 0) {
          this.info = result.body.message[0];
        }
      });
    },
    goDesc() {
      this.$router.push({ name: "goodsdesc", params: { id: this.id } });
    },
    goComment() {
      this.$router.push({ name: "goodscomment", params: { id: this.id } });
    },
    addToShopCar() {}
  },
  components: {
    swiper,
    comment,
    numbox
  },
  created() {
    this.getThumbs();
    this.getGoodsInfo();
  }
};
</script>


<style lang="scss" scoped>
.goodsinfo-contsiner {
  background: #eee;
  overflow: hidden;
  .now_price {
    color: red;
    font-size: 16px;
    font-weight: bold;
  }
  .mui-card-footer {
    display: block;
    button {
      margin: 10px 0;
    }
  }
  .ball {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #f00;
    position: absolute;
    z-index: 99;
  }
}
</style>
