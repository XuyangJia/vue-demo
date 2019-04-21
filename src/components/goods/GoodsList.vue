<template>
  <div class="goods-list">
    <div v-for="item in goodsList" :key="item.id" class="goods-item" @click="getDetail(item.id)">
      <img :src="item.img_url">
      <h1 class="title">{{ item.title }}</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥{{ item.sell_price }}</span>
          <span class="old">￥{{ item.market_price }}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{ item.stock_quantity }}件</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodsList: null
    };
  },
  methods: {
    getGoods(index) {
      this.$http.get("api/getgoods?pageindex=" + index).then(result => {
        if (result.body.status === 0) {
          this.goodsList = result.body.message;
        }
      });
    },
    getDetail(id) {
    this.$router.push('/home/goodsinfo/' + id)
    }
  },
  created() {
    this.getGoods(1);
  }
};
</script>


<style lang="scss" scoped>
.goods-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 7px;
  .goods-item {
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 7px #ccc;
    margin: 4px 0;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px;
    img {
      width: 100%;
    }
    .title {
      font-size: 14px;
    }
    .info {
      background: #eee;
      p {
        margin: 0;
        padding: 5px;
      }
      .price {
        .now {
          color: red;
          font-size: 16px;
          font-weight: bold;
        }
        .old {
          text-decoration: line-through;
          font-size: 12px;
          margin-left: 10px;
        }
      }
      .sell {
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>

