<template>
  <div class="cabecalho">
    <b-btn v-show="!logado()" v-b-modal.modalLogin class="btn-info itensDireita" >Login</b-btn>
    <b-btn v-show="logado()" class="btn-danger itensDireita" @click="efetuarLogout()" >Logout</b-btn>
    <router-link to="/" class="itensDireita">Go back Root</router-link>
    <login />
    <h1 class="textoCabecalho">{{msg}}</h1>
  </div>
</template>

<script>
import {isLogged, logout} from '../utils/auth';
import Login from './Login'

export default {
  name: 'cabecalho',
  props: ['msg'],
  components: {
    Login
  },
  methods: {
    efetuarLogout(){
      logout();
    },
    logado(){
      console.log(isLogged());
      return isLogged();
    }
  }
}
</script>

<style scoped >
.cabecalho {
  border-bottom: 1px solid black;
  top: 0;
  height: 60px;
  line-height: 60px;
  width: 100%;
}

.textoCabecalho{
  display: inline-block;
  vertical-align: middle;
}

.itensDireita{
  float: right;
  margin-right: 5px;
}
</style>
