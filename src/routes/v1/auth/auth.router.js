const fs = require('fs');
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config();

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
    function (accessToken, refreshToken, user, cb) {
      console.log('google profile', user);
      return cb(null, user);

      //   User.findOrCreate({ googleId: profile.id }, function (err, user) {
      //     return cb(err, user);
      //   });
    }
  )
);

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
  passport.authenticate('google', { scope: ['profile'] })
);

authRouter.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/failure',
    successRedirect: '/',
    session: true,
  }),
  (req, res) => {
    console.log('Google called us back!0 \\*__*/');
  }
);

authRouter.get('/auth/logout', (req, res) => {});

module.exports = {
  authRouter,
  checkLoggedIn,
};
