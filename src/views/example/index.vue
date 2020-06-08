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
</style>