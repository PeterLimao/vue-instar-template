import Vue from 'vue'
import * as Filter from './filter'

Object.keys(Filter).forEach((key) => {
  Vue.filter(key, Filter[key])
})
