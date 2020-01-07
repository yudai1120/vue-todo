<template>
  <div class="signin">
    <div class="text">
      <h1>OUR STYLE MAKES OUR STORY.</h1>
      <h3>シンプルなTodoアプリ</h3>
      <h2 class="sub">Sign in</h2>
      <div>
        <input type="text" placeholder="E-mail" v-model="username">
      </div>
      <div>
        <input type="password" placeholder="Password" v-model="password">
      </div>
      <button @click="signIn" class="btn">Signin</button>
      <p>You don't have an account?
        <router-link to="/signup">create account now!!</router-link>
      </p>
    </div>
    <div class="imgBox">
      <div class="img">
      <img src="~@/assets/mac.png">
      </div>
      <div class="img2">
        <img src="~@/assets/iphone.png" width="150px" height="300px">
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Signin',
  data: function () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    signIn: function () {
      firebase.auth().signInWithEmailAndPassword(this.username, this.password).then(
        user => {
          alert('Success!')
          this.$router.push('/todolist')
        },
        err => {
          alert(err.message)
        }
      )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2, h3 {
  font-weight: bold;
  color: #fff;
}
a {
  color: #4937ee;
}
.signin {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background-color: #f1b00f;
}
input {
  margin: 10px 0;
  padding: 10px;
}
.text {
  display: inline-block;
  position: absolute;
  top: 200px;
  left: 100px;
  z-index: 99;
}
.sub {
  margin-top: 35px;
  margin-bottom: 0;
}
.imgBox {
  position: absolute;
  top: 200px;
  right: 120px;
}
.img {
  position: absolute;
  top: 10px;
  right: 20px;
  z-index: 1;
}
.img2 {
  position: absolute;
  top: 90px;
  right: 5px;
  z-index: 2;
}
.btn {
  padding: 15px 30px;
  border-radius: 30px;
  background-color: #4937ee;
  color: #ffffff;
  font-weight: bold;
  border: 0px solid;
}
.btn:hover {
  cursor: pointer;
  background-color: #fff;
  color: #4937ee;
}
.btn:focus {
  outline: 0;
}
</style>
