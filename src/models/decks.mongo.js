const mongoose = require('mongoose');
const Schema = mongoose.Schema


const deckSchema  = Schema({
    _id: Schema.Types.ObjectId,
    title: String,
    author: {type: Schema.Types.ObjectId, ref: 'User'},
    cards: [{type: Schema.Types.ObjectId, ref: 'Card'}]
})

const Deck = mongoose.model('Deck',deckSchema)