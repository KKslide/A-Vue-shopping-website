<template>
  <div>
    <app-cumd></app-cumd>
    <app-top></app-top>
    <app-list></app-list>
  </div>
</template>

<script>
import GoodsTopComponent from './frame/GoodsTop'
import GoodsListComponent from './frame/GoodsList'
import GoodsCumdComponent from './frame/BreadCumd'
export default {
  components: {
    appTop: GoodsTopComponent,
    appList: GoodsListComponent,
    appCumd: GoodsCumdComponent
  }
}
</script>

<style scoped>
</style>