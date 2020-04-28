const express = require('express');
const router = express.Router({mergeParams: true});
const Campground = require('../models/campground');
const Comment = require('../models/comment');
const moment = require('moment');
const myFunctions = require('../public/scripts/main');
const isLoggedIn = myFunctions.isLoggedIn;

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
                    comment.campground = {
                        id: campground.id,
                        name: campground.name
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
// - EDIT - Display Form to Update Comment
router.get('/:id/edit', (req, res) => {
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
router.put('/:id', (req, res) => {
    Comment.findByIdAndUpdate(req.params.id, req.body , (err, comment) => {
        if(err){
            console.log(err);
            res.redirect('/campgrounds');
        }else{
            res.redirect('/campgrounds/' + comment.campground.id);
        };
    });
});
// - DESTROY (DELETE) - Remove Comment from DB
router.delete('/:id', (req, res) => {
    res.send('DELETE COMMENT ROUTE');
});

module.exports = router;

// // - EDIT - Display form to Edit Campground
// router.get('/:id/edit', isOwner , (req, res) => {
//     Campground.findById(req.params.id, (err, campground) => {
//         if (err){
//             console.log(`ERROR:  ${err}`);
//             res.redirect('/campgrounds');
//         } else{
//             res.render('campgrounds/update',{campground: campground});
//         }        
//     });
// });
// // - UPDATE (PUT) - Edit Campground in DB
// router.put('/:id', isOwner, (req, res) => {
//     Campground.findByIdAndUpdate(req.params.id, req.body, (err, status) =>{
//         if (err){
//             console.log(err);
//             res.redirect('/campgrounds');
//         } else{
//             console.log('Update successful');
//             res.redirect(`/campgrounds/${req.params.id}`);
//         };
//     });
// });
// // - DESTROY (DELETE) - Delete Campground in DB
// // TODO DELETE COMMENTS ASSOCIATED TO CAMPGROUND
// router.delete('/:id', isOwner, (req, res) => {
//     Campground.findByIdAndDelete(req.params.id, (err, status) => {
//         if (err){
//             console.log(err);
//         } else{
//             console.log('Deletion successful');
//         }
//     });
//     res.redirect('/campgrounds');
// });