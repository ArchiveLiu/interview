<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Array from './components/array.vue'
export default {
  name: 'App',
  components: {
    // HelloWorld
    Array
  }
}
</script>

<style>
*{
    padding: 0;
    margin: 0;
  }
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
  
}
</style>
