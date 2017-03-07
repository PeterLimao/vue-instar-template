import Vue from 'vue'
import App from './App.vue'
import Promise from 'promise-polyfill'
import Store from '@/store'
import Router from '@/router'
import '@/plugins'
import '@/filters'
import '@/assets/style/base'

Vue.config.debug = process.env.NODE_ENV !== 'production'

if (!window.Promise) {
  window.Promise = Promise
}

new Vue({
  el: '#app',
  store: Store,
  router: Router,
  ...App
})
