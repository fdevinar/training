<template>
  <div id="app">
   
   <div class="container">
     <!-- Server Header -->
     <server-header></server-header>
       <hr>
        <!-- Server List -->
        <server-list></server-list>
        <hr>
        <!-- Server Footer -->
        <server-footer></server-footer>
    </div>

  </div>


</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

