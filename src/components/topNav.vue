<template>
  <div class="header">
    <div class="nav-content">
      <div class="nav-logo">
        <a href="javascript:;">
          <img src="@/assets/image/top-nav/nav-logo.jpg" alt="官方链接" />
        </a>
      </div>
      <div class="nav-banner">
        <a href="javascript:;">
          文章
          <span>Atricle</span>
        </a>
        <span class="mark">/</span>
        <a href="javascript:;">
          案例
          <span>Example</span>
        </a>
        <span class="mark">/</span>
        <a href="javascript:;">
          招聘
          <span>Jobs</span>
        </a>
        <span class="mark">/</span>
        <a href="javascript:;">
          关于
          <span>About</span>
        </a>
        <a href="javascript:;">
          5汇
          <span class="info">H5</span>
        </a>
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
    .nav-banner {
      height: 67px;
      color: #65b5ee;
      a {
        color: #fff;
        display: inline-block;
        height: 67px;
        line-height: 67px;
        border-top: 3px solid #34a8f8;
        padding: 0 3px;
        span {
          font-size: 14px;
          color: #c0e4fe;
          font-family: 微软雅黑, 黑体;
        }
        .info {
          font-size: 16px;
          color: white;
        }
      }
      .mark {
        font-size: 16px;
        color: #65b5ee;
        padding: 0 10px;
      }
    }
  }
}
</style>