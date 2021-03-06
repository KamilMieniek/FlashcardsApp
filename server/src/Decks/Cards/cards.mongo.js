const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deckSchema = Schema({
  _id: Schema.Types.ObjectId,
  front: {
    type: String,
    required: true,
  },
  back: {
    type: String,
    required: true,
  },
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;
