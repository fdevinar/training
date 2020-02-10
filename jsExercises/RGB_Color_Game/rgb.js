// GRAB COLOR BLOCKS HTML ELEMENT
var colors = document.querySelectorAll('.color');

// GENERATE RANDOM COLOR
function generateRandomColor(block){
    var red = Math.floor(Math.random()*255);
    var green = Math.floor(Math.random()*255);
    var blue = Math.floor(Math.random()*255);
    return ('rgb(' + red + ', ' + green + ', ' + blue + ')');
}

// CHOOSE DIFFICULTY AND INITIATE PARAMETERS
var diff = 'hard';
var blockNum = 6;
generateHardBlocks();
randomRgb = grabRGB();
var victory = false;

// HIGHLIGHT HARD AS DEFAULT DIFFICULTY
var level = document.getElementsByClassName('level');
level[1].classList.add('chosen-diff');

// GRAB H2 ELEMENT FOR GUESSED RGB
var h2rgb = document.getElementById('guessThisRgb');
// DISPLAY GUESSED RGB CODE ON H2
h2rgb.textContent = colors[randomRgb].textContent;

// CHANGE DIFF CLICKING ON LEVEL
for (i=0; i<2; i++){
    level[i].addEventListener('click',function(){
        diff = this.getAttribute('value');
        this.classList.add('chosen-diff');
        // CHANGE HIGHLIGHT BASED ON LEVEL SELECTED
        if (diff === 'hard'){
            document.getElementById('easy').classList.remove('chosen-diff');
            randomRgb = grabRGB();
            blockNum = 6;
            generateHardBlocks();
            showOnHard();
            
            // Prints on screen the RGB to be guessed
            h2rgb.textContent = colors[randomRgb].textContent;
            mainNav[0].style.backgroundColor = 'slategray';
            result.innerHTML = 'PICK A COLOR:';
        }
        if (diff === 'easy'){
            document.getElementById('hard').classList.remove('chosen-diff');
            randomRgb = grabRGB();
            hideOnEasy();
            blockNum = 3;
            generateEasyBlocks();
            
            // Prints on screen the RGB to be guessed
            h2rgb.textContent = colors[randomRgb].textContent;
            mainNav[0].style.backgroundColor = 'slategray';
            result.innerHTML = 'PICK A COLOR:';
        }  
        })
                }      

// REMOVE BLOCKS BASED ON DIFF
function hideOnEasy(){
    for (i=3; i<6; i++){
        colors[i].setAttribute('hidden','true');
    }
}

function showOnHard(){
    for (i=3; i<6; i++){
        colors[i].removeAttribute('hidden');
    }
}

// SET RGB COLOR TO BE GUESSED
// Grab RGB to be guessed, 0 to 5 - index for color blocks
function grabRGB(){
    if (diff === 'hard'){
        return Math.floor(Math.random() * 6 );
    }
    if (diff === 'easy'){
        
        return Math.floor(Math.random() * 3 );
    }
}

// APPLY RANDOM COLOR TO BLOCK
// EASY MODE
function generateEasyBlocks(){
for (i=0; i<3; i++){
    var rgb = generateRandomColor(colors[i]);
    colors[i].style.backgroundColor = rgb;
    colors[i].textContent = rgb;
    colors[i].classList.add('hide');  
}};
// HARD MODE
function generateHardBlocks(){
    for (i=0; i<6; i++){
        var rgb = generateRandomColor(colors[i]);
        colors[i].style.backgroundColor = rgb;
        colors[i].textContent = rgb;
        colors[i].classList.add('hide');
}};

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

// GRAB RESULT ELEMENT
var result = document.getElementById('result');

// GRAB MAIN NAV COLOR
var mainNav = document.getElementsByClassName('main-nav');

// ADD EVENT TO EACH BLOCK - CHECKING IF CORRECT
for (i=0; i<colors.length; i++){
    colors[i].addEventListener('click',function(){
        if ((randomRgb + 1) === Number(this.getAttribute('value'))){
            result.innerHTML = '<strong>CORRECT!</strong>';
            this.classList.remove('hide');
            mainNav[0].style.backgroundColor = h2rgb.textContent;
            victory = true;
            correctBlocks();
        }
        else{
            result.innerHTML = '<strong>WRONG!</strong>';
            victory = false;
            this.style.backgroundColor = 'rgb(30, 30, 30)';
        }
    })
}

//FIX - CHANGE ALL BLOCKS TO CORRECT COLOR
//CHANGE ALL BLOCKS TO CORRECT COLOR

function correctBlocks(){
    if (victory){
        if (diff === 'easy'){
            for (i=0; i<3; i++){
                colors[i].style.backgroundColor = h2rgb.textContent;
            }
        }
        else if (diff === 'hard') {
            for (i=0; i<6; i++){
                colors[i].style.backgroundColor = h2rgb.textContent;
            }
        }
        }
    };

// REFRESH COLORS
document.getElementById('new').addEventListener('click',function(){
    if (diff === 'hard'){
        randomRgb = grabRGB();
        generateHardBlocks();
        h2rgb.textContent = colors[randomRgb].textContent;
        mainNav[0].style.backgroundColor = 'slategray';
        result.innerHTML = 'PICK A COLOR:';
    }
    else {
        randomRgb = grabRGB();
        generateEasyBlocks();
        h2rgb.textContent = colors[randomRgb].textContent;
        mainNav[0].style.backgroundColor = 'slategray';
        result.innerHTML = 'PICK A COLOR:';
    }
});
