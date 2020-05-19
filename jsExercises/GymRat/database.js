class Workout {
    name: String,
    trainer: String,
    sessions: Array
};

class Session {
    name: String,
    exercises: Array,
    day: String // optional
};

class Exercise {
    name: String,
    reps: Number,
    sets: Number,
    weight: Number,
    extra: String,
    muscle: String // optional
}

