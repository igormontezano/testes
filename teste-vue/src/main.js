// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(BootstrapVue);
Vue.config.productionTip = false


import Home from './components/Home'
const routes = [
  { path: '/home', component: Home },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})


/* eslint-disable no-new */
var app = new Vue({
  router: router,
  el: '#app',
  template: '<App/>', 
  components: { App }
})
