import Vue from 'vue'
import Vuex from 'vuex'
import vuexStorage from './vuexStorage'

Vue.use(Vuex)

const state = {
  count: 0
}

var store =  new Vuex.Store({
	state,
	mutations: {
    increment (state) {
      state.count++
    }
  }
})
vuexStorage.init(store, ['count'])

export default store
