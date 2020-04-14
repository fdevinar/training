const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/reference');

// * MODEL DEFINITION
// POST MODEL - title, content => NEEDS TO GO FIRST, TO USER KNOWS WHAT POST SCHEMA IS
const postSchema = new mongoose.Schema({
    title: String,
    content: String
});
let Post = mongoose.model('Post', postSchema);
// USER MODEL - email, name
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ]
});
let User = mongoose.model('User', userSchema);

// * USER/POST CREATION

// User.create({
//     name: 'Mark',
//     email: 'Mark@doe.com'
// });

// let newPost = new Post({
//     title: 'REF-3',
//     content: 'REF-3'
// });

// User.findOne({name: 'Mark'}, (err, foundUser) => {
//     foundUser.posts.push(newPost);
//     foundUser.save();
//     console.log(foundUser);
// });

// FIND USER AND ALL POSTS ASSOCIATED

// TODO TEST WHY ITS NOT POPULATING

User.findOne({name: 'Mark'},(err, user) => {
    if (err){
        console.log(err);
    } else{
        console.log(user);
    }   
});


