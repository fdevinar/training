/*
function createParagraph() {
  let main = document.createElement('main');
  main.textContent = 'You clicked the button!';
  document.body.appendChild(main);
}

const buttons = document.querySelectorAll('button');

for(let i = 0; i < buttons.length ; i++) {
  buttons[i].addEventListener('click', createParagraph);
}
*/

function addPlayer(name) {
    let player = document.createElement('p');
    player.textContent = name;
    document.body.appendChild(player);
}

const buttons = document.querySelectorAll('button');
