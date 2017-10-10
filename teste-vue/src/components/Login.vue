<template>
    <b-modal id="modalLogin" title="Login" size="sm"
      @shown="setFocus"
      @ok="login"
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
export default {
  name: 'Login',
  methods: {
    setFocus(e) {
      this.$refs.foco.focus();
    },
    login(e){
      console.log('Logando...'+this.user+' = '+ this.password);
      alert('Logando...'+this.user+' = '+ this.password);
      this.$router.push('/home');
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
