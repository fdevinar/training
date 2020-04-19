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
//     name: 'Harry',
//     email: 'Dirty@Harry.com'
// });

// Post.create({
//     title: 'Do I feel lucky?',
//     content: 'Well, do ya punk?'
// }, (err, post) => {
//     User.findOne({name: 'Harry'}, (err, foundUser) => {
//         if (err){
//             console.log(err);
//         }else {
//             foundUser.posts.push(post);
//             foundUser.save();
//         }
//     });
// });

User.findOne({name: 'Harry'}).populate('posts').exec( (err, user) => {
    if (err){
        console.log(err);
    } else{
        console.log(user);
    }
});