const express = require('express');
const router = express.Router({mergeParams: true});
const Campground = require('../models/campground');
const Comment = require('../models/comment');

// *** COMMENTS *** //
// - NEW - Display Form to Create Comment
router.get('/new', isLoggedIn, (req, res) => {
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
router.post('/', isLoggedIn ,(req, res) => {
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

// AUTHENTICATE IF LOGGED IN
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    console.log('Failed to Authenticate');
    res.redirect('/login');
}

module.exports = router;