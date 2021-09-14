const passport = require('passport');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const path = require('path');
const app = express();

const { authRouter } = require('./Auth/auth.router');
const { decksRouter } = require('./Decks/decks.router');

//MIDDLEWARE
app.use(helmet());
app.use(
  cors({
    origin: ['http://localhost:3000'],
  })
);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

//ROUTERS
app.use(authRouter);
app.use(decksRouter);
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

module.exports = { app };
