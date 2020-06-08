<template>
  <div>
    <h3>文章 id:{{ $route.params.id }}</h3>
    <div>{{articleDetail.title}}</div>
  </div>
</template>

<script>
export default {
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
  }
};
</script>

<style>
</style>