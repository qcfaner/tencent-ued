<template>
  <div class="content">
    <div class="content-top">
      <a class="content-pic fl" href="javascript:;">
        <img src="@/assets/image/article-img.jpg" alt="人员图像" />
      </a>
      <div class="content-intro">
        <div class="title">
          <a href="javascript:;">2016冬季星空演讲设计总结</a>
        </div>
        <div class="des">
          <a href="javascript:;">moon</a>
          <span class="line">|</span>
          <span>2016.12.02</span>
          <span class="line">|</span>
          <a href="javascript:;">作品案例</a>,
          <a href="javascript:;">视觉设计</a>
          <a class="mark" herf="javascript:;">0</a>
        </div>
      </div>
    </div>
    <div class="content-mian">
      <a href="javascript:;"></a>
      <div class="content-info">
        2016冬季星空演讲，与上期相同都是由明星讲述人生历程之类的演讲为卖点，拉近明星与粉丝之间的关系。
        不同的是，本期基调主打“有深度、有格调、有内涵”。 视觉与收获 1、各推广视觉保持统一的设计元素和基调，打造温暖有品质的视觉效果； 2、嘉宾形象+主要作品构成明星…
      </div>
    </div>
    <div class="content-read clearfix">
      <a class="fr icon" href="javascript:;">阅读全文</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='less' scoped>
.content {
  padding: 25px 0;
  border-bottom: 1px dotted #ccc;
  .content-top {
    height: 60px;
    .content-pic {
      display: inline-block;
      vertical-align: top;
      margin-left: 5px;
      margin-right: 15px;
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