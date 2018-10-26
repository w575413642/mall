import {
    test
  } from '@/api/test'
  const mo = {
    state: {
      test: []
    },
    mutations: {
      CLIENT_TEST: (state, test) => {
        state.test = test
      }
    },
    actions: {
      // 学费缴纳门户显示
      async loadBizTuition({
        commit
      }, Parm) {
        const list = await test(Parm)
        commit('CLIENT_TEST', list.data)
        return list
      }
    }
  }
  
  export default mo