// DEMO EXPRESS APP

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static("public"));
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended: true}));

let friends = ['Fabrigol','Guimerlo','Ferita','Duhzera','Rosbife','Denegrido',
'Markinhos','Danilera','Gabto','GuiCioni']

// Home
app.get('/',function(req, res){
    res.render('home');
});

// Friends
app.get('/friends', function(req, res){
    res.render('friends',{friendList: friends});
});

// Create Friends
app.post('/addfriend',function(req, res){
    let newFriend = req.body.friendName
    friends.push(newFriend);
    res.redirect('friends');
});







// Start server
app.listen(3000,function(){
    console.log('Server started on port 3000...');
});



// Football player
// app.get('/football',function(req, res){
//     let team = [
//         {name: 'Grohe', position: 'Goleiro'},
//         {name: 'De Leon', position: 'Zagueiro'},
//         {name: 'Ronaldinho', position: 'Meia'},
//         {name: 'Renato', position: 'Atacante'},
//         {name: 'Jardel', position: 'Centroavante'}
//     ];
//     res.render('football',{team: team});
// })