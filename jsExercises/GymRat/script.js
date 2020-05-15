
let set = document.getElementById('set');

let exercise = {
    name: 'Squat',
    reps: 10,
    sets: 3,
    weight: 20
}

function setExercise(exercise) {
    return `<strong>${exercise.name}</strong>: ${exercise.reps} reps of ${exercise.sets} sets using ${exercise.weight}kg`
}

set.innerHTML = '<p>' + setExercise(exercise) + '</p>';