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


// // MANIPULANDO LIST ITEMS
// var li = document.querySelectorAll('li');
// console.log(li);
// li.forEach(function(el){
//     el.style.color = 'black';
// })

// MANIPULANDO HINO (p com id)
// var hino = document.querySelector('#hino');

// hino.style.backgroundColor = 'green';
// hino.style.borderColor = 'black';
// hino.style.borderStyle = 'solid';

// hino.innerHTML = hino.innerHTML + ' Para o que der e vier!';

// TOGGLE DARK 

// var body = document.querySelector('body');

// document.querySelector('button').addEventListener("click",function toggleDarkMode(){
//         body.classList.toggle('dark');
//     });

// // EXPERIMENT WITH LIs

// var lis = document.querySelectorAll('li');

// for (i=0; i<lis.length; i++){
//     lis[i].addEventListener('click',function(){
//         console.log(this);
//         this.classList.toggle('yellow');
//     });
// }





//*************** PLAYER 1 **********************/

// Initialize P1 Score
var scoreP1 = 0;
// Grab HTML Score Element for P1
var ElemScoreP1 = document.querySelector('#score-p1');

// Update P1 Score on HTML and JS Variable
function updateP1 (){
    ElemScoreP1.setAttribute('value',scoreP1);
    ElemScoreP1.textContent = ElemScoreP1.getAttribute('value');
}
updateP1();

// Score P1 Button

var ElemBtnP1 = document.querySelector('#btn-p1');

ElemBtnP1.addEventListener('click',function(){
    scoreP1 += 1;
    updateP1();
    declareWinner(scoreP1,scoreP2);
});


//*************** PLAYER 2 **********************/

// Initialize P2 Score
var scoreP2 = 0;
// Grab HTML Score Element for P2
var ElemScoreP2 = document.querySelector('#score-p2');

// Update P2 Score on HTML and JS Variable
function updateP2 (){
    ElemScoreP2.setAttribute('value',scoreP2);
    ElemScoreP2.textContent = ElemScoreP2.getAttribute('value');
}
updateP2();

// Score P2 Button

var ElemBtnP2 = document.querySelector('#btn-p2');

ElemBtnP2.addEventListener('click',function(){
    scoreP2 += 1;
    updateP2();
    declareWinner(scoreP1,scoreP2);
});



//******************** LIMIT SCORE *******************/

var scoreLimit = 5;

var ElemScoreLimit = document.querySelector('#score-limit');
var BtnScore = document.querySelector('#score');

BtnScore.setAttribute('value',scoreLimit);
ElemScoreLimit.textContent=BtnScore.getAttribute('value');

BtnScore.addEventListener('click', function(){
    BtnScore.setAttribute('value',this.value);
    ElemScoreLimit.textContent=BtnScore.getAttribute('value');
    
    
    // CONFERIR - NAO ESTA ATUALIZANDO O scoreLimit
    scoreLimit = this.value;

})

//******************* DECLARE WINNER *****************/

function declareWinner(scoreP1,scoreP2){
    var winner = false;
    if (scoreP1 === scoreLimit){
        ElemScoreP1.style.color = 'green';
        winner = true;
    }
    else if (scoreP2 === scoreLimit){
        ElemScoreP2.style.color = 'green';
        winner = true;
    }
    if (winner){
        ElemBtnP1.setAttribute('disabled',true);
        ElemBtnP2.setAttribute('disabled',true);
    }
}

