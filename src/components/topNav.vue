<template>
  <div class="header">
    <div class="nav-content clearfix">
      <div class="fl">
        <a href="javascript:;">
          <img src="@/assets/image/top-nav/nav-logo.jpg" alt="官方链接" />
        </a>
      </div>
      <ul class="clearfix fr nav-banner">
        <li>
          <a href="javascript:;">
            文章
            <span>Atricle</span>
            <span class="mark">/</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            案例
            <span>Example</span>
            <span class="mark">/</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            招聘
            <span>Jobs</span>
            <span class="mark">/</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            关于
            <span>About</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            5汇
            <span class="info">H5</span>
          </a>
        </li>
      </ul>
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
    width: 960px;
    margin: 0 auto;
    .nav-banner {
      font-size: 16px;
      color: white;
      li {
        float: left;
        text-align: center;
        &:last-child {
          background: url(~@/assets/image/top-nav/nav-bg.jpg);
          width: 134px;
        }
        a {
          color: white;
          span {
            font-size: 14px;
            color: #c0e4fe;
            font-family: 微软雅黑, 黑体;
          }
          .mark {
            font-size: 16px;
            color: #65b5ee;
            padding: 0 10px;
          }
          .info {
            font-size: 16px;
            color: white;
          }
        }
      }
    }
  }
}
</style>