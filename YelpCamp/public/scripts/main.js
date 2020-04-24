//AUTHENTICATE IF LOGGED IN
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    console.log('Failed to Authenticate');
    res.redirect('/login');
}

module.exports = isLoggedIn;