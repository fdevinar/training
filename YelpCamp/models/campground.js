// REQUIRE MONGOOSE
const mongoose = require('mongoose');
// CREATE SCHEMA
const campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }],
    created: {type: Date, default: Date.now()}
});
// CREATE MODEL BASED ON SCHEMA
const Campground = mongoose.model("Campground", campgroundSchema);
// EXPORT MODEL
module.exports = Campground;