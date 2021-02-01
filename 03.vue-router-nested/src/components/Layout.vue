<template>
<div class="layout">
    <div class="header">
        <h1>这里是header</h1>
    </div>
    <div class="content">
        <router-view></router-view>
    </div>
    <div class="footer">
        <h1>这里是footer</h1>
    </div>

</div>
</template>
<style scoped>
.layout {
    height: 100vh;
    display: flex;
    flex-direction: column;
}
.header {
    height: 100px;
    background: red;
}
.content {
    flex: 1;
}
.footer {
    height: 50px;
    background: blue;
}
</style>
