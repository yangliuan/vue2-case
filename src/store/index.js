
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import device from './modules/device'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    device
  },
  getters
})

export default store