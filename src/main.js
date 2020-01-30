import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import WebFont from 'webfontloader'
import axios from 'axios'
import '@/styles/global-styles.js'
import { makeServer } from './server'

Vue.config.productionTip = false

if (process.env.NODE_ENV === 'development') {
  makeServer()
}

WebFont.load({
  typekit: {
    id: 'yqv5ydm'
  },
  custom: {
    families: [
      'fff-regular',
      'fff-italic'
    ],
    urls: ['/assets/fonts.css']
  },
  active: () => {
    store.dispatch('GET_FONT_STATE')
  }
})

Vue.use(axios)

new Vue({
  created () {
    this.$store.dispatch('GET_TOUCH_STATE')
    this.$store.dispatch('GET_RESIZE_STATE')
    this.$store.dispatch('GET_SCROLL_STATE')
    this.$store.dispatch('GET_USER_AGENT')
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
