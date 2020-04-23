const mongoose = require('mongoose');
const Campground = require('./models/campground');
const Comment = require('./models/comment');

let seeds = [
    {
        name: 'Starry Night',
        image: 'https://images.unsplash.com/photo-1479741044197-d28c298f8c77?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo minus eum non distinctio! Perferendis veritatis, at esse ipsum, unde deserunt deleniti, blanditiis fuga molestias optio recusandae dolorum. Odit, nesciunt repellat, fuga adipisci, exercitationem ullam veritatis tenetur reiciendis recusandae ex beatae quam cum molestias a quae nam ipsam totam impedit! Animi, libero magni! Maiores, est, fugit voluptate minus dolorem sint saepe impedit molestiae totam debitis asperiores iure facilis a perferendis distinctio ratione incidunt repellat vel officiis unde nesciunt ut laborum? Debitis architecto rerum a officiis, temporibus perferendis. Ea, temporibus adipisci facilis suscipit voluptatum dolorum impedit voluptate placeat nulla laboriosam laudantium commodi.'
    },
    {
        name: 'Cloudy Top',
        image: 'https://images.unsplash.com/photo-1483381719261-6620dfa2d28a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo minus eum non distinctio! Perferendis veritatis, at esse ipsum, unde deserunt deleniti, blanditiis fuga molestias optio recusandae dolorum. Odit, nesciunt repellat, fuga adipisci, exercitationem ullam veritatis tenetur reiciendis recusandae ex beatae quam cum molestias a quae nam ipsam totam impedit! Animi, libero magni! Maiores, est, fugit voluptate minus dolorem sint saepe impedit molestiae totam debitis asperiores iure facilis a perferendis distinctio ratione incidunt repellat vel officiis unde nesciunt ut laborum? Debitis architecto rerum a officiis, temporibus perferendis. Ea, temporibus adipisci facilis suscipit voluptatum dolorum impedit voluptate placeat nulla laboriosam laudantium commodi.'
    },
    {
        name: 'Glowy Dark',
        image: 'https://images.unsplash.com/photo-1432817495152-77aa949fb1e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo minus eum non distinctio! Perferendis veritatis, at esse ipsum, unde deserunt deleniti, blanditiis fuga molestias optio recusandae dolorum. Odit, nesciunt repellat, fuga adipisci, exercitationem ullam veritatis tenetur reiciendis recusandae ex beatae quam cum molestias a quae nam ipsam totam impedit! Animi, libero magni! Maiores, est, fugit voluptate minus dolorem sint saepe impedit molestiae totam debitis asperiores iure facilis a perferendis distinctio ratione incidunt repellat vel officiis unde nesciunt ut laborum? Debitis architecto rerum a officiis, temporibus perferendis. Ea, temporibus adipisci facilis suscipit voluptatum dolorum impedit voluptate placeat nulla laboriosam laudantium commodi.'
    },
    {
        name: 'Bright Climb',
        image: 'https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo minus eum non distinctio! Perferendis veritatis, at esse ipsum, unde deserunt deleniti, blanditiis fuga molestias optio recusandae dolorum. Odit, nesciunt repellat, fuga adipisci, exercitationem ullam veritatis tenetur reiciendis recusandae ex beatae quam cum molestias a quae nam ipsam totam impedit! Animi, libero magni! Maiores, est, fugit voluptate minus dolorem sint saepe impedit molestiae totam debitis asperiores iure facilis a perferendis distinctio ratione incidunt repellat vel officiis unde nesciunt ut laborum? Debitis architecto rerum a officiis, temporibus perferendis. Ea, temporibus adipisci facilis suscipit voluptatum dolorum impedit voluptate placeat nulla laboriosam laudantium commodi.'
    },
    
];

async function seedDB() {
    await Campground.deleteMany({});
    await Comment.deleteMany({});

    for (const seed of seeds){
        let campground = await Campground.create(seed);
        let comment1 = await Comment.create({
            text: 'This campsite is great!',
            author: {
                username: 'X',
                id: '5e9f78c2895fd81480e61d62'
            }
        });
        let comment2 = await Comment.create({
            text: 'This campsite is not THAT great!',
            author: {
                username: 'X',
                id: '5e9f78c2895fd81480e61d62'
            }
        });
        campground.comments.push(comment1);
        campground.comments.push(comment2);
        campground.save();
    };
}


module.exports = seedDB;
