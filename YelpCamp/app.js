// * ENVIRONMENT * //
const express = require('express');
const app = express();

app.use(express.static('public')); // Assets directory
app.set('view engine','ejs'); // Embedded-Javascript as default Views format

// * ROUTES * //
app.get('/', (req, res) => {
    res.render('landing');
});

app.get('/campgrounds', (req, res) => {
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


    res.render('campgrounds',{campgrounds:campgrounds});
});

// Start server
app.listen(3000, () => {
    console.log('YelpCamp server listening on port 3000.');
});