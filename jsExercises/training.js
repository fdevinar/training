var movies = [
    {
        title: "Scarface",
        rating: 4.5,
        hasWatched: true
    },
    {
        title: "Godfather",
        rating: 5.0,
        hasWatched: true
    },
    {
        title: "Interstellar",
        rating: 4.0,
        hasWatched: false
    },
    {
        title: "Monty Python",
        rating: 4.2,
        hasWatched: true
    }
]

for (i=0; i<movies.length; i++){
    if (movies[i].hasWatched){
        console.log("You have watched \"" + movies[i].title + '\" - ' + movies[i].rating + ' stars');
    }
    else {
        console.log("You have not seen \"" + movies[i].title + '\" - ' + movies[i].rating + ' stars');
    }
}