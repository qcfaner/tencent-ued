<template>
  <div class="header">
    <div class="nav-content">
      <div class="nav-logo">
        <a href="javascript:;">
          <img class="nav-pic" src="@/assets/image/top-nav/nav-logo.jpg" alt="官方链接" />
        </a>
      </div>
      <div class="nav-banner">
        <router-link to="/article">
          文章
          <span>Article</span>
        </router-link>
        <span class="line">/</span>
        <router-link to="/example">
          案例
          <span>Example</span>
        </router-link>
        <span class="line">/</span>
        <router-link to="/jobs">
          招聘
          <span>Jobs</span>
        </router-link>
        <span class="line">/</span>
        <router-link to="/about">
          关于
          <span>About</span>
        </router-link>
        <router-link to="/join">
          5汇
          <span>H5</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "topNav"
};
</script>

<style lang='less' scoped>
.header {
  height: 70px;
  background: #34a8f8;
  .nav-content {
    display: flex;
    justify-content: space-between;
    width: 960px;
    margin: 0 auto;
    .nav-pic {
      display: block;
    }
    .nav-banner {
      height: 67px;
      color: #65b5ee;
      a {
        color: #fff;
        display: inline-block;
        text-decoration: none;
        height: 67px;
        line-height: 67px;
        border-top: 3px solid #34a8f8;
        padding: 0 3px;
        margin-left: 5px;
        font-size: 16px;
        &:hover {
          border-top: 3px solid #7dd600;
        }
        &:last-child {
          background: url(~@/assets/image/top-nav/nav-bg.jpg) no-repeat;
          width: 134px;
          height: 70px;
          text-align: center;
          border-top: none;
          position: relative;
          top: -2.6px;
          &:hover {
            background-position: 0 -70px;
            border-top: none;
          }
          span {
            font-size: 16px;
            color: #fff;
          }
        }
        span {
          font-size: 14px;
          color: #c0e4fe;
          font-family: 微软雅黑, 黑体;
        }
      }
      .line {
        color: #65b5ee;
        padding: 0 10px;
      }
    }
  }
}
</style>