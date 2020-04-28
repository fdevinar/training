// REQUIRE MONGOOSE
const mongoose = require('mongoose');

// CREATE SCHEMA
const commentSchema = new mongoose.Schema({
    text: String,
    author: 
    {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        username: String
    },
    created: {type: Date, default: Date.now()},
    campground:
    {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Campground'
        },
        name: String
    }
});
// CREATE MODEL BASED ON SCHEMA
const Comment = mongoose.model("Comment", commentSchema);
// EXPORT MODEL
module.exports = Comment;