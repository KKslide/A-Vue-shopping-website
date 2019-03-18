<template>
  <div class="goods-spec">
    <h1>{{goodsinfo.title}}</h1>
    <p class="subtitle">{{goodsinfo.subtitle}}</p>
    <div class="spec-box">
      <dl>
        <dd>货号</dd>
        <dd id="commodityGoodsNo">{{goodsinfo.goods_no}}</dd>
      </dl>
      <dl>
        <dt>市场价</dt>
        <dd>
          <s id="commodityMarketPrice">￥{{goodsinfo.market_price}}</s>
        </dd>
      </dl>
      <dl>
        <dt>销售价</dt>
        <dd>
          <em class="price" id="commoditySellPrice">￥{{goodsinfo.sell_price}}</em>
        </dd>
      </dl>
    </div>
    <div class="spec-box">
      <el-input-number v-model="goodsCount" @change="handleChange" :min="1" :max="goodsinfo.stock_quantity" label="购买数量"></el-input-number>
    </div>
  </div>
</template>

<script>
export default {
  props: ['goodsinfo'],
  data() {
    return {
      goodsCount: 1,
    }
  },
  methods: {
      handleChange(){

      }
  }
}
</script>

<style scoped>
</style>