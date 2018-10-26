// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';
import store from "./store";
import './permission';
import infiniteScroll from 'vue-infinite-scroll'
require('./mock/mock.js')
Vue.config.productionTip = false
/* eslint-disable no-new */
Vue.use(Vant);
Vue.use(infiniteScroll)
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
