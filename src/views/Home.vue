<template>
  <div class="home">
    <h1 class="title">.Task</h1>
    <h3 class="color">シンプルなTodoアプリ</h3>
    <div class="link-box">
      <router-link to="/signup" class="link">Signup</router-link>
      <h3 class="or">or</h3>
      <router-link to="/signin" class="link">Signin</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  component: {
    HelloWorld
  }
};
</script>
<style scoped>
.title {
  color: #ffffff;
  font-size: -webkit-xxx-large;
}
.color {
  color: #ffffff;
}
.link-box {
  display: -webkit-inline-box;
  margin-top: 20px;
}
.link {
  display: inline-block;
  padding: 15px 30px;
  border-radius: 30px;
  background-color: #4937ee;
  color: #ffffff;
  font-weight: bold;
  border: 0px solid;
  text-decoration: none;
}
.link:hover {
  cursor: pointer;
  background-color: #fff;
  color: #4937ee;
}
.or {
  color: #ffffff;
  margin: 20px;
}
</style>
