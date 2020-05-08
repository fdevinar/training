const Campground = require('./models/campground');
const Comment = require('./models/comment');

let campgroundSeeds = [
    {
        name: 'Starry Night',
        price: '12.00',
        image: 'https://images.unsplash.com/photo-1479741044197-d28c298f8c77?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo minus eum non distinctio! Perferendis veritatis, at esse ipsum, unde deserunt deleniti, blanditiis fuga molestias optio recusandae dolorum. Odit, nesciunt repellat, fuga adipisci, exercitationem ullam veritatis tenetur reiciendis recusandae ex beatae quam cum molestias a quae nam ipsam totam impedit! Animi, libero magni! Maiores, est, fugit voluptate minus dolorem sint saepe impedit molestiae totam debitis asperiores iure facilis a perferendis distinctio ratione incidunt repellat vel officiis unde nesciunt ut laborum? Debitis architecto rerum a officiis, temporibus perferendis. Ea, temporibus adipisci facilis suscipit voluptatum dolorum impedit voluptate placeat nulla laboriosam laudantium commodi.',
        createdBy: {
            id: '5e9f78c2895fd81480e61d62',
            username: 'X'
        }
    },
    {
        name: 'Cloudy Top',
        price: '8.00',
        image: 'https://images.unsplash.com/photo-1483381719261-6620dfa2d28a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo minus eum non distinctio! Perferendis veritatis, at esse ipsum, unde deserunt deleniti, blanditiis fuga molestias optio recusandae dolorum. Odit, nesciunt repellat, fuga adipisci, exercitationem ullam veritatis tenetur reiciendis recusandae ex beatae quam cum molestias a quae nam ipsam totam impedit! Animi, libero magni! Maiores, est, fugit voluptate minus dolorem sint saepe impedit molestiae totam debitis asperiores iure facilis a perferendis distinctio ratione incidunt repellat vel officiis unde nesciunt ut laborum? Debitis architecto rerum a officiis, temporibus perferendis. Ea, temporibus adipisci facilis suscipit voluptatum dolorum impedit voluptate placeat nulla laboriosam laudantium commodi.',
        createdBy: {
            id: '5e9f78c2895fd81480e61d62',
            username: 'X'
        }
    },
    {
        name: 'Glowy Dark',
        price: '10.00',
        image: 'https://images.unsplash.com/photo-1432817495152-77aa949fb1e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo minus eum non distinctio! Perferendis veritatis, at esse ipsum, unde deserunt deleniti, blanditiis fuga molestias optio recusandae dolorum. Odit, nesciunt repellat, fuga adipisci, exercitationem ullam veritatis tenetur reiciendis recusandae ex beatae quam cum molestias a quae nam ipsam totam impedit! Animi, libero magni! Maiores, est, fugit voluptate minus dolorem sint saepe impedit molestiae totam debitis asperiores iure facilis a perferendis distinctio ratione incidunt repellat vel officiis unde nesciunt ut laborum? Debitis architecto rerum a officiis, temporibus perferendis. Ea, temporibus adipisci facilis suscipit voluptatum dolorum impedit voluptate placeat nulla laboriosam laudantium commodi.',
        createdBy: {
            id: '5e9f78c2895fd81480e61d62',
            username: 'X'
        }
    },
    {
        name: 'Bright Climb',
        price: '14.00',
        image: 'https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo minus eum non distinctio! Perferendis veritatis, at esse ipsum, unde deserunt deleniti, blanditiis fuga molestias optio recusandae dolorum. Odit, nesciunt repellat, fuga adipisci, exercitationem ullam veritatis tenetur reiciendis recusandae ex beatae quam cum molestias a quae nam ipsam totam impedit! Animi, libero magni! Maiores, est, fugit voluptate minus dolorem sint saepe impedit molestiae totam debitis asperiores iure facilis a perferendis distinctio ratione incidunt repellat vel officiis unde nesciunt ut laborum? Debitis architecto rerum a officiis, temporibus perferendis. Ea, temporibus adipisci facilis suscipit voluptatum dolorum impedit voluptate placeat nulla laboriosam laudantium commodi.',
        createdBy: {
            id: '5ea22a3c88290710aa60cc4e',
            username: 'Renato Portaluppi'
        }
    },  
];

async function seedDB() {
    await Campground.deleteMany({});
    await Comment.deleteMany({});
    for (const seed of campgroundSeeds){
        // CREATE CAMPGROUNDS BASED ON SEEDS ARRAY
        let campground = await Campground.create(seed);
        // CREATE COMMENTS USING DYNAMIC CAMPGROUND DATA
        let comment1 = await Comment.create({
            text: 'Somos gremistas, sempre apoiando...',
            author: {
                id: '5ea22a3c88290710aa60cc4e',
                username: 'Renato Portaluppi'
            }
            ,campground: {
                id: campground.id,
                name: campground.name
            }
        });
        let comment2 = await Comment.create({
            text: 'Dale dale tricolor!',
            author: {
                id: '5ea22a3c88290710aa60cc4e',
                username: 'Renato Portaluppi'
            }
            ,campground: {
                id: campground.id,
                name: campground.name
            }
        });
        let comment3 = await Comment.create({
            text: 'This is a TEST comment!',
            author: {
                id: '5e9f78c2895fd81480e61d62',
                username: 'X'
            }
            ,campground: {
                id: campground.id,
                name: campground.name
            }
        });
        campground.comments.push(comment1);
        campground.comments.push(comment2);
        campground.comments.push(comment3);
        campground.save();
    };
}

module.exports = seedDB;
