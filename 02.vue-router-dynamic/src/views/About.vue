<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- 第一种方式:$route.params -->
    <div>id的值: {{$route.params.id}}</div>

    <!-- 第二种方式 props -->
      <div>id的值: {{id}}</div>
  </div>
</template>

<script>
export default {
  name: "About",
  props: ["id"],
  created() {
    console.log(this.$route);
  }
  
}
</script>
