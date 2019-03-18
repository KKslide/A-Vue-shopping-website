<template>
  <div>
    <!-- 导航 -->
    <app-breadcumd></app-breadcumd>
    <!-- 商品详情 -->
    <div class="section">
      <div class="wrapper">
        <div class="wrap-box">
          <!-- 页面左边 -->
          <div class="left-925">
            <div class="goods-box clearfix">
              <!-- 商品图片 -->
              <div class="pic-box">
                <app-left-img :imglist="detailData.imglist"></app-left-img>
              </div>
              <!-- 商品图片 -->
              <!-- 商品信息 -->
              <app-left-info :goodsinfo="detailData.goodsinfo"></app-left-info>
              <!-- 商品信息 -->
            </div>

            <!-- 选项卡 -->
            <div id="goodsTabs" class="goods-tab bg-wrap">
              <div
                id="tabHead"
                class="tab-head"
                style="position: static; top: 517px; width: 925px;"
              >
                <ul>
                  <li>
                    <a href="javascript:;">商品介绍</a>
                  </li>
                  <li>
                    <a href="javascript:;">商品评论</a>
                  </li>
                </ul>
              </div>
            </div>
            <!-- 选项卡 -->

            <!-- 选项内容 -->
            <div class="tab-content entry" style="display:blok">内容</div>
            <div class="tab-content" style="display:blok">
                <!-- 网友评论 -->
                <app-comment></app-comment>
                <!-- 网友评论 -->
            </div>
            <!-- 选项内容 -->

            
          </div>
          <!-- 页面左边 -->

          <!-- 页面右边 -->
          <div class="left-220">
              <div class="bg-wrap nobg">
                  <app-right :hotgoodslist="detailData.hotgoodslist"></app-right>
              </div>
          </div>
          <!-- 页面右边 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommentComponent from '../../common/Comment'
import BreadcumdComponent from './frame/Breadcumd'
import LeftImgComponent from './frame/LeftImg'
import LeftInfoComponent from './frame/LeftInfo'
import RightComponent from './frame/Right'
export default {
  data() {
    return {
      id: this.$route.params.id,
      detailData: {
        goodsinfo: {},
        hotgoodslist: [],
        imglist: []
      }
    }
  },
  components: {
    appBreadcumd: BreadcumdComponent,
    appLeftImg: LeftImgComponent,
    appLeftInfo: LeftInfoComponent,
    appRight: RightComponent,
    appComment:CommentComponent
  },
  methods: {
    getGoodsDetailData() {
      this.$http.get(this.$api.goodsDetail + this.id)
        .then(res => {
          this.detailData = res.data.message
        })
    }
  },
  created() {
    this.getGoodsDetailData();
  }
}
</script>

<style scoped>
</style>