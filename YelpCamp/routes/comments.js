const express = require('express');
const router = express.Router({mergeParams: true});
const Campground = require('../models/campground');
const Comment = require('../models/comment');
const myFunctions = require('../public/scripts/main');
const isLoggedIn = myFunctions.isLoggedIn;

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
            Comment.create(req.body, (err,comment) => {
                if(err){
                    console.log(err);
                    res.redirect(`/campgrounds/${req.params.id}`);
                }else {        
                    // Adding Current User as Author ID and Username
                    comment.author = {
                        id: req.user._id,
                        username: req.user.username
                    };
                    comment.save();
                    campground.comments.push(comment);
                    campground.save();
                    res.redirect(`/campgrounds/${req.params.id}`);
                        }
                    });
                }
    });
});

module.exports = router;