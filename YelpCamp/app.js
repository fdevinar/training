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
mongoose.connect('mongodb://localhost/campgrounds',{ useNewUrlParser: true, useUnifiedTopology: true });
// CREATE SCHEMA
const campgroundSchema = new mongoose.Schema({
    //_id: String,
    name: String,
    image: String,
    description: String
});
// CREATE MODEL
const Campground = mongoose.model("Campground", campgroundSchema);

// *** ROUTES *** //
// HOME
app.get('/', (req, res) => {
    res.render('landing');
});
// - INDEX - Display Campgrouds
app.get('/campgrounds', (req, res) => {
    Campground.find({}, (err, campgrounds) => {
        if (err){
            console.log('Error finding campgrounds:');
            console.log(err);
        } else {
            res.render('index',{campgrounds:campgrounds});
        }
    });
});
// - CREATE - Add new Campground to DB
app.post('/campgrounds', (req, res) => {
    Campground.create({
        name: req.body.name,
        description: req.body.description,
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
// - NEW - Display form to Create Campground
app.get('/campgrounds/new', (req, res) => {
    res.render('new');
});
// - SHOW - Displays info about a single Campground
app.get('/campgrounds/:id', (req, res) => {
    let id = req.params.id;
    Campground.find({_id: id}, (err, campground) => {
        if (err){
            console.log(`ERROR:  ${err}`);
        } else{
            res.render('show',{campground: campground});
        }        
    });
});

// *** SERVER START *** //
// Start server
app.listen(3000, () => {
    console.log('***************************************************');
    console.log('***** YelpCamp server listening on port 3000. *****');
    console.log('***************************************************');
});