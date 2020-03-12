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

let btn = $('button');

btn.click(function(){
    if (btn.text() === 'LIGHT MODE'){
        btn.text('DARK MODE');
    }
    else {
        btn.text('LIGHT MODE');
    }
    $('body').toggleClass('darkMode');
})

