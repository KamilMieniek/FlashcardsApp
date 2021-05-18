let UserModel = require("../../db/models/UserModel");
let UserController = {
    find: async(req, res) => {
        let found = await UserModel.findOne({ name: req.params.username });
        res.json(found);
    },
    all: async(req, res) => {
        let allUsers = await UserModel.find();
        res.json(allUsers);
    },
    create: async(req, res) => {
        console.log(req.body);
        let newUser = new UserModel(req.body);
        let savedUser = await newUser.save();
        res.json(savedUser);
    },
    getAllDecks: async(req, res) => {
        let foundUser = await UserModel.find({
            name: req.params.username,
        }).populate("decks");
        res.json(foundUser);
    },
};

module.exports = UserController;