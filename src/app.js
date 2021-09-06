const passport = require('passport');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const path = require('path');
const app = express();

const { authRouter } = require('./Auth/auth.router');
const { decksRoute } = require('./Decks/decks.router');

//MIDDLEWARE
app.use(helmet());
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

//ROUTERS
app.use(authRouter);
app.use(decksRoute);
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

module.exports = { app };
