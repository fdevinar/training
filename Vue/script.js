new Vue({
    el: '#app',
    data: {
        shoppingList: ['yogurt','rice','beer','meat'],
        gymExercises: [
            {
                name: 'Squat',
                sets: 4,
                reps: 20,
                weight: '80Kg',
            },
            {
                name: 'Deadlift',
                sets: 6,
                reps: 5,
                weight: '120Kg',
            },
            {
                name: 'Bench Press',
                sets: 3,
                reps: 10,
                weight: '30Kg',
            }
        ]
    },
    methods: {},
    watch: {},
    computed: {}  
});




//- Vue Notes
/*
Directives:
v-bind:htmlAttribute -> Vue Instance can change HTML attributes -> shorthand :src, :href 
v-on:event -> add EventListener -> shorthand @click, @keydown
v-once: renders object only once
v-html: renders raw HTML - use carefully (Cross Site Scripting XSS)
v-model: 2-way data binding, change data in Vue instance using Html (e.g. input)
v-if: v-if="true" -> adds or removes element from DOM
v-else: looks at last v-if to present else solution
v-show: v-show="true" enables display:none if true
v-for: v-for="element in array" -> for loop

Event Modifiers:
v-on:keydown.enter
v-on:mousemove.stop

Using Event object:
v-on:keydown = "myText = $event.target.value"

Comments:
functions() run everytime the page renders
Computed properties only run when X value is changed (they run sync)
Watch can 'listen' to data properties (can run async)
On Inputs use v-model to bind data to Vue instance instead of -> @keyup = "variable = $event.target.value"
Use (value, key, index) to loop through the Object`s properties during a v-for on Object
*/