<!-- 公共组件：卡片 -->
<template>
  <div class="card-warp">
      <h2 class="title" v-text="title"></h2>
      <slot></slot>
  </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: "卡片默认标题"
        }
    }
}
</script>

<style scoped lang="less">
    .card-warp {
        border-top: 1px solid #E7E7E7;
        padding-bottom: 20px;
        h2.title {
            font-size: 16px;
            color: #666;
            padding: 10px 0;
        }
    }
</style>