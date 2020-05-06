const express = require('express');
const router = express.Router();
const User = require('../models/user')
const passport = require('passport');

// *** HOME *** //
// LANDING PAGE
router.get('/', (req, res) => {
    res.render('landing');
});

// *** AUTHENTICATION *** //
// - REGISTER
router.get('/register', (req, res) => {
    res.render('auth/register');
});
router.post('/register', (req, res) => {
    let newUser = new User({username: req.body.username});
    let password = req.body.password;
    User.register(newUser, password, (err, user) => {
        if (err){
            console.log(err);
            // Return used to short circuit function, to avoid error:
            // Cannot set headers after they are sent to the client
            req.flash('error',err.message)
            return res.redirect('/register');
        }
        passport.authenticate('local')
        (req, res, function(){
            console.log(`User created: ${user}`);
            req.flash('success','User Registered!')
            res.redirect('/campgrounds');
        });
    });
});
// - LOGIN
router.get('/login', (req, res) => {
    res.render('auth/login');
});
router.post('/login',
    //MIDDLEWARE
    passport.authenticate('local', {
        successRedirect: '/campgrounds',
        successFlash: 'User Logged In',
        failureRedirect: '/login',
        failureFlash: 'Failed to Login'
    }),
    //CALLBACK
    (req, res) => {
        //EMPTY
    }
);
// - LOGOUT
router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success','User Logged Out');
    res.redirect('/');
});

module.exports = router;

