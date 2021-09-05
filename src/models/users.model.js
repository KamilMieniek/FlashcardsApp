const usersDataBase = require('./users.mongo');

async function findOrCreateUser(id) {
  try {
    const user = await usersDataBase.findOneAndUpdate(
      {
        googleId: id,
      },
      {
        googleId: id,
      },
      {
        upsert: true, // create user if it doesn't exist
      }
    );
    return user;
  } catch (error) {
    return new Error({ message: 'findOrCreateUser \n', error });
  }
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
