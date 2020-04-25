const myFunctions = {
    isLoggedIn: 
    function isLoggedIn(req, res, next){
        if(req.isAuthenticated()){
            return next();
        }
        console.log('Failed to Authenticate');
        res.redirect('/login');
    },
    isAuthorized:
    function isAuthorized(req, res, next){
        if(req.isAuthenticated()){
            console.log('isAuthorized Function Called');
            return next();
        }
        console.log('User Not Authorized');
        res.redirect('/campgrounds');   
    }
}

module.exports = myFunctions;