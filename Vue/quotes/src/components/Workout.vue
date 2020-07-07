<template>
<div class="workout">
    <workout-header></workout-header>

    <h1>This is the Workout component!</h1>

    <workout-details :workoutName="name"></workout-details>
    <workout-edit></workout-edit>

    <workout-footer></workout-footer>
</div>
</template>

<script>
import WorkoutDetails from './WorkoutDetails.vue'
import WorkoutEdit from './WorkoutEdit.vue'

export default {
    data: function() {
        return {
            name: 'Treinao Monstro'
        }
    },
    components: {
        'workout-details': WorkoutDetails,
        'workout-edit': WorkoutEdit
    }
    
}
</script>

<style scoped>
.workout {
    background-color: aqua;
}

</style>
