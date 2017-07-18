
import Vue from 'vue'
import app from './app.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/index', component: app}
  ]
})
const apps = new Vue({
  router
}).$mount('#main')
console.log(apps.$router)
// new Vue({
//   render: h => h(app)
//   // router
// }).$mount('#main')
