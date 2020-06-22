new Vue({
    el: '#app',
    data: {
        title: 'Beginning with Vue',
        text: ''
    },
    methods: {
        // IF USING ARROW FUNC, THIS REFERS TO WINDOW, NOT VUE INSTANCE
        changeText: function(event) {
            this.text = event.target.value;
        }
    }
});