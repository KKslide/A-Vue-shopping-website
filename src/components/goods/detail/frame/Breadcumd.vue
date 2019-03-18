<template>
  <!-- 面包屑导航 -->
  <div class="section">
    <div class="location">
      <span>当前位置：</span>
      <!-- <a href="/index.html">首页</a>  -->
      <router-link :to="{path:'/'}">Main</router-link>
      &gt;
      <!-- <a href="/goods.html">购物商城</a> -->
      <router-link :to="{name:'g'}">Shop-Detail</router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
</style>