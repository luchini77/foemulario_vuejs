import { createStore } from 'vuex'
import router from '../router'

export default createStore({
  state: {
    telefonos: [],
  },
  getters: {
    allTelefonos(state){
      return state.telefonos
    }
  },
  mutations: {
    setTelefonos(state, payload){
      state.telefonos = payload
      router.push('/')
    }
  },
  actions: {
    getTelefonos({commit}, telefono){
      commit('setTelefonos', telefono)
    }
  },
  modules: {
  }
})
