
import Vue from 'vue'
import home from './app.vue'
// import VueRouter from 'vue-router'
// Vue.use(VueRouter)
// const router = new VueRouter({
//   mode: 'history',
//   routes: [
//     {path: '/index', component: index}
//   ]
// })
// const app = new Vue({
//   router
// }).$mount('#app')
// console.log(app)
new Vue({
  render: h => h(home)
}).$mount('#app')
