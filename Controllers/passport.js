const GoogleStrategy = require('passport-google-oauth20').Strategy;

const passport = require('passport');

const GOOGLE_CLIENT_ID = "211365909392-ledgmhpkg3lpqfbmhlhnmfg0mqm052m2.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";
 
passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    cb(null, profile);
  }
));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});