const { getPagination } = require('../Db/query');
const { getAllPublicDecks, getUsersDecks } = require('./decks.model');

async function httpGetAllPublicDecks(req, res) {
  const { skip, limit } = getPagination(req.query);
  const decks = await getAllPublicDecks(skip, limit);
  if (!decks) {
    return res.status(404).json({
      message: 'There is no decks :(',
    });
  }
  res.status(200).json(decks);
}

async function httpGetUsersDecks(req, res) {
  const { skip, limit } = getPagination(req.query);
  const userId = req.user.id;
  if (!userId) {
    return res.json(404).json({
      message: 'userIsNotSavedInSession',
    });
  }
  const decks = await getUsersDecks(userId, skip, limit);

  return res.status(200).json(decks);
}

async function httpDeleteDeck(req, res) {
  //TODO isOwner not implemented
  const permission = await isOwner(req.params.id, req.user.id);
  if (!permission) {
    return res.status(405).json({
      message: 'You have no power here',
    });
  }
}

module.exports = {
  httpGetAllPublicDecks,
  httpGetUsersDecks,
  httpDeleteDeck,
};