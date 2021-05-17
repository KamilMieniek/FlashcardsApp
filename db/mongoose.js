const mongoose = require("mongoose");
const { User, Post } = require("./models/UserModel.js");
const { FlashCard } = require("./models/CardModel.js");
const dbName = "flashcards";
const url = `mongodb://127.0.0.1:27017/${dbName}`;
mongoose.connect(
    url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    },
    () => {
        console.log("connected");
    }
);

module.exports = {};