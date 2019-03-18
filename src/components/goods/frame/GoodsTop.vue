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
                      <app-menu :menu="item.subcates"></app-menu>
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
              <el-carousel-item
                v-for="item in topData.sliderlist"
                :key="item.id"
                :style="{'background-image':'url('+item.img_url+')'}"
              >
                <router-link :to="{name:'gd',params:{id:item.id}}" style="display:inline-block;width:100%;height:100%;"></router-link>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
        <!-- 轮播图 -->
        <!-- 推荐商品 -->
        <div class="left-220">
          <div class="side-img-list">
            <ul>
              <!-- 循环渲染推荐商品 -->
              <li v-for="(item,index) in topData.toplist" :key="item.id">
                <div class="img-box">
                  <label v-html="index+1"></label>
                  <img :src="item.img_url">
                </div>
                <div class="txt-box">
                  <router-link :to="{name:'gd',params:{id:item.id}}">{{item.title}}</router-link>
                  <span>{{item.add_time | date}}</span>
                </div>
              </li>
              <!-- 循环渲染推荐商品 -->
            </ul>
          </div>
        </div>
        <!-- 推荐商品 -->
      </div>
    </div>
  </div>
</template>

<script>
import MenuComponent from './Menu.vue'
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
  components: {
    appMenu: MenuComponent
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
.el-carousel__item {
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