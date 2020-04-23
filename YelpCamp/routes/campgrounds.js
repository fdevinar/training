const express = require('express');
const router = express.Router();
const Campground = require('../models/campground');
const moment = require('moment');

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
// - CREATE - Add new Campground to DB
router.post('/', (req, res) => {
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
router.get('/new', (req, res) => {
    res.render('campgrounds/new');
});
// - SHOW - Displays info about a single Campground
router.get('/:id', (req, res) => {
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
router.get('/:id/edit', (req, res) => {
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
router.put('/:id', (req, res) => {
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
router.delete('/:id', (req, res) => {
    Campground.findByIdAndDelete(req.params.id, (err, status) => {
        if (err){
            console.log(err);
        } else{
            console.log('Deletion successful');
        }
    });
    res.redirect('/campgrounds');
});

module.exports = router;