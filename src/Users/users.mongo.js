const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
  _id: Schema.Types.ObjectId,
  googleId: {
    type: String,
  },
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  country: {
    type: String,
    require: true,
  },
  decks: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Deck',
    },
  ],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
