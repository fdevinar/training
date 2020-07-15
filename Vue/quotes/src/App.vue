<template>

  <div id="app">
    <div class="hidden">
      <progress-bar :progress="quoteList.length"></progress-bar>
      <add-quote></add-quote>
      <quote-list :quotes="quoteList"></quote-list>
      <info></info>
    </div>

    <h1>Form Exercises</h1>
    <h2>Workout</h2>
    <div v-if="!submit">
      <!-- <div>
        <label for="trainer">Trainer Name</label>
        <input type="text" id="trainer" v-model.trim="workoutData.trainer">
      </div>

      <div>
        <label for="name">Workout Name</label>
        <input type="text" id="name" v-model.lazy="workoutData.name">
      </div> -->

    <trainer-workout :data="workoutData"></trainer-workout>

      <div>
        <label for="days-monday">Days of Week (Monday)</label>
        <input type="checkbox" id="days-monday" value="monday" v-model="workoutData.days">
      </div>
      <div>
        <label for="days-wednesdat">Days of Week (Wednesday)</label>
        <input type="checkbox" id="days-wednesday" value="wednesday" v-model="workoutData.days">
      </div>
      <div>
        <label for="days-friday">Days of Week (Friday)</label>
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


<!-- Exercise 1 -->
<!-- Create a Signup Form where you retrieve the following Information -->
<!-- Full Name (First Name + Last Name) -->
<!-- Mail -->
<!-- Password -->
<!-- Store Data? Yes/No -->

<!-- Exercise 2 -->
<!-- Only display the Form if it has NOT been submitted -->
<!-- Display the Data Summary ONCE the Form HAS been submitted -->

<!-- Exercise 3 -->
<!-- Edit the Example from above and create a custom "Full Name" Control -->
<!-- which still holds the First Name and Last Name Input Field -->


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
    }
}
</script>

<style>
.hidden {
  visibility: hidden;
}
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

