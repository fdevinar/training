const express = require('express');
const router = express.Router({mergeParams: true});
const Campground = require('../models/campground');
const Comment = require('../models/comment');
const moment = require('moment');
const myFunctions = require('../public/scripts');
// Optional - Declare const of functions or call them using e.g.: myFunctions.isOwner
const isLoggedIn = myFunctions.isLoggedIn;
const isOwner = myFunctions.isOwner;

// *** COMMENTS *** // 
// ADDING TO ROUTES BELOW => /campgrounds/:id/comments
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
                    comment.edited = Date.now();
                    comment.campground = {
                        id: campground.id,
                        name: campground.name
                    };
                    comment.save();
                    campground.comments.push(comment);
                    campground.save();
                    req.flash('success','Comment created');
                    res.redirect(`/campgrounds/${req.params.id}`);
                        }
                    });
                }
    });
});
// - EDIT - Display Form to Update Comment
router.get('/:id/edit', isOwner, (req, res) => {
    Comment.findById(req.params.id, (err, comment) => {
        if(err){
            console.log(err);
            res.redirect('/campgrounds');
        }else{
            res.render('comments/update',{comment:comment});
        }
    });
});
// - UPDATE (PUT) - Update Comment in DB
router.put('/:id', isOwner, (req, res) => {
    Comment.findByIdAndUpdate(req.params.id, req.body , (err, comment) => {
        if(err){
            console.log(err);
            res.redirect('/campgrounds');
        }else{
            comment.edited = Date.now();
            comment.save();
            req.flash('success','Comment edited')
            res.redirect('/campgrounds/' + comment.campground.id);
        };
    });
});
// - DESTROY (DELETE) - Remove Comment from DB
router.delete('/:id', isOwner, (req, res) => {
    Comment.findByIdAndDelete(req.params.id, (err, comment) => {
        if(err){
            console.log(err);
            res.redirect('/campgrounds');
        }else{
            console.log('Deletion successful');
            req.flash('success','Comment deleted')
            res.redirect('/campgrounds/' + comment.campground.id);
        };
    });
});

module.exports = router;
