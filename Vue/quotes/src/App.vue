<template>

  <div id="app">
    <div>
      <progress-bar :progress="quoteList.length"></progress-bar>
      <add-quote></add-quote>
      <quote-list :quotes="quoteList"></quote-list>
      <info></info>
    </div>

    <h1>Form Exercises</h1>
    <h2>Workout</h2>
    <div v-if="!submit">

    <trainer-workout :data="workoutData"></trainer-workout>

      <div>
        <label v-flash="'red'" for="days-monday">Days of Week (Monday)</label>
        <input type="checkbox" id="days-monday" value="monday" v-model="workoutData.days">
      </div>
      <div>
        <label v-flash:color="'blue'" for="days-wednesday">Days of Week (Wednesday)</label>
        <input type="checkbox" id="days-wednesday" value="wednesday" v-model="workoutData.days">
      </div>
      <div>
        <label v-flash:color.bold="'green'" for="days-friday">Days of Week (Friday)</label>
        <input type="checkbox" id="days-friday" value="friday" v-model="workoutData.days">
      </div>

      <div>
        <label for="intensity">Intensity (0-10)</label>
        <input type="text" id="intensity" v-model.number.lazy="workoutData.intensity">
      </div>

      <div>
        <label for="long">Long Text</label>
        <textarea rows=3 v-model="long"></textarea>
      </div>

      <div>
        <label for="Strength">Strength</label>
        <input type="radio" value="strength" id="strength" v-model="type">
      </div>

      <div>
        <label for="Hypertrophy">Hypertrophy</label>
        <input type="radio" value="hypertrophy" id="hypertrophy" v-model="type">
      </div>

    <div>
      <label for="focus">Focus</label>
      <select id="focus" name="focus" v-model="focusedArea">
        <option v-for="area in focus" :key=area>{{ area }}</option>
      </select>
    </div>

  <button @click.prevent="submitForm">Submit</button>

  </div>

  <div v-if="submit">
    <h3>Display Results</h3>
    <p>Trainer Name: {{ workoutData.trainer }}</p>
    <p>Workout Name: {{ workoutData.name }}</p>
    <p>Days of Week: {{ workoutData.days }}</p>
    <p>Intensity: {{ workoutData.intensity }}</p>
    <p style="white-space: pre;">Long Text: {{ long }} </p>
    <p>Type: {{ type }} </p>
    <p>Focus: {{ focusedArea }} </p>
  </div>

  </div>

</template>

<script>
import { quoteBus } from './main';

import ProgressBar from './components/ProgressBar.vue'
import AddQuote from './components/AddQuote.vue'
import QuoteList from './components/QuoteList.vue'
import Info from './components/Info.vue'
import TrainerWorkout from './components/TrainerWorkout.vue'

export default {
  name: 'App',
  data() {
    return {
      quoteList: [],
      workoutData: {
        name: '',
        trainer: '',
        days: [],
        intensity: 5
      },
      long: '',
      type: '',
      focus: ['Shoulder','Arms','Chest','Legs','Back'],
      focusedArea: 'Arms',
      submit: false
    }
  },
  components: {
    'progress-bar': ProgressBar,
    'add-quote': AddQuote,
    'quote-list': QuoteList,
    'info': Info,
    'trainer-workout': TrainerWorkout
  },
  created() {
        quoteBus.$on('quoteAdded', (quote) => {
            if (this.quoteList.length > 9) {
              alert('Limit of 10 items reached. Please remove a quote to add another.')
            } else {
                this.quoteList.push(quote);
            }
        })
    },
    methods: {
      submitForm() {
        this.submit = true;
      }
    },
    directives: {
      'color': {
        bind(el, binding) {
          el.style.backgroundColor = binding.value;
          if (binding.arg == 'white'){
            el.style.color = "white";
          }
          if (binding.modifiers['bold']){
            el.style.fontWeight = 'bold';
          }
        }
      }
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
  margin-top: 65px;
}
li {
  list-style: none;
}
</style>

