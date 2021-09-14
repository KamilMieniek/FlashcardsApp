const { ensureAuth, ensureGuest } = require('../Auth/auth.router');
const {
  httpGetAllPublicDecks,
  httpGetUsersDecks,
  httpDeleteDeck,
  httpCreateNewDeck,
} = require('./decks.controller');
const express = require('express');

const decksRouter = express();

decksRouter.get('/public/decks', httpGetAllPublicDecks);

decksRouter.get('/user/decks', httpGetUsersDecks);
// httpCreateDeck
decksRouter.post('/decks', httpCreateNewDeck);

decksRouter.delete('/decks/:id', httpDeleteDeck);

module.exports = { decksRouter };
