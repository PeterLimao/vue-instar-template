import Vuex from 'vuex'
import Vue from 'vue'

import Getters from './getters'
import Actions from './actions'

import Global from './modules/global'

Vue.use(Vuex)

const store = new Vuex.Store({
  getters: Getters,
  actions: Actions,
  modules: {
    global: Global
  }
})

export default store
