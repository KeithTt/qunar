<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt=""/>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: "HomeSwiper",
    props: {
      list: {
        type: Array
      }
    },
    data() {
      return {
        swiperOption: {
          pagination: ".swiper-pagination", // 分页
          loop: true, // 循环轮播
        }
      }
    },
    computed: {
      showSwiper() {
        return this.list.length;
      }
    }
  }
</script>

<style lang="stylus" scoped>
  /*深度作用选择器，样式穿透*/
  .wrapper >>> .swiper-pagination-bullet-active
    background: #f0f0f0

  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 26.79%
    background: #eaeaea

    .swiper-img
      width: 100%
</style>
