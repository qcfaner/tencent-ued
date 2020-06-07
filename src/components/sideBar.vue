<template>
  <div class="sidebar">
    <!-- 侧边栏：搜索框 -->
    <div class="item search">
      <el-input v-model="input" placeholder="请输入内容">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>

    <!-- 侧边栏：广告位 -->
    <div class="item ads">
      <img src="@/assets/image/common-ads-bg.jpg" alt="广告位">
    </div>

    <!-- 侧边栏：文章分类 -->
    <card title="文章分类">
      <ul class="category">
        <li><a href="javascript:;">交互设计</a>(8)</li>
        <li><a href="javascript:;">作品案例</a>(26)</li>
        <li><a href="javascript:;">前端技术</a>(3)</li>
        <li><a href="javascript:;">杂七杂八</a>(10)</li>
        <li><a href="javascript:;">用户研究</a>(2)</li>
        <li><a href="javascript:;">视觉设计</a>(50)</li>
        <li><a href="javascript:;">资源推荐</a>(21)</li>
      </ul>
    </card>

    <!-- 侧边栏：微信号-->
    <card title="微信号">
      <div class="wechart-warp">
        <img src="@/assets/image/common-wechart.png" alt="微信号">
      </div>
    </card>

     <!-- 侧边栏：近期文章-->
    <card title="近期文章">
      <ul>
        <li v-for="article in articleList" :key="article.id"><a href="javascript:;">{{ article.title }}</a></li>
      </ul>
    </card>
  </div>
</template>

<script>
import card from './card.vue'
export default {
  components: { card },
  data(){
    return {
      input: "",
      articleList: [] // 近期文章
    }
  },
  methods: {
    getArticleList(){
      this.$http.get('/service/article-list').then(res => {
        this.articleList = res && res.data.data;
      })
    }
  },
  created(){
    this.getArticleList();
  }
}
</script>

<style scoped lang="less">
  .sidebar {
    ul > li {
      padding: 2px 0;
    }
    .item {
      padding-bottom: 20px;
    }
    .ads {
      img {
        width: 100%;
      }
    }
    .category {
      li {
        color: #999;
        font-size: 12px;
        a {
          font-size: 14px;
          padding-right: 3px;
        }
      }
    }
    .wechart-warp {
      img {
        border: 1px solid #e7e7e7;
      }
    }
  }
</style>