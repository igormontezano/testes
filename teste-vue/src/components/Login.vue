<template>
    <b-modal id="modalLogin" title="Login" size="sm"
      @shown="setFocus"
      @ok="trataLogin"
      @cancel="limpar"
      >
      <b-container fluid>
          <b-row>
            <label for="user">Username:</label> 
            <b-form-input id="user" type="text" v-model="user" ref="foco"/>
          </b-row>
          <b-row>
            <label for="password">Password:</label> 
            <b-form-input id="password" type="password" v-model="password" />
          </b-row>
      </b-container>
    </b-modal>
</template>

<script>

import {login, logout, isLogged} from '../utils/auth';

export default {
  name: 'Login',
  methods: {
    setFocus(e) {
      this.$refs.foco.focus();
    },
    trataLogin(e){
      login(this.user, this.password);
      if(isLogged()){
        this.$router.push('/home');
      } else {
        alert('Erro de login: '+this.user+' = '+ this.password);
      }
    },
    limpar(e){
      console.log('Limpando...');
      this.user = '';
      this.password = '';
    }
  },
  data () {
    return {
      user: '',
      password: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .label{
    text-align: right;
  }
</style>
