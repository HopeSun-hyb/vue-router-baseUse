<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>这里是home页</div>

    <router-link to="/login">登录页</router-link>
    <br>
    <router-link to="/about">about页</router-link>
   
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
}
</script>
