// *** ENVIRONMENT *** //
// INITIALIZE MIDDLEWARE
const express           = require('express');
const app               = express();
const bodyParser        = require('body-parser');
const mongoose          = require('mongoose');
const methodOverride    = require('method-override');
const moment            = require('moment');
const passport          = require('passport');
const localStrategy     = require('passport-local');
// SET DEFAULT FOLDERS/FILES
app.use(express.static(__dirname + '/public')); // Assets directory
app.set('view engine','ejs'); // Embedded-Javascript as default Views format
app.use(bodyParser.urlencoded({extended: true})); // Enables req.body parse from POST request
app.use(methodOverride('_method')); // Enables Method Override (from POST to PUT/DELETE)
// *** DATABASE *** //
// CONNECT TO DATABASE
mongoose.connect('mongodb://localhost/campgrounds',
{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true });
// MODELS
const Campground = require('./models/campground');
const Comment = require('./models/comment');
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
// SHOWS REQ.USER ON ALL RENDERS
app.use(function(req, res, next) {
    res.locals.user = req.user;
    next();
});
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
// - UPDATE PUT - Edit Campground in DB
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
app.get('/campgrounds/:id/comments/new', isLoggedIn, (req, res) => {
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
app.post('/campgrounds/:id/comments', isLoggedIn ,(req, res) => {
    Campground.findById(req.params.id, (err, campground) => {
        if(err){
            console.log(err);
            res.redirect(`/campgrounds/${req.params.id}`);
        } else{
            console.log(req.body.comment);
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

// *** AUTHENTICATION *** //
// - REGISTER
app.get('/register', (req, res) => {
    res.render('auth/register');
});
app.post('/register', (req, res) => {
    let newUser = new User({username: req.body.username});
    let password = req.body.password;
    User.register(newUser, password, (err, user) => {
        if (err){
            console.log(err);
            // Return used to short circuit function, to avoid error:
            // Cannot set headers after they are sent to the client
            return res.redirect('/register');
        }
        passport.authenticate('local')
        (req, res, function(){
            console.log(`User created: ${user}`);
            res.redirect('/campgrounds');
        });
    });
});
// - LOGIN
app.get('/login', (req, res) => {
    res.render('auth/login');
});
app.post('/login',
    //MIDDLEWARE
    passport.authenticate('local', {
        successRedirect: '/campgrounds',
        failureRedirect: '/login'
    }),
    //CALLBACK
    (req, res) => {
        //EMPTY
    }
);
// - LOGOUT
app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
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

// AUTHENTICATE IF LOGGED IN
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    console.log('Failed to Authenticate');
    res.redirect('/login');
}