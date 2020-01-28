var colors = document.querySelectorAll('.color');

// GENERATE RANDOM COLOR
function generateRandomColor(block){
    var red = Math.floor(Math.random()*255);
    var green = Math.floor(Math.random()*255);
    var blue = Math.floor(Math.random()*255);
    return ('rgb(' + red + ',' + green + ',' + blue + ')');
}

// APPLY RANDOM COLOR TO BLOCK
for (i=0; i<colors.length; i++){
    var rgb = generateRandomColor(colors[i]);
    colors[i].style.background = rgb;
    colors[i].textContent = rgb;   
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

// SET RGB COLOR TO BE GUESSED
// Grab H2 Element for guessed RGB
var h2rgb = document.getElementById('guessThisRgb');
// Grab RGB to be guessed, 0 to 5 - index for color blocks 
var randomRgb = Math.floor(Math.random() * colors.length);
// Prints on screen the RGB to be guessed
h2rgb.textContent = colors[randomRgb].textContent;


