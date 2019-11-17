<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl"/>
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: "HomeIcons",
    props: {
      list: {
        type: Array
      }
    },
    data() {
      return {
        swiperOption: {
          autoplay: false, // 关闭自动滚动
        }
      }
    },
    computed: {
      // 分页轮播，每8条数据增加一页
      pages() {
        const pages = [];
        this.list.forEach((item, index) => {
          // 计算页面索引
          const page = Math.floor(index / 8);
          // 创建页面数组
          if (!pages[page]) {
            pages[page] = [];
          }
          // 将item添加到对应的页面数组里
          pages[page].push(item);
        });
        return pages;
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  @import '~styles/mixins.styl';

  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%

  .icon
    position: relative
    overflow: hidden
    float: left
    width: 25%
    height: 0
    padding-bottom: 25%

    .icon-img
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: .44rem
      box-sizing: border-box
      padding: .1rem

      .icon-img-content
        display: block
        margin: 0 auto
        height: 100%

    .icon-desc
      position: absolute
      left: 0
      right: 0
      bottom: 0.08rem
      line-height: .44rem
      text-align: center
      color: $darkTextColor
      ellipsis()
</style>
