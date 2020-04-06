// * ENVIRONMENT * //
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('public')); // Assets directory
app.set('view engine','ejs'); // Embedded-Javascript as default Views format
app.use(bodyParser.urlencoded({extended: true})); // Enables req.body parse from POST request


// * ROUTES * //
app.get('/', (req, res) => {
    res.render('landing');
});

// DISPLAY CAMPGROUNDS
app.get('/campgrounds', (req, res) => {
    res.render('campgrounds',{campgrounds:campgrounds});
});

// CREATE CAMPGROUND
app.post('/campgrounds', (req, res) => {
    // GETS FORM DATA
    let name = req.body.name;
    let image = req.body.image;
    // INSERTS INTO CAMPGROUNDS ARRAY AS OBJECT
    campgrounds.push({
        name: name,
        image: image
    });
    res.redirect('campgrounds');
});

// DISPLAY FORM TO CREATE CAMPGROUND
app.get('/campgrounds/new', (req, res) => {
    res.render('new');
})

// * DATA * //

let campgrounds = [
    {
        name: 'Green Hills',
        image: 'https://images.unsplash.com/photo-1488790881751-9068aa742b9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
        name: 'Smoky Woods',
        image: 'https://images.unsplash.com/photo-1511993807578-701168605ad3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
        name: 'Ghostly Hollow',
        image: 'https://images.unsplash.com/photo-1516013894828-b214a58fdba7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    }
];

// Start server
app.listen(3000, () => {
    console.log('YelpCamp server listening on port 3000.');
});