<template>
  <div class="content">
    <div class="content-top">
      <a class="content-pic fl" href="javascript:;">
        <img :src="article.meta.picture" alt="人员图像" />
      </a>
      <div class="content-intro">
        <div class="title">
          <a href="javascript:;">{{ article.title }}</a>
        </div>
        <div class="des">
          <a href="javascript:;">{{ article.meta.author }}</a>
          <span class="line">|</span>
          <span>{{ article.meta.createDate }}</span>
          <span class="line">|</span>
          <a href="javascript:;">{{ article.meta.tag }}</a>
          <a class="mark" herf="javascript:;">{{ article.meta.comments }}</a>
        </div>
      </div>
    </div>
    <div class="content-mian">
      <a href="javascript:;"></a>
      <div class="content-info">{{ article.describe }}</div>
    </div>
    <div class="content-read clearfix">
      <a class="fr icon" href="javascript:;">阅读全文</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style lang='less' scoped>
.content {
  padding: 25px 0;
  border-bottom: 1px dotted #ccc;
  color: #666;
  a {
    color: #666;
  }
  .content-top {
    height: 60px;
    .content-pic {
      display: inline-block;
      vertical-align: top;
      margin-left: 5px;
      margin-right: 15px;
      img {
        border-radius: 50%;
      }
    }
    .content-intro {
      .title {
        display: block;
        font-size: 22px;
        line-height: 30px;
        padding-bottom: 3px;
      }
      .des {
        font-size: 12px;
        .line {
          margin-right: 7px;
          margin-left: 7px;
        }
        .mark {
          float: right;
          background: url(~@/assets/image/common-icons.jpg) no-repeat;
          background-position: 0 -30px;
          width: 28px;
          height: 23px;
          line-height: 19px;
          text-align: center;
          color: #fff;
        }
      }
    }
  }
  .content-mian {
    padding-top: 10px;
    .content-info {
      padding: 8px 0;
      width: 672px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .icon {
    padding-right: 28px;
    background: url(~@/assets/image/common-icons.jpg) no-repeat;
    background-position: 0 2px;
  }
}
</style>