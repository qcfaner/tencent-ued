<template>
  <div class="app-container">
    <!-- 顶部导航 -->
    <topNav></topNav>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
import topNav from "@/components/topNav.vue";
export default {
  name: "App",
  components: {
    topNav
  }
};
</script>

<style>
</style>
