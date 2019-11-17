import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/pages/home/Home')
    },
    {
      path: '/city',
      name: 'City',
      component: () => import('./pages/city/City')
    },
    {
      path: '/detail/:id', // 动态路由
      name: 'Detail',
      component: () => import('./pages/detail/Detail')
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '@/pages/about/About.vue')
    // }
  ],
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})
