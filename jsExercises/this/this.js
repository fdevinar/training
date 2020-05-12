
let dog = {
    name: 'Rex Doggo',
    bark: function bark(){
        console.log('Auau, hi I am dog named ' + this.name);
    },
    whoIsThis: function whoIsThis(){
        console.log(this); // dog
    },
    friends: {
        cat: {
            name: 'Cutie Pie',
            whoIsThis: function whoIsThis(){
                console.log(this); // cat
            }
        }
    }
}

dog.bark(); // Auau, hi I am dog named Rex Doggo
dog.whoIsThis(); // dog object
dog.friends.cat.whoIsThis(); // cat object