<template>
  <div class="app-container">
    <!-- 顶部导航 -->
    <topNav></topNav>

    <p v-if="showBanner">123</p>

    <div class="main-container">
      <div class="main-wrap">
        <!-- 路由出口：路由匹配到的组件将渲染在这里 -->
        <router-view></router-view>
      </div>

      <!-- 侧边栏 -->
      <div class="sidebar-warp">
        <sideBar></sideBar>
      </div>
    </div>
    
  </div>
</template>

<script>
/* eslint-disable */
import topNav from "@/components/topNav.vue";
import sideBar from "@/components/sideBar.vue";
export default {
  name: "App",
  components: {
    topNav,
    sideBar
  },
  data(){
    return {
      showBanner: false
    }
  },
   watch: {
     "$route": function(n, o){       
        console.log(this.$route); // 从 $route 里面可以获取当前的路由配置信息
        this.showBanner = n.fullPath === '/article';
     }
   },
  created(){
  }
};
</script>

<style>
</style>
