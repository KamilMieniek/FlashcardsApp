const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deckSchema = Schema;

const Deck = mongoose.model('Deck', deckSchema);

module.exports = Deck;