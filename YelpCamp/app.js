// *** ENVIRONMENT *** //
// INITIALIZE MIDDLEWARE
const express           = require('express');
const app               = express();
const bodyParser        = require('body-parser');
const mongoose          = require('mongoose');
const methodOverride    = require('method-override');
const passport          = require('passport');
const localStrategy     = require('passport-local');
const flash             = require('connect-flash');
// REQUIRE ROUTES
const authRoutes        = require('./routes/auth');
const campgroundsRoutes = require('./routes/campgrounds');
const commentsRoutes    = require('./routes/comments');
// SET DEFAULT FOLDERS/FILES AND APP USAGE
app.use(express.static(__dirname + '/public')); // Assets directory
app.set('view engine','ejs'); // Embedded-Javascript as default Views format
app.use(bodyParser.urlencoded({extended: true})); // Enables req.body parse from POST request
app.use(methodOverride('_method')); // Enables Method Override (from POST to PUT/DELETE)
app.use(flash());
// *** DATABASE *** //
// CONNECT TO DATABASE
mongoose.connect('mongodb://localhost/campgrounds',
{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true });
// MODELS
const User = require('./models/user')
const seedDB = require('./seeds');
seedDB();
// PASSPORT CONFIGURATION
app.use(require('express-session')({
    secret: 'following yelp camp tutorial is a good way to learn web development',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
// VARIABLES BELOW AVAILABLE ON ALL RENDERS
app.use(function(req, res, next) {
    // FLASH
    res.locals.errorMessage = req.flash('error');
    res.locals.successMessage = req.flash('success');
    // LOGGED USER
    res.locals.user = req.user;
    next();
});
// USE ROUTES
app.use('/',authRoutes);
app.use('/campgrounds',campgroundsRoutes);
app.use('/campgrounds/:id/comments',commentsRoutes);

// *** SERVER START *** //
// Start server
app.listen(3000, () => {
    console.clear();
    console.log('***************************************************');
    console.log('***** YelpCamp server listening on port 3000 *****');
    console.log('***************************************************');
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