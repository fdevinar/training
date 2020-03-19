
// GRAB HTML ELEMENTS
let list = $('ul');
let input = $('input');
let plus = $('#plus');
// let trash = $('span');
// let listItem = $('li');

// WRITE LIST ITEM ON INPUT: "ENTER"
input.keypress(function(e){
    if (e.keyCode === 13){
        list.append('<li><span><i class="fas fa-trash-alt"></i></span>' + input.val() + '</li>');
        input.val('');
    }
});

// HIDE AND DISPLAY TEXT INPUT
plus.on('click',function(){
    input.toggle(400);
});

// MARK AND UNMARK COMPLETED ITEMS
list.on('click','li',function(){
    $(this).toggleClass('marked');
});

// REMOVE TO-DO
list.on('click','li span',function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    // STOP TOGGLING CLASS MARKED
    event.stopPropagation();
});

// SHOW TRASH BIN ON LIST ITEM HOVER
// list.on('mouseenter','li',function(){
//     $(this).children().removeAttr('hidden');
// })

// list.on('mouseout','li',function(){
//     $(this).children().attr('hidden','true');
// })