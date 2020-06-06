<template>
  <div>
    <!-- 侧边栏：搜索框 -->
    <div class="search">
      <el-input v-model="input" placeholder="请输入内容">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>

    <!-- 侧边栏：广告位 -->
    <div class="ads">
      
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      input: ""
    }
  }
}
</script>

<style>

</style>