const fs = require('fs');
const express = require('express');
const passport = require('passport');
const session = require('express-session');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../../models/users.model');

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

authRouter.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true },
  })
);

authRouter.use(passport.session());

passport.serializeUser(function (user, done) {
  console.log('Serialize User');
  done(null, user.id);
});

passport.deserializeUser(async function (id, done) {
  console.log('Deserialize User');
  const user = await User.findUserById(id);
  if (!user) {
    console.log('nie ma uzytkownika');
    done(null, false);
  }
  console.log('jest uzytkownik uzytkownika');
  done(null, user);
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
  return res.send('Personal' + req.user);
});

authRouter.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

authRouter.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/failure',
    successRedirect: '/success',
    session: true,
  }),
  (req, res) => {}
);

authRouter.get('/auth/logout', (req, res) => {
  req.logOut();
  res.redirect('/');
});

authRouter.get('/auth/logout', (req, res) => {
  req.logOut();
  res.redirect('/');
});

authRouter.get('/success', (req, res) => {
  res.send(req.user);
});
module.exports = {
  authRouter,
};
