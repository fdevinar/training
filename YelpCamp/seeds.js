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

async function seedDB() {
    await Campground.deleteMany({});
    await Comment.deleteMany({});

    for (const seed of seeds){
        let campground = await Campground.create(seed);
        let comment1 = await Comment.create({
            text: 'This campsite is great!',
            author: 'Fabrigol'
        });
        let comment2 = await Comment.create({
            text: 'This campsite is not that great!',
            author: 'Fabri X'
        });
        campground.comments.push(comment1);
        campground.comments.push(comment2);
        campground.save();
    };
}


module.exports = seedDB;
