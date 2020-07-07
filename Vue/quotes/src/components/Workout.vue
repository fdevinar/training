<template>
<div class="workout">
    <workout-header></workout-header>

    <h1>This is the Workout component! Current Workout is: {{ name }}</h1>

    <button @click="changeWorkout">Click to change Workout</button>

    <workout-details    :workoutName="name"
                        :trainer="trainer"
                        @nameReset="name = $event">
    </workout-details>
    <workout-edit :trainer="trainer"></workout-edit>

    <workout-footer></workout-footer>
</div>
</template>

<script>
import WorkoutDetails from './WorkoutDetails.vue'
import WorkoutEdit from './WorkoutEdit.vue'

export default {
    data: function() {
        return {
            name: 'Treinao Monstro',
            trainer: 'Fabrigol'
        }
    },
    components: {
        'workout-details': WorkoutDetails,
        'workout-edit': WorkoutEdit
    },
    methods: {
        changeWorkout() {
            this.name = 'Ombrera buscando!'
        }
    }
    
}
</script>

<style scoped>
.workout {
    background-color: aqua;
}

</style>
