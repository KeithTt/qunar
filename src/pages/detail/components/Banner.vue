<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg" alt=""/>
      <div class="banner-info">
        <div class="banner-tittle">
          {{this.sightName}}
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>
          {{this.gallaryImgs.length}}
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallery :images="gallaryImgs" v-show="showGallary" @close="handleGallaryClose"></common-gallery>
    </fade-animation>
  </div>
</template>

<script>
  import CommonGallery from 'common/gallery/Gallery';
  import FadeAnimation from 'common/fade/FadeAnimation';

  export default {
    name: "DetailBanner",
    components: {
      CommonGallery,
      FadeAnimation
    },
    props: {
      sightName: {
        type: String
      },
      bannerImg: {
        type: String
      },
      gallaryImgs: {
        type: Array
      }
    },
    data() {
      return {
        showGallary: false
      }
    },
    methods: {
      handleBannerClick() {
        this.showGallary = true;
      },
      handleGallaryClose() {
        this.showGallary = false
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%

    .banner-img
      width 100%

    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      color white
      background linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))

      .banner-tittle
        flex 1
        font-size .32rem
        padding 0 .2rem

      .banner-number
        line-height .32rem
        height .32rem
        margin-top .14rem
        padding 0 .4rem
        border-radius .2rem
        background rgba(0, 0, 0, .8)
        font-size .24rem

        .banner-icon
          font-size .24rem
</style>
