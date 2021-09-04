const fs = require('fs');
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../../../models/users.model');

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
      console.log('google profile', profile);

      const user = await User.findOrCreateUser(profile.id);
      if (!user) done(new Error());
      done(null, user);
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  // User.findById(id, function(err, user) {
  //   done(err, user);
  // });
  done(null, id);
});

function checkLoggedIn(req, res, next) {
  const isLoggedIn = true;
  if (!isLoggedIn) {
    return res.status(401).json({
      error: 'you must log in',
    });
  }
  next();
}

authRouter.get('/secret', checkLoggedIn, (req, res) => {
  return res.send('Personal');
});

authRouter.get(
  '/auth/google',
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
  req.logout();
  res.redirect('/');
});

module.exports = {
  authRouter,
};
