//let set = document.getElementById('set');
let session = document.getElementById('session');
let btn = document.querySelector('button');

let exercises = [{
    name: 'Squat',
    reps: 10,
    sets: 3,
    weight: 20
}]

displaySession();

btn.addEventListener('click',() => {
    let form = document.querySelector('form');

    let name = document.querySelector('input[id="name"]').value;
    let reps = document.querySelector('input[id="reps"]').value;
    let sets = document.querySelector('input[id="sets"]').value;
    let weight = document.querySelector('input[id="weight"]').value;

    exercises.push({
        name: name,
        reps: Number(reps),
        sets: Number(sets),
        weight: Number(weight)
    })
    console.log('Exercise Added');
    displaySession();
});

function displaySession() {
    session.textContent = null;
    exercises.forEach((exercise) => {
        console.log(exercise);
        session.innerHTML += `<ul>
        <li><strong>${exercise.name}</strong></li>
        <li>Reps: ${exercise.reps}</li>
        <li>Sets: ${exercise.sets}</li>
        <li>${exercise.weight} kg</li>
        </ul>`
    });
}



