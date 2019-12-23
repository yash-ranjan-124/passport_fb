var express = require('express');
var router = express.Router();
var {passport} = require("../libs/auth")


  // route for home page
  router.get('/', function(req, res) {
    res.render('index.ejs'); // load the index.ejs file
});

// route for login form
// route for processing the login form
// route for signup form
// route for processing the signup form

// route for showing the profile page
router.get('/profile', isLoggedIn, function(req, res) {
    res.render('profile.ejs', {
        user : req.app.user // get the user out of session and pass to template
    });
});

// =====================================
// FACEBOOK ROUTES =====================
// =====================================
// route for facebook authentication and login
router.get('/auth/facebook', passport.authenticate('facebook', {
  scope : ['public_profile', 'email','user_birthday']
}));

// handle the callback after facebook has authenticated the user
router.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
        failureRedirect:"/"
    }),(req,res)=>{
      req['app']['user'] = req.user;
      res.redirect("/profile");
    });

// route for logging out
router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});



function isLoggedIn(req, res, next) {
  if (req.app.user)
      return next();
    res.redirect('/');
}

module.exports = router;