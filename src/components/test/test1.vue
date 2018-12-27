<template>
  <div>
    <h2>{{message}}</h2>
    <!-- 增加路由 -->
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    name: "Hi",
    data() {
      return {
        message : 'Wo Shi testTwo!'
      };
    }
  };
</script>
<style scoped>

</style>
