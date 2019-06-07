
function addPlayer() {
    let main = document.createElement('main');
    main.textContent = gol_value;
    console.log(main);
    document.body.appendChild(main);
}

const buttons = document.querySelectorAll('button');
//console.log(button);

let gol = document.getElementsByClassName('goleiro');
console.log(gol);
let gol_value = gol[0].value;
//console.log(gol_value);

for(let i = 0; i < buttons.length ; i++) {
buttons[i].addEventListener('click', addPlayer);
}

