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
// - EDIT - Display Form to Update Comment

// - UPDATE (PUT) - Update Comment in DB

// - DESTROY (DELETE) - Remove Comment from DB


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