<template>
  <div>
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
        this.articleList = res && res.data.data;
      });
    }
  },
  created() {
    this.getArticleList();
  }
};
</script>

<style>
</style>