const mongoose = require("mongoose");
const schema = new mongoose.Schema({
    name: {
        type: String,
    },
    age: {
        type: Number,
    },
});
const User = mongoose.model("User", schema);

module.exports.User = User;