
function addPlayer() {
    let main = document.createElement('main');
    main.textContent = value;
    console.log(main);
    document.body.appendChild(main);
}

const button = document.querySelector('button');
console.log(button);

let value = "Goleiro";
console.log(value);

button.addEventListener('click', addPlayer);


