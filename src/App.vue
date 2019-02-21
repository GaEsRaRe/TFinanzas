<template>
  <div id="app">
    <v-app>
    <HelloWorld/>
    </v-app>
  </div>
</template>

<script>
import HelloWorld from './components/Solicitud.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
