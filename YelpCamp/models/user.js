// REQUIRE MONGOOSE
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
// CREATE SCHEMA
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    created: {type: Date, default: Date.now()}
});
// CREATE MODEL BASED ON SCHEMA
userSchema.plugin(passportLocalMongoose);
const User = mongoose.model("User", userSchema);
// EXPORT MODEL
module.exports = User;