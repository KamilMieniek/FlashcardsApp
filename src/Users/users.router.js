const express = require('express');
const { app } = require('../app');

const usersRouter = express();

usersRouter.get('/profile/:id', (req, res) => {});
