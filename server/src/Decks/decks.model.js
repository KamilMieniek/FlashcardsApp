const decksDataBase = require('./decks.mongo');

function saveDeck(doc) {
  const deck = decksDataBase.create(doc);
}

async function getAllPublicDecks(skip, limit) {
  return await decksDataBase
    .find({ public: true }, { _id: 0, __v: 0 })
    .skip(skip)
    .limit(limit);
}

async function isOwner(deckId, userId) {
  return await decksDataBase.find({
    _id: deckId,
    author: userId,
  });
}

async function getUsersDecks(userId, skip, limit) {
  return await decksDataBase
    .find(
      { author: userId },
      {
        _id: 0,
        __v: 0,
      }
    )
    .skip(skip)
    .limit(limit);
}

async function CreateNewDeck(deck) {
  console.log(deck);
  Object.assign(deck, {
    public: true,
    creationDate: Date.now(),
  });

  return await decksDataBase.create(deck);
}

module.exports = {
  getAllPublicDecks,
  getUsersDecks,
  CreateNewDeck,
};
