import Cookies from 'js-cookie'
import { pictures, list, commodity, arrivals } from '@/api/homePage'
const app = {
  state: {
  },
  mutations: {
    CLIENT_TEST: (state, test) => {
      state.test = test
    }
  },
  actions: {
    async arrivalsCommodity({
      commit
    }, Parm) {
      const req = await arrivals(Parm)
      return req
    }, async getCommonCommodity({
      commit
    }, Parm) {
      const req = await commodity(Parm)
      return req
    },
    async getCommonPicture({
      commit
    }, Parm) {
      const req = await pictures(Parm)
      return req
    },
    async getCommonList({
      commit
    }, Parm) {
      const req = await list(Parm)
      return req
    }
  }
}

export default app