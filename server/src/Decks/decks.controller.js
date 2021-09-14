const { getPagination } = require('../Db/query');
const { getAllPublicDecks, getUsersDecks } = require('./decks.model');

const testObject = {
  deckTitle: 'zestaw1',
  deckDescription: 'opis zestawu',
  flashCards: [
    { frontTitle: 'front1', backTitle: 'back1' },
    { frontTitle: 'front2', backTitle: 'back2' },
  ],
};

async function httpGetAllPublicDecks(req, res) {
  try {
    const { skip, limit } = getPagination(req.query);
    const decks = await getAllPublicDecks(skip, limit);
    if (!decks) {
      return res.status(404).json({
        message: 'There is no decks :(',
      });
    }
    res.status(200).json(decks);
  } catch (error) {
    console.error(error);
  }
}

async function httpGetUsersDecks(req, res) {
  try {
    const { skip, limit } = getPagination(req.query);
    const userId = req.user.id;
    if (!userId) {
      return res.json(404).json({
        message: 'userIsNotSavedInSession',
      });
    }
    const decks = await getUsersDecks(userId, skip, limit);

    return res.status(200).json(decks);
  } catch (error) {
    console.error(error);
  }
}

async function httpDeleteDeck(req, res) {
  try {
    const permission = await isOwner(req.params.id, req.user.id);
    if (!permission) {
      return res.status(405).json({
        message: 'You have no power here',
      });
    }
  } catch (error) {
    console.error(error);
  }
}

function httpCreateNewDeck(req, res) {
  try {
    const newDeck = req.body;
    if (!newDeck) {
      res.status(404).json({ message: 'Bad request' });
    }
    // //TODO: Validation,  login on front,
    // newDeck = Object.assign({ author: req.user._id }, req.body);
    CreateNewDeck(newDeck);
    res.status(201).json({ ok: true });
  } catch (err) {
    console.error(err);
  }

  // newDeck.authorID = req.user._id
  // newDeck.authorID = req.user._id;
}

module.exports = {
  httpGetAllPublicDecks,
  httpGetUsersDecks,
  httpDeleteDeck,
  httpCreateNewDeck,
};
