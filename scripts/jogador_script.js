function addPlayer(value) {
  let li = document.createElement('li');
  li.textContent = value;
  let sel = document.getElementById('selecao');
  sel.appendChild(li);
}


