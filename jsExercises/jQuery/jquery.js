// $('li').css({
//     backgroundColor: 'navy',
//     color: 'cyan'
// });

// let mcdonalds = {
//     'background-color': 'yellow',
//     'color': 'red',
//     'border': '2px solid black'
// };


// $('div').css('background','purple');
// $('.highlight').css('width','200px');
// $('#third').css('border','3px solid orange');
// $('div:first').css('color','cyan');

// $('.button').click(addClass('darkMode'));

// ! BUTTON TOGGLES DARK/LIGHT MODE

let btn = $('button');
btn.click(function(){
    if (btn.text() === 'LIGHT MODE'){
        btn.text('DARK MODE');
    }
    else {
        btn.text('LIGHT MODE');
    }
    $('body').toggleClass('darkMode');
});

// ! PARAGRAPH CLICK CHANGING COLOR

let p = $('p');
p.click(function(){
    $(this).css('background','cyan');
});

// ! KEYPRESS ON INPUT SAMPLE

let input = $('input[type="text"]');
input.keypress(function(e){
    console.log(input.val());
    // keyCode 13 is pressing Enter
    if (e.keyCode === 13){
        alert(input.val());
    }
});

// ! ON -> EVENT HANDLER

$('h1').on('click',function(){
    $(this).css('color','green');
});

// ! FADE DIV EVENT

let fade = $('.fade');

fade.on('click', function(){
    // USING CALLBACK FUNCTION TO ALERT FADED ONLY AFTER FADE COMPLETE
    $(this).fadeOut(1000,function(){
        alert('FADED!');
        // REMOVING FROM DOM
        $(this).remove();
    });
});

// ! SLIDE DOWN EVENT

let slide = $('#slide');

slide.on('click',function(){
    $(this).slideUp();
})

