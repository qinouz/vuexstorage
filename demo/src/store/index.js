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
vuexStorage.init(store, ['count']) // 此处传入的数组，定义要实现同步的state 名称

export default store
