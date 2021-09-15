const express = require('express');
const passport = require('passport');
const session = require('express-session');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../Users/users.model');

const authRouter = express();

const config = {
  callbackURL: '/auth/google/callback',
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
};

passport.use(
  new GoogleStrategy(
    {
      clientID: config.CLIENT_ID,
      clientSecret: config.CLIENT_SECRET,
      callbackURL: config.callbackURL,
    },
    async function (accessToken, refreshToken, profile, done) {
      const user = await User.findOrCreateUser(profile).catch((error) => {
        console.error(error);
        done(error);
      });
      done(null, user);
    }
  )
);

authRouter.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true },
  })
);
authRouter.use(passport.initialize());
authRouter.use(passport.session());
passport.serializeUser(function (user, done) {
  console.log('Serialize User');
  done(null, { _id: user._id });
});

passport.deserializeUser(async function (id, done) {
  console.log('Deserialize User');
  const user = await User.findUserById(id);
  if (!user) {
    done(null, false);
  }
  done(null, user);
});

// function checkLoggedIn(req, res, next) {
//   if (!req.user) {
//     return res.status(401).json({
//       error: 'you must log in',
//     });
//   }
//   next();
// }

authRouter.get('/failure', (req, res) => {
  return res.send('Failure');
});

authRouter.get(
  '/auth/google',
  ensureGuest,
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

authRouter.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/failure',
    successRedirect: '/',
    session: true,
  }),
  (req, res) => {}
);

authRouter.get('/auth/logout', (req, res) => {
  req.logOut();
  res.redirect('/');
});

function ensureAuth(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect('/login');
  }
}

function ensureGuest(req, res, next) {
  if (req.isAuthenticated()) {
    res.redirect('/');
  } else {
    return next();
  }
}

module.exports = {
  authRouter,
  ensureAuth,
  ensureGuest,
};
