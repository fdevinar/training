new Vue({
    el: '#app',
    data: {
        title: 'Beginning with Vue',
        meuTexto: '',
        friend: " to my Lil' Friend!",
        imgLink: 'https://vuejs.org/images/logo.png',
        listItem: '<ol><li>Iogurte</li><li>Frios</li><li>Frutas</li></ol>',
        counter: 0,
        x: 0,
        y: 0,
        inputValue: ''
    },
    methods: {
        //IF USING ARROW FUNC, THIS REFERS TO WINDOW, NOT VUE INSTANCE
        changeText: function(event) {
            this.text = event.target.value;
        },
        sayHello: function() {
            return 'Say Hello..'
        },
        toMyLilFriend: function() {
            // CHANGE BELOW IS NULIFIED BY v-once
            this.title = 'Starting with Vue';
            return this.friend
        },
        addCount: function() {
            this.counter ++;
        },
        updateCoordinates: function(event) {
            //console.log(event);
            this.x = event.clientX;
            this.y = event.clientY;
        },
        pressEnter: function(event) {
            alert('Copying: ' + event.target.value);
            this.inputValue = event.target.value;
        }
        // stopEvent: function(event) {
        //     event.stopPropagation();
        // }
    }
});

/*
v-bind:htmlAttribute - > Vue Instance can change HTML attributes
v-on:event - > add EventListener
v-once: renders object only once
v-html: renders raw HTML - use carefully (Cross Site Scripting XSS)
*/