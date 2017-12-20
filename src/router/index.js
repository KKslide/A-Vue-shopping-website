import VueRouter from 'vue-router';

import GoodsHomeComponent from '../component/goods/GoodsHome.vue';
import GoodsDetailComponent from '../component/goods/detail/GoodsDetail.vue';
import GoodsMoreComponent from '../component/goods/more/GoodsMore.vue';

const routerConfig = [
    /* 默认访问首页 */
    { path: '/', redirect: '/goods' },

    /* 商品 */
    { path: '/goods', component: GoodsHomeComponent },
    { path: '/goods/detail/:id', component: GoodsDetailComponent },
    { path: '/goods/more', component: GoodsMoreComponent }
];

export default new VueRouter({
    routes: routerConfig
});