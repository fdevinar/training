// DEMO EXPRESS APP

let express = require('express');
let app = express();

// route: index
app.get('/',function(req, res){
    res.send('INDEX');
});

// route: player
app.get('/player',function(req, res){
    res.send('PLAYER');
});

// route: singer
app.get('/singer',function(req, res){
    res.send('SINGER');
});

// initiate server
app.listen(3000,function(){
    console.log('Listening on port 3000...');
});