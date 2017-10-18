// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(BootstrapVue);
Vue.config.productionTip = false

// Array de programas
const programas = [
  {
    descricao: "Cadastro Geral",
    pagina: "basico/cadastroGeral"
  },
  {
    descricao: "Usuários",
    pagina: "basico/usuarios"
  },
  {
    descricao: "Categorias",
    pagina: "basico/categorias"
  }
];

import Home from './components/Home'
const routes = [
  { path: '/home', component: Home, props: {programas} },
]

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
