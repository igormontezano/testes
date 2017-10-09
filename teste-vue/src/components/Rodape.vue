<template>
  <div class="rodape">
    <h1>{{ msg }}</h1>
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
    position: fixed;
    bottom: 0;
    width: 100%;
}
</style>
