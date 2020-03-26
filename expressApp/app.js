// DEMO EXPRESS APP

let express = require('express');
let app = express();

app.use(express.static("public"));
app.set("view engine","ejs");

// Home
app.get('/',function(req, res){
    res.render('home');
});

// Football player
app.get('/football',function(req, res){
    let team = [
        {name: 'Grohe', position: 'Goleiro'},
        {name: 'De Leon', position: 'Zagueiro'},
        {name: 'Ronaldinho', position: 'Meia'},
        {name: 'Renato', position: 'Atacante'},
        {name: 'Jardel', position: 'Centroavante'}
    ];
    res.render('football',{team: team});
})

// Start server
app.listen(3000,function(){
    console.log('Server started on port 3000...');
});