import Cookies from 'js-cookie'
import {
  login
} from '@/api/login'
import {
  shoppingInfo
} from '@/api/shopping'
import {
  account,
  accountInfo,
  processInfo,
  defaultMsg,
  evaluateInfo
} from '@/api/self'
const selfInfo = {
  state: {
    userMsg: {},
    shoppingCar: []
  },
  mutations: {
    SET_COOKIE: (state, data) => {
      Cookies.set("Token", data.Token)
    },
    SET_USER: (state, data) => {
      state.userMsg = data
    },
    SET_SHOPPING: (state, data) => {
      state.shoppingCar = data
    },
  },
  actions: {
    async searchEvaluate({
    commit
  }, Parm) {
    return await evaluateInfo(Parm)
  },
  async savePorduct({
    commit
  }, Parm) {
    commit('SET_SHOPPING', Parm)
  },
  async defaultUserInfo({
    commit
  }, Parm) {
    const req = await defaultMsg(Parm)
    return req
  },
  async shoppingCarInfo({
    commit
  }, Parm) {
    const req = await shoppingInfo(Parm)
    return req
  },
  // 请求登录
  async loginInfo({
    commit
  }, Parm) {
    const req = await login(Parm)
    if (req.code == 1) { commit('SET_COOKIE', req) }
    return req
  },
  async accountMsg({
    commit
  }, Parm) {
    const req = await account(Parm)
    if (req.code == 1) { commit('SET_USER', req.data) }
    return req
  },
  async accountInfo({
    commit
  }, Parm) {
    const req = await accountInfo(Parm)
    return req
  },
  async accountProcess({
    commit
  }, Parm) {
    const req = await processInfo(Parm)
    return req
  }
}
}

export default selfInfo