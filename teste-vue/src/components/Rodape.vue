<template>
  <div class="rodape">
    <h3>{{ msg }}</h3>
  </div>
</template>

<script>
export default {
  name: 'Rodape',
  data () {
    return {
      msg: 'Rodapé da aplicação!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.rodape {
    border-top: 1px solid black;
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
    padding: 5px
}
</style>
