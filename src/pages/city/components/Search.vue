<template>
  <div>

    <div class="search">
      <label>
        <input class="search-input" type="text" placeholder="输入城市名或拼音" v-model="keyword"/>
      </label>
    </div>

    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="item of list" :key="item.id" @click="handleCityClick(item.name)">
          {{item.name}}
        </li>
        <li class="search-item border-bottom" v-show="!list.length">没有找到匹配数据</li>
      </ul>
    </div>

  </div>
</template>

<script>
  import Bscroll from 'better-scroll';
  import {mapMutations} from "vuex";

  export default {
    name: "CitySearch",
    props: {
      cities: {
        type: Object
      }
    },
    data() {
      return {
        keyword: '',
        list: [],
        timer: null
      }
    },
    methods: {
      handleCityClick(city) {
        // this.$store.dispatch('changeCity', city);
        // this.$store.commit('changeCity', city);
        this.changeCity(city);
        this.$router.push('/');
      },
      ...mapMutations(['changeCity'])
    },
    watch: {
      keyword() {
        // 函数防抖
        if (this.timer) {
          clearTimeout(this.timer)
        }
        if (!this.keyword) { // 如果搜索关键字情况则不再创建新的定时器
          this.list = [];
          return;
        }
        this.timer = setTimeout(() => {
          const result = [];
          for (let i in this.cities) { // 搜索逻辑
            this.cities[i].forEach((item) => {
              if (item.spell.indexOf(this.keyword) > -1 || item.name.indexOf(this.keyword) > -1) {
                result.push(item); // 将搜索结果存入一个数组并返回
              }
            })
          }
          this.list = result;
        }, 100)
      }
    },
    mounted() {
      this.scroll = new Bscroll(this.$refs.search);
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .search
    height: .72rem
    padding: 0 .1rem
    background: $bgColor

    .search-input
      box-sizing: border-box
      padding: 0 .1rem
      width: 100%
      height: .62rem
      line-height: .62rem
      text-align: center
      border-radius: .06rem
      color: #666

  .search-content
    z-index 1
    overflow hidden
    position absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    background #eee

    .search-item
      padding-left .2rem
      color #666
      background #fff
      line-height .62rem
</style>
