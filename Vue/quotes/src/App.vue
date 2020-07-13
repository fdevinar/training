<template>
  <div id="app">
    <progress-bar :progress="quoteList.length"></progress-bar>
    <add-quote></add-quote>
    <quote-list :quotes="quoteList"></quote-list>
    <info></info>
  </div>


</template>

<script>
import { quoteBus } from './main';

import ProgressBar from './components/ProgressBar.vue'
import AddQuote from './components/AddQuote.vue'
import QuoteList from './components/QuoteList.vue'
import Info from './components/Info.vue'

export default {
  name: 'App',
  data() {
    return {
      quoteList: [],
    }
  },
  components: {
    'progress-bar': ProgressBar,
    'add-quote': AddQuote,
    'quote-list': QuoteList,
    'info': Info
  },
  created() {
        quoteBus.$on('quoteAdded', (quote) => {
            if (this.quoteList.length > 9) {
              alert('Limit of 10 items reached. Please remove a quote to add another.')
            } else {
                this.quoteList.push(quote);
            }
        })
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
li {
  list-style: none;
}
</style>

