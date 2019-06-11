/*
function addPlayers(gol, i) {
    let main = document.createElement('main');
    main.textContent = gol[i].value;//gol_value;
    console.log(main);
    document.body.appendChild(main);
}

const buttons = document.querySelectorAll('button');
//console.log(button);

//let gol = document.getElementsByClassName('goleiro');
//console.log(gol);
//let gol_value = gol[0].value;
//console.log(gol_value

let joga = document.getElementsByClassName('jogador');
console.log(joga);
//let gol_value = gol[0].value;

//for(let i = 0; i < buttons.length ; i++) {
//buttons[i].addEventListener('click', addPlayers(gol, i));
//}
*/

function addPlayer(value) {
  let main = document.createElement('main');
  main.textContent = value;
  document.body.appendChild(main);
}


