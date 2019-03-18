<template>
  <!-- 对所有页面开发的公共评论组件 -->
  <div class="comment-box">
    <!--取得评论总数-->
    <form
      id="commentForm"
      name="commentForm"
      class="form-box"
      url="/tools/submit_ajax.ashx?action=comment_add&amp;channel_id=2&amp;article_id=98"
    >
      <div class="avatar-box">
        <i class="iconfont icon-user-full"></i>
      </div>
      <div class="conn-box">
        <div class="editor">
          <textarea
            v-model="commentContent"
            id="txtContent"
            name="txtContent"
            sucmsg=" "
            data-type="*10-1000"
            nullmsg="请填写评论内容！"
          ></textarea>
          <span class="Validform_checktip"></span>
        </div>
        <div class="subcon">
          <input id="btnSubmit" name="submit" type="submit" value="提交评论" class="submit">
          <span class="Validform_checktip"></span>
        </div>
      </div>
    </form>
    <ul id="commentList" class="list-box">
      <p v-if="!commentList.length">暂无评论，快来抢沙发吧！</p>
      <!-- 具体评论 -->
      <li v-for="item in commentList" :key="item.add_time">
        <div class="avatar-box">
          <i class="iconfont icon-user-full"></i>
        </div>
        <div class="inner-box">
          <div class="info">
            <span>{{ item.user_name }}</span>
            <span>{{ item.user_ip }}</span>
            <span>{{ item.add_time | date }}</span>
          </div>
          <p>{{ item.content }}</p>
        </div>
      </li>
    </ul>
    <!--放置页码-->
    <div class="page-box" style="margin:5px 0 0 62px">
      <div id="pagination" class="digg">
        <span class="disabled">« 上一页</span>
        <span class="current">1</span>
        <span class="disabled">下一页 »</span>
      </div>
    </div>
    <!--/放置页码-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      commentContent: '', // 绑定用户要发表的评论内容
      commentList: [], // 接收评论数据
      query: { // 分页参数
        pageIndex: 1,
        pageSize: 5
      }
    }
  },
  props: ['tablename', 'artID'],
  methods: {
    getComment() {
      this.$http.get(this.$api.commentList + this.tablename + '/' + this.artID, { params: this.query })
        .then(res => {
          this.commentList = res.data.message
        })
    }
  },
  created() {
    this.getComment();
  }
};
</script>

<style scoped lang="less">
#commentList {
  > p {
    margin: 5px 0 15px 69px;
    line-height: 42px;
    text-align: center;
    border: 1px solid #f7f7f7;
  }
}
</style> 