<template>
  <div class="section">
    <div class="wrapper">
      <div class="wrap-box">
        <!-- 类别菜单 -->
        <div class="left-220" style="margin:0">
          <div class="banner-nav">
            <ul>
              <!-- 循环分类列表 -->
              <li v-for="item in topData.catelist" :key="item.id">
                <h3>
                  <i class="iconfont icon-arrow-right"></i>
                  <span>{{item.title}}</span>
                  <p>
                    <span v-for="subitem in item.subcates" :key="subitem.id">{{subitem.title}}</span>
                  </p>
                </h3>
                <div class="item-box">
                  <!-- 渲染三级分类 -->
                  <dl>
                    <dt>
                      <router-link :to="{name:'gd',params:{id:item.id}}">{{item.title}}</router-link>
                    </dt>
                    <dd>
                      <router-link
                        v-for="subitem in item.subcates"
                        :key="subitem.id"
                        :to="{name:'gd',params:{id:item.id}}"
                      >{{item.title}}</router-link>
                    </dd>
                  </dl>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!-- 类别菜单 -->
        <!-- 轮播图 -->
        <div class="left-705">
          <div class="banner-img">
            <el-carousel indicator-position="outside">
              <el-carousel-item v-for="item in topData.sliderlist" :key="item.id" :style="{'background-image':'url('+item.img_url+')'}">
                <!-- <img :src="item.img_url"> -->
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
        <!-- 轮播图 -->
        <!-- 推荐商品 -->
        <div class="left-220">
          <div class="side-img-list">
            <ul>
              <li>
                <div class="img-box">
                  <label>1</label>
                  <img src="/upload/201504/20/thumb_201504200314272543.jpg">
                </div>
                <div class="txt-box">
                  <a href="/goods/show-98.html">奔腾（BNTN） 380功放+纽约至尊 套装家庭影院</a>
                  <span>2015-04-20</span>
                </div>
              </li>
              <li>
                <div class="img-box">
                  <label>2</label>
                  <img src="/upload/201504/20/thumb_201504200258403759.jpg">
                </div>
                <div class="txt-box">
                  <a href="/goods/show-97.html">三星（SAMSUNG）UA40HU5920JXXZ 40英寸4K超高清</a>
                  <span>2015-04-20</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!-- 推荐商品 -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topData: {
        catelist: [],
        sliderlist: [],
        toplist: []
      }
    }
  },
  methods: {
    getTopData() {
      this.$http.get(this.$api.goodsTop)
        .then(res => {
          this.topData = res.data.message
        })
    }
  },
  mounted() {
    this.getTopData()
  }
}
</script>

<style scoped lang="less">
.el-carousel__item{
    background-position: center;
    background-size: contain;
    background-repeat: repeat-x;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.banner-img img {
  width: 100%;
  height: 100%;
}
</style>