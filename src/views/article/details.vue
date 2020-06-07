<template>
  <div>
      <h3>文章 id:{{ $route.params.id }}</h3>
  </div>
</template>

<script>
export default {
    created(){
        // alert(this.$route.params.id);
    }
}
</script>

<style>

</style>