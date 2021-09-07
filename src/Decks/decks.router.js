const { checkLoggedIn } = require('../Auth/auth.router');
const {
  httpGetAllPublicDecks,
  httpGetUsersDecks,
  httpDeleteDeck,
} = require('./decks.controller');
const express = require('express');

const decksRouter = express();

decksRouter.get('/public/decks', httpGetAllPublicDecks);

decksRouter.get('/user/decks', checkLoggedIn, httpGetUsersDecks);

decksRouter.post('/decks', (req, res) => {
  //TODO:
});

decksRouter.delete('/decks/:id', checkLoggedIn, httpDeleteDeck);

module.exports = decksRouter;
