// DEMO EXPRESS APP

let express = require('express');
let app = express();

// ! INDEX
// Route: Index
app.get('/',function(req, res){
    res.send('Hi there, welcome to my assignment!');
});
// ! ANIMALS
// Route: Pig
app.get('/speak/pig',function(req, res){
    res.send('The ping says "Oink!"');
});
// Route: Cow
app.get('/speak/cow',function(req, res){
    res.send('The cow says "Moo!"');
});
// Route: Dog
app.get('/speak/dog',function(req, res){
    res.send('The dog says "Woof woof!"');
});
// ! REPEAT
app.get('/repeat/:word/:num',function(req, res){

    let word = req.params.word;
    let num = Number(req.params.num);

    
    
    // let word = req.params.word;
    // let num = Number(req.params.num);
    // console.log((word + ' ' )*num);
});

// ! NOT FOUND
// Route: Not Found
app.get('/*',function(req, res){
    res.send('Sorry, page not found... What are you doing with your life?');
});
// ! INIT SERVER
// initiate server
app.listen(3000,function(){
    console.log('Listening on port 3000...');
});