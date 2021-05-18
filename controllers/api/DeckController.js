let DeckModel = require("../../db/models/DeckModel");

let DeckController = {
    all: async(req, res) => {
        let decks = await DeckModel.find();
        res.json(decks);
    },
    create: async(req, res) => {
        //TODO: creating new Deck
        let deck = new DeckModel(req.body);
        let savedDeck = deck.save();
        res.json(savedDeck);
    },
};

module.exports = DeckController;