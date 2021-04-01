import Vue from 'vue'
import App from './App'
import axios from 'axios'
Vue.prototype.$axios = axios
axios.defaults.baseURL = '/api'

Vue.config.productionTip = false //阻止启动生产消息

import './assets/css/reset.css'

new Vue({
  render:h => h(App)
}).$mount('#app')
