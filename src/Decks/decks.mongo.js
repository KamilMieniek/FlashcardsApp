const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deckSchema = Schema({
  _id: Schema.Types.ObjectId,
  title: {
    type: String,
    required: true,
  },
  description: { type: String },

  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  cards: [{ type: Schema.Types.ObjectId, ref: 'Card' }],
  creationDate: {
    type: Date,
    required: true,
  },
  public: {
    type: Boolean,
    default: true,
  },
});

const Deck = mongoose.model('Deck', deckSchema);

module.exports = Deck;
