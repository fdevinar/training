// COVID GRAPH APP
// * REQUIREMENTS
const express = require('express');
const app = express();
// const bodyParser = require('body-parser'); // enables req.body.movieName
const request = require('request');

// * STANDARDS
app.use(express.static("public"));
app.set("view engine","ejs");
// app.use(bodyParser.urlencoded({extended: true})); // enables req.body.movieName

// * ROUTES
app.get('/', (req, res) => {
    
    // Root API - https://covid19-server.chrismichael.now.sh/api/v1

    let covidApiDeaths = 'https://covid19-server.chrismichael.now.sh/api/v1/Deaths';

    request(covidApiDeaths, (error, response, body) => {
        if (error){
            console.log(error);
        } else{
            console.log(`Request successful with Status Code: ${response.statusCode}`);
            let covidDeaths = JSON.parse(body);
            covidDeaths = covidDeaths.deaths;
            res.render('graph',{covidDeaths:covidDeaths});
        }
    });

});

// app.post('/movieLookup', (req, res) => {
//     let newMovie = req.body.movieName; // Requested movie
//     let movieApiRequest = `http://www.omdbapi.com/?s=${newMovie}&type=movie&apikey=thewdb`;

//     request(movieApiRequest, (error, response, body) => {
//         if (error){
//             console.log('!!! ERROR !!!')
//             console.log(error);
//         } else{
//             console.log('*** SUCCESS ***')
//             console.log(`statusCode: ${response.statusCode}`);
//             let movieObject = JSON.parse(body);
//             console.log(movieObject);
//             if (movieObject.Response === 'False'){
//                 res.render('notfound');
//             }
//             let movies = movieObject.Search;
//             res.render('results',{movies:movies});
//         }
//     });
// });



// * SERVER INIT
app.listen('3000', () => {
    console.log('Server started listening on port 3000...');
});
