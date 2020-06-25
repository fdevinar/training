new Vue({
    el: '#app',
    data: {
        imgLink: 'https://vuejs.org/images/logo.png',
        effect: 'highlight',
        neonClass: 'neon',
        lineClass: 'line',
        typedClass: '',
        borderOption: false,
        typeOption: '',
        myColor: {
            color: 'black'
        },
        progressBar: {
            backgroundColor: 'grey',
            width:  '0%',
            maxWidth: '250px',
        }
    },
    methods: {
        startEffect: function() {
            vm = this;
            setInterval(function(){
                vm.effect === 'highlight' ? vm.effect = 'shrink' : vm.effect = 'highlight'                
            },1000);
        },
        checkBorder: function(event) {
            console.log(event.target.value);
            event.target.value === 'true' ? this.borderOption = true : this.borderOption = false
        },
        startProgress: function(event) {
            vm = this;
            let count = 0;
            setInterval(function() {
                vm.progressBar.width = count + '%';
                count++;
            },20)
        }
    },
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



*/