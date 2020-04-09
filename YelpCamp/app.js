// *** ENVIRONMENT *** //
// INITIALIZE MIDDLEWARE
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// SET DEFAULT FOLDERS/FILES
app.use(express.static('public')); // Assets directory
app.set('view engine','ejs'); // Embedded-Javascript as default Views format
app.use(bodyParser.urlencoded({extended: true})); // Enables req.body parse from POST request

// *** DATABASE *** //
// CONNECT TO DATABASE
mongoose.connect('mongodb://localhost/campgrounds');
// CREATE SCHEMA
const campSchema = new mongoose.Schema({
    name: String,
    image: String
});
// CREATE MODEL
const Campground = mongoose.model("Campground", campSchema);

// *** ROUTES *** //
// HOME
app.get('/', (req, res) => {
    res.render('landing');
});
// DISPLAY CAMPGROUNDS
app.get('/campgrounds', (req, res) => {
    Campground.find({}, (err, campgrounds) => {
        if (err){
            console.log('Error finding campgrounds:');
            console.log(err);
        } else {
            res.render('campgrounds',{campgrounds:campgrounds});
        }
    });
});
// CREATE CAMPGROUND
app.post('/campgrounds', (req, res) => {
    Campground.create({
        name: req.body.name,
        image: req.body.image
    }, (err, camp) => {
        if (err){
            console.log(err);
        } else {
            console.log('Created Campground with success!')
            console.log(camp);
        }
    });
    res.redirect('campgrounds');
});
// DISPLAY FORM TO CREATE CAMPGROUND
app.get('/campgrounds/new', (req, res) => {
    res.render('new');
})

// *** SERVER START *** //
// Start server
app.listen(3000, () => {
    console.log('***************************************************');
    console.log('***** YelpCamp server listening on port 3000. *****');
    console.log('***************************************************');
});