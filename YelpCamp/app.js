// *** ENVIRONMENT *** //
// INITIALIZE MIDDLEWARE
const express           = require('express');
const app               = express();
const bodyParser        = require('body-parser');
const mongoose          = require('mongoose');
const methodOverride    = require('method-override');
const moment            = require('moment');
// SET DEFAULT FOLDERS/FILES
app.use(express.static(__dirname + '/public')); // Assets directory
app.set('view engine','ejs'); // Embedded-Javascript as default Views format
app.use(bodyParser.urlencoded({extended: true})); // Enables req.body parse from POST request
app.use(methodOverride('_method')); // Enables Method Override (from POST to PUT/DELETE)
// MODELS
const Campground = require('./models/campground');
const Comment = require('./models/comment');
const seedDB = require('./seeds');
seedDB();

// *** DATABASE *** //
// CONNECT TO DATABASE
mongoose.connect('mongodb://localhost/campgrounds',
{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

// *** HOME *** //
// LANDING PAGE
app.get('/', (req, res) => {
    res.render('landing');
});

// *** CAMPGROUNDS *** //
// - INDEX - Display Campgrouds
app.get('/campgrounds', (req, res) => {
    Campground.find({}, (err, campgrounds) => {
        if (err){
            console.log('Error finding campgrounds:');
            console.log(err);
        } else {
            res.render('campgrounds/index',{campgrounds:campgrounds});
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
    res.render('campgrounds/new');
});
// - SHOW - Displays info about a single Campground
app.get('/campgrounds/:id', (req, res) => {
    Campground.findById(req.params.id).lean().populate('comments').exec((err, campground) => {
        if (err){
            console.log(`ERROR:  ${err}`);
            res.redirect('/campgrounds');
        } else{
            campground.created = moment(campground.created).fromNow();
            res.render('campgrounds/show',{campground: campground});
        }        
    });
});
// - EDIT - Display form to Edit Campground
app.get('/campgrounds/:id/edit', (req, res) => {
    Campground.findById(req.params.id, (err, campground) => {
        if (err){
            console.log(`ERROR:  ${err}`);
            res.redirect('/campgrounds');
        } else{
            res.render('campgrounds/update',{campground: campground});
        }        
    });
});
// - UPDATE PUT (POST?) - Edit Campground in DB
app.put('/campgrounds/:id', (req, res) => {
    Campground.findByIdAndUpdate(req.params.id, req.body, (err, status) =>{
        if (err){
            console.log(err);
            res.redirect('/campgrounds');
        } else{
            console.log('Update successful');
            res.redirect(`/campgrounds/${req.params.id}`);
        };
    });
});
// - DESTROY DELETE - Delete Campground in DB
app.delete('/campgrounds/:id', (req, res) => {
    Campground.findByIdAndDelete(req.params.id, (err, status) => {
        if (err){
            console.log(err);
        } else{
            console.log('Deletion successful');
        }
    });
    res.redirect('/campgrounds');
})

// *** COMMENTS *** //
// - NEW - Display Form to Create Comment
app.get('/campgrounds/:id/comments/new', (req, res) => {
    campgroundId = req.params.id;

    Campground.findById(req.params.id, (err, campground) => {
        if(err){
            console.log(err);
            res.render('campgrounds');
        } else {
            res.render('comments/new',{campground: campground});
        }
    }
    );
}); 
// - CREATE - Add New Comment to DB
app.post('/campgrounds/:id/comments', (req, res) => {
    Campground.findById(req.params.id, (err, campground) => {
        if(err){
            console.log(err);
            res.redirect(`/campgrounds/${req.params.id}`);
        } else{
            Comment.create(req.body.comment, (err,comment) => {
                if(err){
                    console.log(err);
                    res.redirect(`/campgrounds/${req.params.id}`);
                }else {
                            campground.comments.push(comment);
                            campground.save();
                            res.redirect(`/campgrounds/${req.params.id}`);
                        }
                    });
                }
    });
});

// RESTFUL ROUTES
//@ Name    | Path                   | HTTP Method
//@ -------------------------------------------------
// DISPLAY ROUTES
//- INDEX    | /campgrounds           |  GET
//- SHOW     | /campgrounds/:id       |  GET
// FORM ROUTES
//* NEW      | /campgrounds/new       |  GET (Form)
//* EDIT     | /campgrounds/:id/edit  |  GET (Form)
// ACTION ROUTES
//* CREATE   | /campgrounds           |  POST
//* UPDATE   | /campgrounds/:id       |  PUT
//! DESTROY  | /campgrounds/:id       |  DELETE

// *** SERVER START *** //
// Start server
app.listen(3000, () => {
    console.clear();
    console.log('***************************************************');
    console.log('***** YelpCamp server listening on port 3000 *****');
    console.log('***************************************************');
});