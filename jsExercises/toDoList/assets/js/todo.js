// GRAB HTML ELEMENTS
let list = $('ul');
let input = $('input');
let plus = $('#plus');

// WRITE LIST ITEM ON INPUT: "ENTER"
input.keypress(function(event){
    // if (event.keyCode === 13){ -- Use Which instead of keyCode, Which is normalized by jQuery
    if (event.which === 13){
        list.append('<li><span class="slide"><i class="fas fa-trash-alt"></i></span>' + input.val() + '</li>');
        input.val('');
    }
});

// HIDE AND DISPLAY TEXT INPUT
plus.on('click',function(){
    input.fadeToggle(400); // or toggle
});

// MARK AND UNMARK COMPLETED ITEMS
list.on('click','li',function(){
    $(this).toggleClass('marked');
});

// REMOVE TO-DO
list.on('click','span',function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    // STOP TOGGLING CLASS MARKED
    event.stopPropagation();
});

