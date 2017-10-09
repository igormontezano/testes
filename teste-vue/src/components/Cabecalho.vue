<template>
  <div class="cabecalho">
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'

export default {
  name: 'cabecalho',
  props: ['msg']
  // components: {
  //   HelloWorld
  // }
}
</script>

<style scoped >
.cabecalho {
    top: 0;
    width: 100%;
}
</style>
