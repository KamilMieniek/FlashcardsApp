const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CardSchema = new mongoose.Schema({
    front: String,
    back: String,
    deck: {
        type: Schema.Types.ObjectId,
        ref: "Deck",
    },
});
module.exports.FlashCard = mongoose.model("FlashCard", CardSchema);