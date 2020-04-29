const Campground = require('../../models/campground');
const Comment = require('../../models/comment');

const myFunctions = {
    isLoggedIn: 
    function isLoggedIn(req, res, next){
        if(req.isAuthenticated()){
            return next();
        }
        console.log('Failed to Authenticate');
        res.redirect('/login');
    },
    isOwner:
    async function isOwner(req, res, next){
        let authorized = false;
        if(await (req.isAuthenticated())){
            // HANDLE CAMPGROUNDS OWNER
            if (await(req.baseUrl == '/campgrounds')){
                await Campground.findById(req.params.id, (err, campground) => {
                    if(err){
                        console.log(err);
                        return res.redirect('/campgrounds');
                    }else{
                        if (JSON.stringify(campground.createdBy.id) === JSON.stringify(req.user.id)){
                            console.log('User Authorized! Requester.ID = Campgrounds.CreatedBy.ID');
                            authorized = true;
                            return next();
                        }
                    }
                })
            };
            // HANDLE COMMENTS OWNER
            if (await(req.baseUrl.slice(-9,46) === '/comments')){
                await Comment.findById(req.params.id, (err, comment) => {
                    if(err){
                        console.log(err);
                        return res.redirect('/campgrounds');
                    }else{
                        if (JSON.stringify(comment.author.id) === JSON.stringify(req.user.id)){
                            console.log('User Authorized! Requester.ID = Comment.Author.ID');
                            authorized = true;
                            return next();
                        }
                    }
                })
            };
        };
        if (authorized){
            return
        }else{
            console.log('User Not Authorized to Update/Delete');
            return res.redirect('/campgrounds');   
        }
    }
}

module.exports = myFunctions;