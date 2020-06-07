<template>
  <div>
    <h2 class="preface">案例example</h2>
    <articleCard v-for="article in articleList" :key="article.id" :article="article"></articleCard>
  </div>
</template>

<script>
import articleCard from "@/components/articleCard.vue";
export default {
  components: {
    articleCard
  },
  data() {
    return {
      articleList: []
    };
  },
  methods: {
    getArticleList() {
      this.$axios.get("/service/article-list").then(res => {
        this.articleList = res.data.data;
      });
    }
  },
  created() {
    this.getArticleList();
  }
};
</script>

<style lang='less' scoped>
.preface {
  padding-top: 25px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e3e3e3;
  margin-bottom: 20px;
  line-height: 30px;
  font-size: 22px;
  color: #666;
  font-family: "微软雅黑", "黑体";
}
</style>