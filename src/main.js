import Vue from 'vue';
import VueRouter from 'vue-router';
import './css/style.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Filters from './filter/index.js';


/* 启用 */
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(Filters);


/* 引入配置+写入原型 */
import axios from './js/axios_config.js';
import api from './js/api_config.js';
Vue.prototype.$http = axios;
Vue.prototype.$api = api;

import AppComponent from './component/App.vue';

/* 引入路由实例↓ */
import router from './router/index.js';

new Vue({
    el: '#app',
    render: c => c(AppComponent),
    // router: router //es6可以直接省略↓
    router
});