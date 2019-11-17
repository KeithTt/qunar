<template>
  <ul class="list">
    <li
      @click="handleLetterClick"
      class="item"
      v-for="item in letters"
      :key="item"
      :ref="item"
      @touchstart.prevent="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >{{item}}
    </li>
  </ul>
</template>

<script>
  export default {
    name: "CityAlphabet",
    props: {
      cities: {
        type: Object
      }
    },
    computed: {
      letters() { // 提取字母表
        return Object.keys(this.cities);
      }
    },
    data() {
      return {
        touchStatus: false,
        startY: 0,
        timer: null
      }
    },
    updated() {
      this.startY = this.$refs['A'][0].offsetTop; // 获取字母A距离顶部搜索框的距离
    },
    methods: {
      handleLetterClick(event) {
        // console.log(event.target.innerText)
        this.$emit('change', event.target.innerText); // 触发change事件，将字母回传
      },
      handleTouchStart() {
        this.touchStatus = true
      },
      handleTouchMove(event) {
        if (this.touchStatus) {
          // 函数防抖
          if (this.timer) {
            clearTimeout(this.timer)
          }
          this.timer = setTimeout(() => {
            // console.log(startY);
            const touchY = event.touches[0].clientY - 79; // 获取手指距离顶部搜索框的距离
            const index = Math.floor((touchY - this.startY) / 20); // 处理每个元素的高度计算出当前滑动到第几个字母
            if (index >= 0 && index < this.letters.length) {
              this.$emit('change', this.letters[index]); // 触发change事件，将字母回传
            }
          }, 16)
        }
      },
      handleTouchEnd() {
        this.touchStatus = false
      }
    },
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    display flex
    flex-direction column
    justify-content center
    position absolute
    right 0
    top 1.58rem
    bottom 0
    width .4rem

    .item
      line-height .34rem
      text-align center
      color $bgColor
</style>
