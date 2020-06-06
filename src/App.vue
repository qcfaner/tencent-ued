<template>
  <div class="app-container">
    <!-- 顶部导航 -->
    <topNav></topNav>

    <div class="main-container">
      <div class="main-wrap">
        <!-- 路由出口：路由匹配到的组件将渲染在这里 -->
        <router-view></router-view>
      </div>

      <!-- 侧边栏 -->
      <div class="sidebar">
        <sideBar></sideBar>
      </div>
    </div>
    
  </div>
</template>

<script>
import topNav from "@/components/topNav.vue";
import sideBar from "@/components/sideBar.vue";
export default {
  name: "App",
  components: {
    topNav,
    sideBar
  }
};
</script>

<style>
</style>
