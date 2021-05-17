const { FlashCard } = require("../../db/models/CardModel");

const newCard = async(data) => {
    try {
        const card = new FlashCard(data);
        await card.save();
        console.log(card);
    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    newCard: newCard,
};