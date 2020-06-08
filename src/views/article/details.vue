<template>
  <div>
    <h3>文章 id:{{ $route.params.id }}</h3>
    <!-- <div>{{ article.title }}</div> -->
    <div>{{articleDetail.content}}</div>
  </div>
</template>

<script>
export default {
  props: ["article"],
  data() {
    return {
      articleDetail: {}
    };
  },
  methods: {
    getArticleDetail() {
      this.$axios.get("/serve/articles-detail").then(res => {
        this.articleDetail = res && res.data.data;
      });
    }
  },
  created() {
    this.getArticleDetail();
    console.log(this.article);
  }
};
</script>

<style>
</style>