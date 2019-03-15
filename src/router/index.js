import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

import GoodsHomeComponent from '../components/goods/GoodsHome.vue'
import GoodsDetailComponent from '../components/goods/detail/GoodsDetail.vue'
import GoodsMoreComponent from '../components/goods/more/GoodsMore.vue'

export default new Router({
  routes: [
    { path: '/', redirect: '/goods', component: GoodsHomeComponent },
    { path: '/goods/detail/:id', component: GoodsDetailComponent },
    { path: '/goods/more', component: GoodsMoreComponent }
  ]
})
