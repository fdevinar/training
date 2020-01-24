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


//*************** SCORE KEEPER GAME**************//

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
    disableScore();
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
    console.log('Score Limit: ' + scoreLimit);
    scoreP2 += 1;
    disableScore();
    updateP2();
    declareWinner(scoreP1,scoreP2);
});

//******************** LIMIT SCORE *******************/

var scoreLimit = 5;
console.log(scoreLimit);

var ElemScoreLimit = document.querySelector('#score-limit');
var BtnScore = document.querySelector('#score');

BtnScore.setAttribute('value',scoreLimit);
ElemScoreLimit.textContent=BtnScore.getAttribute('value');

BtnScore.addEventListener('change', function(){
    BtnScore.setAttribute('value',this.value);
    ElemScoreLimit.innerHTML=BtnScore.getAttribute('value');
    scoreLimit = Number(this.value);
    console.log('Score Limit: ' + scoreLimit);
})

function disableScore(){
    document.getElementById('score').setAttribute('disabled',true);
}

//******************* DECLARE WINNER *****************/

function declareWinner(scoreP1,scoreP2){
    var isWinner = false;
    if (scoreP1 === scoreLimit){
        ElemScoreP1.classList.add ('winner');
        isWinner = true;
    }
    else if (scoreP2 === scoreLimit){
        ElemScoreP2.classList.add ('winner');
        isWinner = true;
    }
    if (isWinner){
        ElemBtnP1.setAttribute('disabled',true);
        ElemBtnP2.setAttribute('disabled',true);
    }
}

//******************** RESET ************************/

var ElemBtnReset = document.getElementById('btn-reset');

ElemBtnReset.addEventListener('click',function(){
    scoreP1 = 0;
    updateP1();
    ElemScoreP1.classList.remove ('winner');
    scoreP2 = 0;
    updateP2();
    ElemScoreP2.classList.remove ('winner');
    ElemBtnP1.removeAttribute('disabled');
    ElemBtnP2.removeAttribute('disabled');
    document.getElementById('score').removeAttribute('disabled');
});


var lis = document.querySelectorAll('li');

for (i=0; i<lis.length; i++){
    lis[i].addEventListener('mouseover',function(){
        this.classList.add('lisChange');
    });
    lis[i].addEventListener('mouseout',function(){
        this.classList.remove('lisChange');
    });
}