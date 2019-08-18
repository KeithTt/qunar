<template>
  <div class="container" @click="handleGalleryClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="(item, index) of images" :key="index">
          <img class="gallery-img" :src="item"  alt=""/>
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination" slot="pagination"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CommonGallery",
    props: {
      images: {
        type: Array
      }
    },
    data () {
      return {
        swiperOption: {
          pagination: ".swiper-pagination",
          paginationType: 'fraction',
          observeParents: true,
          observer: true,
        },
      }
    },
    methods: {
      handleGalleryClick () {
        this.$emit('close')
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow inherit
  .container
    display flex
    flex-direction column
    justify-content center
    z-index 99
    position fixed
    left 0
    right: 0
    top: 0
    bottom 0
    background black
    .wrapper
      position relative
      width 100%
      height 0
      padding-bottom 100%
      .gallery-img
        width 100%
      .swiper-pagination
        color white
        bottom .1rem
</style>
