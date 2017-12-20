import Vue from 'vue';
import VueRouter from 'vue-router';
import './css/style.css';

/* 启用 */
Vue.use(VueRouter);

import AppComponent from './component/App.vue';

import router from './router/index.js';

new Vue({
    el: '#app',
    render: c => c(AppComponent),
    // router: router //es6可以直接省略↓
    router
});