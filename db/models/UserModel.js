const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//TODO: password etc.

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    age: {
        type: Number,
    },
    decks: [{
        type: Schema.Types.ObjectId,
        ref: "deck",
    }, ],
});

module.exports = mongoose.model("User", UserSchema);