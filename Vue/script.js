new Vue({
    el: '#app',
    data: {
        imgLink: 'https://vuejs.org/images/logo.png',
        counter: 0,
        x: 0,
        y: 0
    },
    methods: {
        //IF USING ARROW FUNC, THIS REFERS TO WINDOW, NOT VUE INSTANCE
        addCount: function() {
            this.counter ++;
        },
        updateCoordinates: function(event) {
            this.x = event.clientX;
            this.y = event.clientY;
        }
    }
});

//- Vue Notes
/*
Directives:
v-bind:htmlAttribute - > Vue Instance can change HTML attributes
v-on:event - > add EventListener
v-once: renders object only once
v-html: renders raw HTML - use carefully (Cross Site Scripting XSS)

Event Modifiers:
v-on:keydown.enter
v-on:mousemove.stop

Using Event object:
v-on:keydown = "myText = $event.target.value"

*/