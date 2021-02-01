<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <div>
      <h2>不带参数</h2>
      <!-- 不带参数 -->
      <router-link to='about'>router-link</router-link>
      <br>
      <button @click="goAbout1">字符串方式</button>
      <br>
      <button @click="goAbout2">path对象方式</button>
      <br>
      <button @click="goAbout3">name对象方式</button>

    </div>

     <div>
      <h2>动态路由</h2>
      <router-link to='/dynamic/123'>router-link</router-link>
      <br>
      <router-link :to="{ name: 'Dynamic', params: { id: 123 }}">router-link-params</router-link>
      <br>
      <button @click="dynamic1">name-params</button>
      <br>

    </div>

    <div>
      <h2>查询参数路由</h2>
 
      <button @click="query1">name-query</button>
      <br>

    </div>

  


  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  methods: {
    goAbout1() {
      this.$router.push('about');
    },

    goAbout2() {
      this.$router.push({path:'about'})
    },
    goAbout3() {
      this.$router.push({name:'About'})
    },

    dynamic1() {
      this.$router.push({name: 'Dynamic', params: { id: '123' }})
    },

    query1() {
      this.$router.push({name: 'Query', query : { name: "query-router"}})
    }
  }
}
</script>
