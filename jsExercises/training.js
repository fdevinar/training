
var revArray = ['A','B','C','D','E','F'];

printReverse(revArray);

function printReverse(array){
    for (i=array.length-1; i>=0; i--){
        console.log(array[i]);
    }
}

var uniArray = ['A','A','A','A','A','A'];

console.log(isUniform(uniArray));

function isUniform(array){
    var comp = array[0];
    for (i=1; i<array.length; i++){
        if (comp !== array[i]){
            return false;     }
                                  }
        return true;
                        }

var numArray = [1,2,3,-5,5];

sumArray(numArray);

function sumArray(array){
    var sum = 0;
    array.forEach(function(number){
        sum += number;  
    })
    // for (i=0; i<array.length; i++){
    //     sum += array[i];
    // }
    console.log(sum);
}

var numaxArray = [10,100,1000];

max(numaxArray);

function max(array){
    var maximum = array[0];

    array.forEach(function(number){
        if (maximum < number){
            maximum = number;
        }        
    })

    // for (i=0; i<array.length; i++){
    //     if (maximum < array[i]){
    //         maximum = array[i];
    //     }
    // }
    console.log(maximum);
}




// var todos = [];
// window.setTimeout(function() {
//     while (action !== "quit"){
//         var action = prompt("What would you like to do?");
//         if (action === "new"){
//             todos.push(prompt("Please insert new To-Do:"));         
//         }
//         else if (action === "list"){
//             console.log("**********");
//             todos.forEach(listToDos);
//             console.log("**********");
//         }
//         else if (action === "delete"){
//             var removedIndex = prompt("What index should be removed?");
//             todos.splice(removedIndex, 1);
//         }

//     }
// }, 500);

// function listToDos(toDo, index){
//     console.log(index + ": " + toDo);
// }

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



