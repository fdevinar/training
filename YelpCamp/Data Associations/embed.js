const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/embed');

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
    posts: [postSchema]
});
let User = mongoose.model('User', userSchema);


// * USER/POST CREATION
// User.create({
//     name: 'Maximilian',
//     email: 'test@test.com',
//     posts: [
//         {title: 'Post 1' , content: 'Content 1'},
//         {title: 'Post 2' , content: 'Content 2'},
//         {title: 'Post 3' , content: 'Content 3'}
//     ]},
//     (err, user) => {
//     if (err){
//         console.log(err);
//     } else{
//         console.log('User Created:');
//         console.log(user);
//     }
// });
// Post.create({
//     title: 'Title X',
//     content: 'Great post!'
// }, (err, post) => {
//     if (err){
//         console.log(err);
//     } else{
//         console.log('Post created:');
//         console.log(post);
//     }
// });

// let newUser = new User({
//     name: 'Fabrigol',
//     email: 'fc@fc.com'
// });

// newUser.posts.push({
//     title: 'pushed title',
//     content: 'pushed content'
// });

// newUser.save();


// function findInDB(object){
//     object.find({}, (err, list) => {
//         if (err){
//             console.log(err);
//         } else{
//             console.log(`${object} found: `);
//             console.log(list);
//         }
//     });
// };

// findInDB(User);
// findInDB(Post);