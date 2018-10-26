import Cookies from 'js-cookie'
const app = {
  state: {
    error: {}
  },
  mutations: {
    CLIENT_TEST: (state, test) => {
      state.test = test
    },
    SET_ERROR: (state, data) => {
      state.error = data
    }
  },
  actions: {
    async requestError({
      commit
    }, Parm) {
      commit('SET_ERROR', Parm)
    },
    async getUserInfo({
      commit
    }, Parm) {
      Cookies.set("Token", "admin")
      // const list = await test(Parm)
      // commit('CLIENT_TEST', list.data)
      // return list
    }
  }
}

export default app