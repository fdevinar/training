const mongoose = require('mongoose');
const Campground = require('./models/campground');
const Comment = require('./models/comment');

let seeds = [
    {
        name: 'Starry Night',
        image: 'https://images.unsplash.com/photo-1479741044197-d28c298f8c77?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        description: 'Beautiful night full of stars!'
    },
    {
        name: 'Cloudy Top',
        image: 'https://images.unsplash.com/photo-1483381719261-6620dfa2d28a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        description: 'Tough hill to climb, but the clouds are worth it!'
    },
    {
        name: 'Glowy Dark',
        image: 'https://images.unsplash.com/photo-1432817495152-77aa949fb1e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        description: 'Don\'t be scared, and never stare into the abyss!'
    },
    {
        name: 'Bright Climb',
        image: 'https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        description: 'Your lungs will complain but your mind will enjoy!'
    },
    
];

let comment = {
    text: 'I love this campground!',
    author: 'Fabrigol'
};

async function seedDB() {
    await Campground.deleteMany({});
    await Comment.create(comment);
    
    // for (seed of seeds){
    //     Campground.create(seed, (err,campground) => {
    //         if (err){
    //             console.log(err);
    //         } else{
    //             let comment = Comment.findOne({});
    //             Campground.comments.push(comment);
    //             campground.save();
    //         }
    //     })
    // };

}


module.exports = seedDB;
