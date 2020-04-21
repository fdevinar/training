// MIDDLEWARE
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const localStrategy = require('passport-local');
const passportLocalMongoose = require('passport-local-mongoose');
const expressSession = require('express-session');
// APP STANDARDS
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true})); // Enables req.body parse from POST request
// DATABASE
mongoose.connect('mongodb://localhost/auth_demo');
// MODELS
const userSchema = new mongoose.Schema({
    username: String,
    password: String
});
userSchema.plugin(passportLocalMongoose);
const User = mongoose.model('User', userSchema);
// AUTHENTICATION
//!  Code below must be declared before passport initialize/session
app.use(expressSession({
    secret: 'ate a pe nos iremos, para o que der e vier',
    resave: false,
    saveUninitialized: false
}));
// ! -----------------------------------------------------
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
passport.use(new localStrategy(User.authenticate()));
//passport.use(new localStrategy(User.isAuthenticated()));
//ROUTES
app.get('/', (req, res) => {
    User.find({},(err, users) => {
        if(err){
            console.log(err);
            res.render('home');
        }else{
            if (req.user){
                users.logged = req.user.username;
                res.render('home',{users:users});

            } else{
                users.logged = 'Anonymous'
                res.render('home',{users:users});
            }
        }
    });
});
app.get('/secret', isLoggedIn, (req, res) => {
    console.log('User Authenticated on Secret');
    res.render('secret');
});
// - REGISTER
app.get('/register', (req, res) => {
    res.render('register');
});
app.post('/register', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    User.register(new User({username: username}), password, (err, user) => {
        if (err){
            console.log(err);
        } else{
            console.log('User created successfully!');
            console.log(user);
            passport.authenticate('local')
            (req, res, function(){
                console.log('Username:');
                console.log('Authentication successful');
                res.redirect('secret');
            });
        }
    });
});
// - LOGIN
app.get('/login', (req, res) => {
    res.render('login');
});
app.post('/login',
    //MIDDLEWARE
    passport.authenticate('local', {
    successRedirect: '/secret',
    failureRedirect: '/login'
    }), 
    //CALLBACK
    (req, res) => {
    // EMPTY
});
// - LOGOUT
app.get('/logout', (req, res) => {
    console.log('User logged out');
    req.logout();
    res.redirect('/');
});
// AUTHENTICATE IF LOGGED IN
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    console.log('Failed to Authenticate');
    res.redirect('/login');
}
// SERVER START
app.listen(3000, () => {
    console.clear();
    console.log('Auth server started!');
});