import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let defaultCity = '上海';
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {
  console.log(e)
}

export default new Vuex.Store({
  state: {
    // city: localStorage.city || '上海'
    city: defaultCity
  },
  // 同步
  mutations: {
    changeCity (state, city) {
      state.city = city;
      try {
        localStorage.city = city;
      } catch (e) {
        console.log(e)
      }
    }
  },
  // 异步
  // actions: {
  //   changeCity (context, city) {
  //     // console.log(city)
  //     context.commit('changeCity', city)
  //   }
  // }
})
