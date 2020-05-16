
let set = document.getElementById('set');
let session = document.getElementById('session');

let exercise = [{
    name: 'Squat',
    reps: 10,
    sets: 3,
    weight: 20
}]



let btn = document.querySelector('button');
btn.addEventListener('click',() => {
    let form = document.querySelector('form');

    exercise.push({
        name: form.elements[0].getAttribute('value'),
        reps: Number(form.elements[1].getAttribute('value')),
        sets: Number(form.elements[2].getAttribute('value')),
        weight: Number(form.elements[3].getAttribute('value'))
    })

    console.log(exercise);

})