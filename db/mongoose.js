const mongoose = require("mongoose");
const { User } = require("./models/user.js");
const dbName = "mongoose-test";
const url = `mongodb://127.0.0.1:27017/${dbName}`;

mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

const createUser = async(data) => {
    try {
        const user = new User(data);
        await user.save();
    } catch (error) {
        console.log(error);
    }
};

const findUsers = async(query) => {
    let value;
    try {
        value = await User.find({ age: 17 });
        const x = function(x) {
            console.log(x);
        };
        x(value);
    } catch (error) {
        console.log(error);
    }
};

module.exports = { createUser: createUser, findUsers: findUsers };