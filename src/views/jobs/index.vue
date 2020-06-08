<template>
  <div class="job">
    <h2 class="preface">招聘jobs</h2>
    <div>
      <div class="job-main">
        <p class="post">资深视觉设计师</p>
        <p class="job-info">人数2名 工作地点：北京</p>
      </div>
      <p class="job-require">工作职责：</p>
      <ul class="job-content">
        <li>负责qq.com门户网站整体的美术设计和创意工作</li>
        <li>负责网站相关活动专题与线上广告设计工作</li>
        <li>优化设计，提高网站的可用性</li>
      </ul>
      <p class="job-require">职位要求：</p>
      <ul class="job-content">
        <li>大学本科以上学历、美术相关专业</li>
        <li>从事网站设计工作3年以上，具有大型网站的总体风格设计经验（此为必要条件）</li>
        <li>富于创新、思维活跃，对先进的网页设计理念和技术有较强的理解能力</li>
        <li>有丰富的设计理论知识和对行业流行趋势敏锐的洞察力</li>
        <li>能够熟练使用PHOTOSHOP\FLASH\ILLUSTRATOR等软件，了解HTML\DREAMWEAVER等前端制作工具</li>
        <li>有良好的沟通能力和团队协作精神，能承受较大的工作压力</li>
      </ul>
    </div>
    <div>
      <div class="job-main more">
        <p class="post">资深交互设计师</p>
        <p class="job-info">人数2名 工作地点：北京</p>
      </div>
      <p class="job-require">工作职责：</p>
      <ul class="job-content">
        <li>参与网页产品规划构思和创意过程</li>
        <li>分析业务需求，并加以分解，归纳出人机交互界面需求</li>
        <li>设计人机交互界面结构、用户操作流程等</li>
        <li>参与公司前瞻性产品创意设计</li>
      </ul>
      <p class="job-require">职位要求：</p>
      <ul class="job-content">
        <li>熟悉各类网站和互联网产品，有深入体验经验和理解力，富有创造力和激情，并有动手实践的良好习惯</li>
        <li>较强逻辑思维能力，熟练掌握业务需求分析、产品需求分解的技巧</li>
        <li>主动性高、具有优秀的理解、沟通和协调能力，很强的文字表达能力</li>
        <li>对交互设计过程有深入的了解，可以独立完成整个设计过程（对流程图、线框图等交互设计方法能熟练应用）</li>
        <li>有一定视觉设计和XHTML/CSS等相关技术技能，并有良好的英语阅读能力</li>
        <li>个性乐观开朗，善于和各种背景的人合作</li>
        <li>有大局观，可以在复杂的约束条件下找到平衡或创新的方法</li>
        <li>工业设计、计算机、心理学、平面设计、广告设计等相关专业本科以上学历</li>
      </ul>
      <p class="join">
        以上岗位简历及作品发至：
        <span>janeren@tencent.com</span>，应聘需提供相关作品
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='less' scoped>
.job {
  font-family: "微软雅黑", "黑体";
  .job-main {
    padding: 8px 0;
    &.more {
      margin-top: 25px;
      .post {
        color: #3399ff;
      }
    }
    .post {
      font-size: 20px;
      font-weight: bold;
      color: #ff6600;
    }
  }
  .job-require {
    padding: 8px 0;
    color: #808080;
    font-weight: bold;
  }
  .join {
    margin-top: 10px;
    span {
      color: #3399ff;
    }
  }
}
</style>