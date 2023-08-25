const mongoose = require("mongoose")


const userCoinSchema = new mongoose.Schema({
    coinType: {
        type: String,
        required: true,
    },
    balance: {
        type: Number,
        default: 0,
    },
});


const User = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: { type: String, required: true },
    profilePic: {type: String,default:"null"},
    quote: {type: String},
    number: { type: String },
    coins: [userCoinSchema],

}, {collection: "user-data"})

const model = mongoose.model("UserData", User)
module.exports = model