
// GRAB HTML ELEMENTS
let list = $('ul');
let input = $('input');

// WRITE LI ON INPUT ENTER
input.keypress(function(e){
    console.log(input.val());
    if (e.keyCode === 13){
        list.append('<li>' + input.val() + '</li>');
        input.val('');
    }
});



