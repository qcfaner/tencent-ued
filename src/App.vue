<template>
  <div class="app-container">
    <top></top>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
import top from "@/components/header.vue";
export default {
  name: "App",
  components: {
    top
  }
};
</script>

<style>
</style>
