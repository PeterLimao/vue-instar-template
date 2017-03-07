import Vue from 'vue'
import VueRouter from 'vue-router'

import {
  mainPage
} from './routePages'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: mainPage
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
