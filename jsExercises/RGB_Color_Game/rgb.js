var colors = document.querySelectorAll('.color');

for (i=0; i<colors.length; i++){
    var rgb = generateRandomColor(colors[i]);
    colors[i].style.background = rgb;
    colors[i].textContent = rgb;   
}


// console.log(generateRandomColor(colors[0]));

function generateRandomColor(block){
    var red = Math.floor(Math.random()*255);
    var green = Math.floor(Math.random()*255);
    var blue = Math.floor(Math.random()*255);
    return ('rgb(' + red + ',' + green + ',' + blue + ')');
}

