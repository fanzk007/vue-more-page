
import Vue from 'vue'
import login from './app.vue'
// import VueRouter from 'vue-router'
// Vue.use(VueRouter)
// const router = new VueRouter({
//   mode: 'history',
//   routes: [
//     {path: '/login', component: login}
//   ]
// })
// const useLogin = new Vue({
//   router
// }).$mount('#login')
// console.log(useLogin)
// console.log(login)
new Vue({
  render: h => h(login)
  // router
}).$mount('#login')
