const { ensureAuth, ensureGuest } = require('../Auth/auth.router');
const {
  httpGetAllPublicDecks,
  httpGetUsersDecks,
  httpDeleteDeck,
  httpCreateDeck,
} = require('./decks.controller');
const express = require('express');

const decksRouter = express();

decksRouter.get('/public/decks', httpGetAllPublicDecks);

decksRouter.get('/user/decks', httpGetUsersDecks);

decksRouter.post('/decks', httpCreateDeck);

decksRouter.delete('/decks/:id', httpDeleteDeck);

module.exports = { decksRouter };
