<style scoped>
  .box{
    background-color: red;
    height:20px;
  }
</style>
<template>
  <div class="box">123sdfsdfsdfsdf123
    <div @click="login">登录</div>
    <div>1231</div>
  </div>
</template>
<script>
  export default {
    data: function () {
      return {
      }
    },
    methods: {
      login: function () {
        console.log('12312')
        console.log(this)
        window.location = 'index'
        // this.$router.push('login.html')
      }
    }
  }
</script>
