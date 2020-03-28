// * REQUIREMENTS
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const request = require('request');

// * STANDARDS
app.use(express.static("public"));
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended: true}));

// * ROUTES

app.get('/', (req, res) => {
    res.render('home');
});

app.post('/movieLookup', (req, res) => {
    let newMovie = req.body.movieName; // Requested movie
    let movieApiRequest = `http://www.omdbapi.com/?s=${newMovie}&apikey=thewdb` // API Call to Movie DB

    request(movieApiRequest, (error, response, body) => {
        if (error){
            console.log('!!! ERROR !!!')
            console.log(error);
        } else{
            console.log('*** SUCCESS ***')
            console.log(`statusCode: ${response.statusCode}`);
            let movieObject = JSON.parse(body);
            let movies = movieObject.Search;
            res.render('results',{movies:movies});
        }
    });
    // res.redirect('/results');
})

// * SERVER INIT

app.listen('3000', () => {
    console.log('Server started listening on port 3000...');
});


// ! API SEARCH
// General search: http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb 

// Search with Movie ID: http://www.omdbapi.com/?i=tt3896198&apikey=thewdb 