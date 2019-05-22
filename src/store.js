import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lastResults: []
  },
  getters: {
    lastResults: (state) => state.lastResults
  },
  mutations: {
    SET_RESULTS (state, result) {
      state.lastResults = [result, ...state.lastResults]
    }
  },
  actions: {
    setResults ({ commit }, data) {
      commit('SET_RESULTS', data)
    }
  }
})
