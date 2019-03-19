<template>
  <div>
    <div class="section">
      <div class="location">
        <span>当前位置：</span>
        <a href="/">Main</a> &gt;
        <a href="javascript:;">ShopCart</a>
      </div>
    </div>
    <div class="section">
      <div class="wrapper">
        <div class="bg-wrap">
          <!-- 购物车头部 -->
          <div class="cart-head clearfix">
            <h2>
              <i class="iconfont icon-cart"></i>我的购物车
            </h2>
            <div class="cart-setp">
              <ul>
                <li class="first active">
                  <div class="progress">
                    <span>1</span>
                    放进购物车
                  </div>
                </li>
                <li>
                  <div class="progress">
                    <span>2</span>
                    填写订单信息
                  </div>
                </li>
                <li class="last">
                  <div class="progress">
                    <span>3</span>
                    支付/确认订单
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!-- 购物车头部 -->
          <!-- 商品列表 -->
          <div class="cart-box">
            <input id="jsondata" name="jsondata" type="hidden">
            <table
              width="100%"
              align="center"
              class="cart-table"
              border="0"
              cellspacing="0"
              cellpadding="8"
            >
              <tbody>
                <tr>
                  <th width="48" align="center">
                    <!-- 设置value属性 -->
                    <el-switch
                      :value="allSwitchState"
                      @change="switchAllChange"
                      active-color="#13ce66"
                    ></el-switch>
                  </th>
                  <th align="left" colspan="2">商品信息</th>
                  <th width="84" align="left">单价</th>
                  <th width="104" align="center">数量</th>
                  <th width="104" align="left">金额(元)</th>
                  <th width="54" align="center">操作</th>
                </tr>
                <!-- 商品列表 -->
                <tr v-for="item in goodsList" :key="item.id">
                  <td width="48" align="center">
                    <el-switch v-model="item.selected" active-color="#13ce66"></el-switch>
                  </td>
                  <td align="left" colspan="2">
                    <img width="50" height="50" :src="item.img_url" alt>
                    <span>{{ item.title }}</span>
                  </td>
                  <td width="84" align="left">￥{{ item.sell_price }}</td>
                  <td width="104" align="center">
                    <el-input-number
                      v-model="item.buycount"
                      @change="numberChange(item.id, $event)"
                      size="mini"
                      :min="1"
                    ></el-input-number>
                  </td>
                  <td width="104" align="left">￥{{ item.sell_price * item.buycount }}</td>
                  <td width="54" align="center">
                    <el-button size="mini" @click.native="delGoods(item.id)">删除</el-button>
                  </td>
                </tr>
                <!-- 商品列表 -->
                <!-- 没有添加商品时的提示 -->
                <tr v-if="!goodsList.length">
                  <td colspan="10">
                    <div class="msg-tips">
                      <div class="icon warning">
                        <i class="iconfont icon-tip"></i>
                      </div>
                      <div class="info">
                        <strong>购物车没有商品！</strong>
                        <p>
                          您的购物车为空，
                          <a href="/index.html">马上去购物</a>吧！
                        </p>
                      </div>
                    </div>
                  </td>
                </tr>
                <!-- 没有添加商品时的提示 -->
                <!-- 总价和运费 -->
                <tr>
                  <th align="right" colspan="8">
                    已选择商品
                    <b class="red" id="totalQuantity">{{selectedShopcartTotal}}</b> 件 &nbsp;&nbsp;&nbsp; 商品总金额（不含运费）：
                    <span class="red">￥</span>
                    <b class="red" id="totalAmount">{{selectedShopcartTotalPrice}}</b>元
                  </th>
                </tr>
                <!-- 总价和运费 -->
              </tbody>
            </table>
          </div>
          <!-- 商品列表 -->
          <!--购物车底部-->
          <div class="cart-foot clearfix">
            <div class="right-box">
              <button class="button" onclick="javascript:location.href='/index.html';">继续购物</button>
              <button class="submit" onclick="formSubmit(this, '/', '/shopping.html');">立即结算</button>
            </div>
          </div>
          <!--购物车底部-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodsList: []
    }
  },
  computed: {
    //   已选商品数量
    selectedShopcartTotal() {
      return this.goodsList.reduce((p, c) => c.selected ? p + c.buycount : p, 0)
    },
    // 总价
    selectedShopcartTotalPrice() {
      return this.goodsList.reduce((p, c) => c.selected ? p + c.sell_price * c.buycount : p, 0)
    },
    // 全选状态
    allSwitchState() {
      return this.goodsList.every(v => v.selected)
    }
  },
  methods: {
    getGoodsList() {
      this.$http.get(this.$api.shopcarGoods + this.$store.getters.getShopcartIDs)
        .then(res => {
          res.data.message.forEach(goods => {
            goods.selected = true
            goods.buycount = this.$store.getters.getShopcartData[goods.id]
          })
          this.goodsList = res.data.message
        })
    },
    // 数量更改
    numberChange(id, val) {
      this.$store.commit('upShopcartData', { id: id, val: val })
    },
    // 删除商品
    delGoods(id) {
      this.$store.commit('delShopcartData', { id: id })
      this.goodsList = this.goodsList.filter(v => v.id != id)
    },
    // 全选按钮
    switchAllChange(bol) {
      this.goodsList.forEach(v => v.selected = bol)
    }
  },
  created() {
    this.getGoodsList();
  }
}
</script>

<style scoped lang="less">
</style>