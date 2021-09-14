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
  flashCards: [{ frontTitle: String, backTitle: String }],
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
