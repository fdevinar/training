// DEMO EXPRESS APP

let express = require('express');
let app = express();

// ! INDEX
// Route: Index
app.get('/',function(req, res){
    res.send('Hi there, welcome to my assignment!');
});
// ! ANIMALS
// Route: Animals
app.get('/speak/:animal',function(req, res){
    let sound = {
        pig: 'Oink',
        cow: 'Moo',
        dog: 'Woof woof',
        cat: 'Meow',
        lion: 'Rawr'
    };
    let animal = req.params.animal.toLowerCase();
    if (sound[animal] === undefined){
        res.send('Sorry, page not found... What are you doing with your life?');
    } else {
        res.send('The ' + animal + ' says ' + sound[animal]);        
    }
});
// ! REPEAT
app.get('/repeat/:word/:num',function(req, res){
    let word = req.params.word;
    let num = Number(req.params.num);
    let phrase = [];
    for (i=0;i<num;i++){
        phrase.push(word);
    };
    res.send(phrase.join(' '));
});
// ! NOT FOUND
// Route: Not Found
app.get('/*',function(req, res){
    res.send('Sorry, page not found... What are you doing with your life?');
});
// ! INIT SERVER
// initiate server
app.listen(3000,function(){
    console.log('* Server started listening on port 3000 *');
});