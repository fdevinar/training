<template>
  <div id="app">
    <progress-bar></progress-bar>
    <add-quote></add-quote>
    <quote-list></quote-list>
    <info></info>
  </div>


</template>

<script>
import ProgressBar from './components/ProgressBar.vue'
import AddQuote from './components/AddQuote.vue'
import QuoteList from './components/QuoteList.vue'
import Info from './components/Info.vue'

export default {
  name: 'App',
  components: {
    'progress-bar': ProgressBar,
    'add-quote': AddQuote,
    'quote-list': QuoteList,
    'info': Info
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

