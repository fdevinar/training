$("input:checkbox").click(function() {
var bol = $("input:checkbox:checked").length >= 10;
$("input:checkbox").not(":checked").attr("disabled",bol);
});


/*
function addPlayer(value) {
  let li = document.createElement('li');
  li.textContent = value;
  let sel = document.getElementById('selecao');
  sel.appendChild(li);
}

function addGoleiro(value) {
  let li = document.createElement('li');
  li.textContent = value;
  let gol = document.getElementById('goleiro1');
  console.log(gol);
  //var item = document.getElementById('goleiro1').childNodes[0];
  //item.replaceChild(li, item.childNodes[0]);
  //gol.replaceChild(gol, li
  gol.appendChild(li);
  let number = document.querySelectorAll('goleiro1');
  console.log(number);

}


function addZagueiro(value) {
  let li = document.createElement('li');
  li.textContent = value;
  let zag = document.getElementsByClassName('zagueiros');
  zag[0].appendChild(li);
}

function addLateral(value) {
  let li = document.createElement('li');
  li.textContent = value;
  let lat = document.getElementsByClassName('laterais');
  lat[0].appendChild(li);
}

function addMeia(value) {
  let li = document.createElement('li');
  li.textContent = value;
  let mei = document.getElementsByClassName('meias');
  mei[0].appendChild(li);
}

function addAtacante(value) {
  let li = document.createElement('li');
  li.textContent = value;
  let ata = document.getElementsByClassName('atacantes');
  ata[0].appendChild(li);
}

*/
