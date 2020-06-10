<template>
  <div class="app-container">
    <!-- 顶部导航11 -->
    <topNav></topNav>
    <div class="nav-bar" v-if="showBanner">
      <ul class="showBanner clearfix">
        <li v-show="this.currentIndex===0">
          <a href="javascript:;"></a>
        </li>
        <li v-show="this.currentIndex===1">
          <a href="javascript:;"></a>
        </li>
      </ul>
      <ul class="circle clearfix">
        <li>
          <a href="javascript:;" @click="getShowpic(0)" :class="{choice:this.currentIndex==0}"></a>
        </li>
        <li>
          <a href="javascript:;" @click="getShowpic(1)" :class="{choice:this.currentIndex==1}"></a>
        </li>
      </ul>
    </div>
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
  data() {
    return {
      showBanner: false,
      currentIndex: 0
    };
  },
  methods: {
    getShowpic(index) {
      this.currentIndex = index;
    }
  },
  watch: {
    $route: function(n, o) {
      console.log(this.$route); // 从 $route 里面可以获取当前的路由配置信息
      this.showBanner = n.fullPath === "/article";
    }
  },
  created() {}
};
</script>

<style lang='less' scoped>
.main-wrap {
  color: #333;
  font-family: "微软雅黑", "黑体";
}
.nav-bar {
  position: relative;
  .showBanner {
    position: relative;
    height: 300px;
    li {
      float: left;
      width: 100%;
      a {
        display: block;
        height: 300px;
      }
    }
    li:first-child {
      a {
        background: url(~@/assets/image/topNav-banner1.jpg) center top no-repeat;
      }
    }
    li:last-child {
      a {
        background: url(~@/assets/image/topNav-banner.jpg) center top no-repeat;
      }
    }
  }
  .circle {
    position: absolute;
    bottom: 10px;
    left: 47%;
    z-index: 999;
    li {
      float: left;
      a {
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        margin-right: 8px;
        background: #fff;
      }
    }
    .choice {
      background: skyblue;
    }
  }
}
</style>
