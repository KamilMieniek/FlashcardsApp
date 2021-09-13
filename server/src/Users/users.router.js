const express = require('express');
const { app } = require('../app');
const { ensureAuth, ensureGuest } = require('../Auth/auth.router');
const usersRouter = express();

usersRouter.get('/profile/:id', ensureAuth, (req, res) => {});

usersRouter.get('/dashboard', (req, res) => {
  res.send('<h1>oppa</h1>');
});

usersRouter.get('/login', ensureGuest, (req, res) => {});
