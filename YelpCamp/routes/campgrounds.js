const express = require('express');
const router = express.Router();
const Campground = require('../models/campground');
const Comment = require('../models/comment');
const moment = require('moment');
const myFunctions = require('../public/scripts/main');
const isLoggedIn = myFunctions.isLoggedIn;
const isOwner = myFunctions.isOwner;

// *** CAMPGROUNDS *** //
// - INDEX - Display Campgrouds
router.get('/', (req, res) => {
    Campground.find({}, (err, campgrounds) => {
        if (err){
            console.log('Error finding campgrounds:');
            console.log(err);
        } else {
            res.render('campgrounds/index',{campgrounds:campgrounds});
        }
    });
});
// - NEW - Display form to Create Campground
router.get('/new', isLoggedIn, (req, res) => {
    res.render('campgrounds/new');
});
// - CREATE - Add new Campground to DB
router.post('/', isLoggedIn, (req, res) => {
    Campground.create({
        name: req.body.name,
        description: req.body.description,
        image: req.body.image,
        edited: Date.now(),
        createdBy: {
            id: req.user._id,
            username: req.user.username
        }
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
// - SHOW - Displays info about a single Campground
router.get('/:id', (req, res) => {
    Campground.findById(req.params.id).lean().populate('comments').exec((err, campground) => {
        if (err){
            console.log(`ERROR:  ${err}`);
            res.redirect('/campgrounds');
        } else{
            // CONVERT CAMPGROUND DATE TO FromNow
            campground.edited = moment(campground.edited).fromNow();
            // CONVERT COMMENT DATE TO FromNow
            if (Object.keys(campground.comments).length !== 0 ){
                campground.comments.forEach((comment) => {
                    comment.edited = moment(comment.edited).fromNow();
                });
            };
            res.render('campgrounds/show',{campground: campground});
        }        
    });
});
// - EDIT - Display form to Edit Campground
router.get('/:id/edit', isOwner , (req, res) => {
    Campground.findById(req.params.id, (err, campground) => {
        if (err){
            console.log(`ERROR:  ${err}`);
            res.redirect('/campgrounds');
        } else{
            res.render('campgrounds/update',{campground: campground});
        }        
    });
});
// - UPDATE (PUT) - Edit Campground in DB
router.put('/:id', isOwner, (req, res) => {
    Campground.findByIdAndUpdate(req.params.id, req.body, (err, campground) =>{
        if (err){
            console.log(err);
            res.redirect('/campgrounds');
        } else{
            campground.edited = Date.now(),
            campground.save();
            console.log('Update successful');
            res.redirect(`/campgrounds/${req.params.id}`);
        };
    });
});
// - DESTROY (DELETE) - Delete Campground in DB
router.delete('/:id', isOwner, (req, res) => {
    Campground.findByIdAndDelete(req.params.id, (err, campground) => {
        if (err){
            console.log(err);
        } else{
            Comment.deleteMany({'campground.id':(campground.id)}, (err, comment) => {
                if(err){
                    console.log(err);
                }
                else{
                    console.log(comment);
                }
            });
            console.log('Deletion successful');
        }
    });
    res.redirect('/campgrounds');
});

module.exports = router;