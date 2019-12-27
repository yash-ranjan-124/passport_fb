const passport = require("passport");
const InstaStrategy = require("passport-facebook").Strategy;


const FB_CLIENT_ID = "";
const FB_CLIENT_SECRET = "";

passport.serializeUser((user,done)=>{
    done(null,user);
});

passport.deserializeUser((user_obj,done)=>{
    done(null,user_obj);
});

passport.use(new InstaStrategy({
    clientID: FB_CLIENT_ID,
    clientSecret: FB_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    // asynchronous verification, for effect...
    process.nextTick(function () {

      // To keep the example simple, the user's Instagram profile is returned to
      // represent the logged-in user.  In a typical application, you would want
      // to associate the Instagram account with a user record in your database,
      // and return that user instead.
      return done(null, profile);
    });
  }
));

module.exports ={ passport};
