const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deckSchema = Schema({
  _id: Schema.Types.ObjectId,
  front: {
    type: String,
    required: true,
  },
});

const Deck = mongoose.model('Deck', deckSchema);

module.exports = Deck;
