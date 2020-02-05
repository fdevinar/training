var colors = document.querySelectorAll('.color');

// GENERATE RANDOM COLOR
function generateRandomColor(block){
    var red = Math.floor(Math.random()*255);
    var green = Math.floor(Math.random()*255);
    var blue = Math.floor(Math.random()*255);
    return ('rgb(' + red + ',' + green + ',' + blue + ')');
}

///////////////////////////////////////////////////////////////////////////

// CHOOSE DIFFICULTY

var diff = 'hard';
// grabRGB();
randomRgb = grabRGB();

var level = document.getElementsByClassName('level');

// HIGHLIGHT HARD AS DEFAULT DIFFICULTY
level[1].classList.add('chosen-diff');

/////// FIX THIS - randomRGB NOT CHANGING AFTER CHOSEN DIFF

// CHANGE DIFF CLICKING ON LEVEL
for (i=0; i<2; i++){
    level[i].addEventListener('click',function(){
        diff = this.getAttribute('value');
        this.classList.add('chosen-diff');
        // CHANGE HIGHLIGHT BASED ON LEVEL SELECTED
        if (diff === 'hard'){
            document.getElementById('easy').classList.remove('chosen-diff');
            // showOnHard();
            grabRGB();
            console.log(randomRgb);
        }
        if (diff === 'easy'){
            document.getElementById('hard').classList.remove('chosen-diff');
            hideOnEasy();
            grabRGB();
            console.log(randomRgb);
        }  
        })
                }      

// REMOVE BLOCKS BASED ON DIFF

function hideOnEasy(){
    for (i=3; i<6; i++){
        colors[i].setAttribute('hidden','true');
    }
}

// FIX THIS - CONFIGURE SHOW ON HARD

// function showOnHard(){
//     for (i=3; i<6; i++){
//         colors[i].setAttribute('hidden','true');
//     }
// }

///////////////////////////////////////////////////////////////////////////

// SET RGB COLOR TO BE GUESSED
// Grab H2 Element for guessed RGB
var h2rgb = document.getElementById('guessThisRgb');
// Grab RGB to be guessed, 0 to 5 - index for color blocks
function grabRGB(){
    if (diff === 'hard'){
        console.log('LOOP HARD');
        return Math.floor(Math.random() * colors.length);
    }
    if (diff === 'easy'){
        // 
        console.log('LOOP EASY');
        return (Math.floor(Math.random() * colors.length) -3);
    }
// Prints on screen the RGB to be guessed
h2rgb.textContent = colors[randomRgb].textContent;
}


///////////////////////////////////////////////////////////////////////////

// APPLY RANDOM COLOR TO BLOCK
for (i=0; i<colors.length; i++){
    var rgb = generateRandomColor(colors[i]);
    colors[i].style.background = rgb;
    colors[i].textContent = rgb;
    colors[i].classList.add('hide');  
};

// APPLY HIGHLIGHT TO BLOCKS WHEN MOUSE OVER
for (i=0; i<colors.length; i++){
    colors[i].addEventListener('mouseover',function(){
        this.classList.add('highlight');
    })
};
// REMOVE HIGHLIGHT FROM BLOCKS WHEN MOUSE OUT
for (i=0; i<colors.length; i++){
    colors[i].addEventListener('mouseout',function(){
        this.classList.remove('highlight');
    })
};


// CHECK IF GUESS IS RIGHT

var result = document.getElementById('result');

for (i=0; i<colors.length; i++){
    colors[i].addEventListener('click',function(){
        if ((randomRgb + 1) === Number(this.getAttribute('value'))){
            console.log('YOU GUESSED RIGHT!');
            result.innerHTML = '<strong>CORRECT!</strong>';
            // result.setAttribute('hidden','false');
            this.classList.remove('hide');
        }
        else{
            result.innerHTML = '<strong>WRONG!</strong>';
            // result.setAttribute('hidden','false');
        }
    })
}

