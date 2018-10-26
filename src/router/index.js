import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// default page
export const defaultRouter = [
  // login
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  },
  // classification
  {
    path: '/classification',
    name: 'classification',
    component: () => import('@/views/classification/index.vue')
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('@/views/homePage/index.vue')
  },
  {
    path: '/self',
    name: 'self',
    component: () => import('@/views/self/index.vue')
  },
  {
    path: '/receivingAddress',
    name: 'receivingAddress',
    component: () => import('@/views/self/receivingAddress.vue')
  },
  {
    path: '/shoppingCart',
    name: 'shoppingCart',
    component: () => import('@/views/shoppingCart/index.vue')
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('@/views/product/index.vue')
  },
  {
    path: '/commodityDetails',
    name: 'commodityDetails',
    component: () => import('@/views/commodityDetails/index.vue')
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('@/views/order/index.vue')
  },
  {
    path: '/evaluate',
    name: 'evaluate',
    component: () => import('@/views/evaluate/index.vue')
  },
  {
    path: '/pay',
    name: 'pay',
    component: () => import('@/views/pay/index.vue')
  }, {
    path: '/fullOrder',
    name: 'fullOrder',
    component: () => import('@/views/fullOrder/index.vue')
  },
  // redirect
  {
    path: "",
    component: () => import("@/views/homePage/index.vue"),
    redirect: "/index",
    children: []
  }
]

export default new Router({
  // default router
  mode: "history",
  routes: defaultRouter
})
