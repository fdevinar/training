
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
        // else if (action === "print"){
        //     createPara();
        // }
    }
}, 500);

// function createPara () {
//     let para = document.getElementById("p");
//     let print = document.createTextNode("txt");
//     para.appendChild(print);
// }


//TO-DO LIST 
//new - add a toDo
//list - list all toDos
//quit - quit app



