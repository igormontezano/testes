<template>
  <div id="app">
    <cabecalho msg="Aqui vai o cabeçalho!" />
    <div id="corpo">
      <h2>corpo</h2>
      <b-container class="bv-example-row">
        <b-row>
            <b-col>1 of 3</b-col>
            <b-col>2 of 3</b-col>
            <b-col>3 of 3</b-col>
        </b-row>
      </b-container>
    </div>
    <rodape/>
  </div>
</template>

<script>
import Cabecalho from './components/Cabecalho'
import Rodape from './components/Rodape'

// Style-Loader CSS
import 'reset-css/reset.css'
import 'bootstrap/dist/css/bootstrap.css'
// https://bootstrap-vue.js.org/docs/layout/
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'app',
  components: {
    Cabecalho, Rodape
  }
}
</script>

<style>
</style>
