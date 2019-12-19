
var todos = [];
window.setTimeout(function() {
    while (action !== "quit"){
        var action = prompt("What would you like to do?");
        if (action === "new"){
            todos.push(prompt("Please insert new To-Do:"));         
        }
        else if (action === "list"){
            console.log(todos);
        }

    }
}, 500);



//TO-DO LIST 
//new - add a toDo
//list - list all toDos
//quit - quit app


// ** DEFINICAO DO ARRAY **

// let array = ['A','B','C','D']

// ** CHAMANDO FOR EACH COM FUNCAO ANONIMA **
// array.forEach(function(print)
// {
//     console.log(print)
// })

// ** OU DECLARANDO FUNCAO ANTES **

// function print(element){
//     console.log(element);
// }

// array.forEach(print);



