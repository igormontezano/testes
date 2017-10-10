<template>
  <div class="cabecalho">
    <b-btn v-b-modal.modalLogin class="botao-login" >Login</b-btn>
    <router-link to="/home" class="botao-login">Go to Home</router-link>
    <login />
    <h1>{{msg}}</h1>
  </div>
</template>

<script>

import Login from './Login'

export default {
  name: 'cabecalho',
  props: ['msg'],
  components: {
    Login
  }
}
</script>

<style scoped >
.cabecalho {
    top: 0;
    width: 100%;
}

.botao-login{
  float: right;
}
</style>
