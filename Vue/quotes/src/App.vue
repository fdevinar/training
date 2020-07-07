<template>
  <div id="app">

    <workout></workout>

  </div>


</template>

<script>
import Workout from './components/Workout.vue'

export default {
  name: 'App',
  components: {
    'workout': Workout
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

