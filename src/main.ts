import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase"

Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: 'AIzaSyDDgMDUkG35r-hqrqCi_EHudBMCPaCFQb4',
  authDomain: 'vue-todo-dd2d1.firebaseapp.com',
  databaseURL: 'https://vue-todo-dd2d1.firebaseio.com',
  projectId: 'vue-todo-dd2d1',
  storageBucket: 'vue-todo-dd2d1.appspot.com',
  messagingSenderId: '468681374491',
  appId: '1:468681374491:web:30bd3674fa4303c13e31be'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
