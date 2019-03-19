// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import './css/style.css' // 引入样式

import api from './axios/api_config'
import axios from './axios/axios_config'

import Filters from './filter'

import storeConfig from './store' // 引入store配置

Vue.use(ElementUI)
Vue.use(Filters)

Vue.use(Vuex)

// 把这些配置都挂在到原型上,方便以后调用
Vue.prototype.$http = axios
Vue.prototype.$api = api

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store: new Vuex.Store(storeConfig)
})
