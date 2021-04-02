import Vue from 'vue'
import App from './App'
import router from "./router";

Vue.config.productionTip = false //阻止启动生产消息

import Http from "./utils/http";
import './assets/css/reset.css'

//全局过滤器
import '@/filter/img.js'

Vue.prototype.$http = new Http()

const vm = new Vue({
  router,
  render:h => h(App)
}).$mount('#app')


