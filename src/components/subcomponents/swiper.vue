<template>
  <div>
    <mt-swipe :auto="4000">
      <!-- 在组件中，使用v-for循环的话，一定要使用 key -->
      <mt-swipe-item v-for="item in swiperData" :key="item.id">
        <img :src="item.img" :class="{full:isFull}">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  date() {},
  methods: {},
  props: ["swiperData", "isFull"],
  created() {}
};
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    text-align: center;
    img {
      height: 100%;
    }
  }
}

.full {
  width: 100%;
}
</style>