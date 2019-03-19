import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

import GoodsHomeComponent from '../components/goods/GoodsHome.vue'
import GoodsDetailComponent from '../components/goods/detail/GoodsDetail.vue'
import GoodsMoreComponent from '../components/goods/more/GoodsMore.vue'

import ShopCartComponent from '../components/shopcart/ShopCart.vue'

export default new Router({
  routes: [
    { path: '/', redirect: '/goods' },
    { name: 'g', path: '/goods', component: GoodsHomeComponent },
    { name: 'gd', path: '/goods/detail/:id', component: GoodsDetailComponent },
    { name: 'gm', path: '/goods/more', component: GoodsMoreComponent },
    { name: 'sc', path: '/shopcart', component: ShopCartComponent }
  ]
})
