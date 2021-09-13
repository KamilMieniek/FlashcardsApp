const usersDataBase = require('./users.mongo');

async function findOrCreateUser(profile) {
  const user = await usersDataBase.findOneAndUpdate(
    {
      googleId: profile._json.sub,
    },
    {
      googleId: profile._json.sub,
      name: profile._json.given_name,
      email: profile._json.email,
      country: profile._json.locale,
      decks: [],
    },
    {
      new: true, // return document after update
      upsert: true, // create user if it doesn't exist
    }
  );

  if (!user) throw new Error('findOrCreateUser return user is null');

  return user;
}

async function findUserById(id) {
  try {
    const user = await usersDataBase.findById(id);
    return user;
  } catch (error) {
    return new Error({ message: `find user by id \n${error}` });
  }
}

module.exports = {
  findOrCreateUser,
  findUserById,
};
