
// GRAB HTML ELEMENTS
let list = $('ul');
let input = $('input');
let plus = $('i');
let listItem = $('li');

// WRITE LIST ITEM ON INPUT: "ENTER"
input.keypress(function(e){
    if (e.keyCode === 13){
        list.append('<li>' + input.val() + '</li>');
        input.val('');
    }
});

// HIDE AND DISPLAY TEXT INPUT
plus.on('click',function(){
    input.toggle(400);
});

// MARK AND UNMARK COMPLETED ITEMS
listItem.on('click',function(){
    $(this).toggleClass('line-through');
});