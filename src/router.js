import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'front-page',
      component: () => import(/* webpackChunkName: "FRONT_PAGE" */ './views/FrontPage.vue'),
      meta: {
        transitionName: 'fade'
      }
    }
  ]
})
