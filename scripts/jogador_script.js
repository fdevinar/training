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

function addPlayer() {
    let main = document.createElement('main');
    main.textContent = 'JogadorX';
    document.body.appendChild(main);
    console.log(main)
    //removeEventListener('click', addPlayer())
}

const buttons = document.querySelector('button');

console.log(buttons)

//for(let i = 0; i < buttons.length ; i++) {
buttons.addEventListener('click', addPlayer());
//}


