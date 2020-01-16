// var movies = {
//     movieList: [
//         {
//             title: "Scarface",
//             rating: 4.5,
//             hasWatched: true
//                 },
//         {
//             title: "Godfather",
//             rating: 5.0,
//             hasWatched: true
//         },
//         {
//             title: "Interstellar",
//             rating: 4.0,
//             hasWatched: false
//         },
//         {
//             title: "Monty Python",
//             rating: 4.2,
//             hasWatched: true
//         },
//         {
//             title: "City of God",
//             rating: 5.0,
//             hasWatched: true,
//         }
//             ],
//         printList: function(){
//             this.movieList.forEach(function(film){
//                 if (film.hasWatched){
//                     console.log("You have watched \"" + film.title + '\" - ' + film.rating + ' stars');
//                 }
//                 else{
//                     console.log("You have not seen \"" + film.title + '\" - ' + film.rating + ' stars');
//                 }
//                                                 });
//                             }
//             }


// MANIPULANDO LIST ITEMS
var li = document.querySelectorAll('li');
console.log(li);
li.forEach(function(el){
    el.style.background = 'navy';
    el.style.color = 'white';
})

// MANIPULANDO HINO (p com id)
var hino = document.querySelector('#hino');
console.log(hino);

hino.style.borderColor = 'black';
hino.style.borderStyle = 'dashed';

