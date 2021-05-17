const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DeckSchema = new Schema({
    name: String,
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    cards: [{
        type: Schema.Types.ObjectId,
        ref: "Card",
    }, ],
});
module.exports = mongoose.model("Deck", DeckSchema);