<template>
  <div class="home">
    <h2>{{ msg }}</h2>
    <ul>
      <li v-for="prog in programas" v-bind:programas="prog" >{{prog.descricao}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: ['programas'],
  data () {
    return {
      msg: 'Menu'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{
  padding: 5px;
}
</style>
