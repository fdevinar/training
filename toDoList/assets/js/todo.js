// alert('CONNECTED!');

let list = $('ul');
let input = $('input');

input.keypress(function(e){
    console.log(input.val());
    if (e.keyCode === 13){
        list.append('<li>' + input.val() + '</li>');
        input.val('');
    }
});






// let input = $('input[type="text"]');
// input.keypress(function(e){
//     console.log(input.val());
//     // keyCode 13 is pressing Enter
//     if (e.keyCode === 13){
//         alert(input.val());
//     }
// });