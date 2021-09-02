const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const path = require('path');
const { authRouter, checkLoggedIn } = require('./routes/v1/auth/auth.router');
const app = express();

//MIDDLEWARE
app.use(helmet());
app.use(express.json());
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '..', 'public')));

//ROUTERS
//app.use(authRouter);
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

module.exports = app;