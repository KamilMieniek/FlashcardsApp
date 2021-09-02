const mongoose = require('mongoose');
const Schema = mongoose.Schema


const userSchema  = Schema({
    _id: Schema.Types.ObjectId,
    firstName: {
        type: String,
        require : true
    },
    lastName: String,
    email: {
        type: String,
        require : true
    },
    permissionLevel : {
        type: Number,
        default: 0},
    decks: {
        type: Schema.Types.ObjectId, 
        ref: 'Deck'},
})

const Deck = mongoose.model('User',userSchema)