<template>
<div class="workout">
    <div class="block">
        <ul>
            <li v-for="ex in exercises" :key="ex.id" @click="displayDetails(ex.id)">
                
                
                <workout-item   :id="ex.id"
                                :status="ex.status"
                                >
                </workout-item>
            </li>
        </ul>
    </div>

    <!-- TODO: USE EVENT BUSES TO CHANGE SELECTED SERVER INSTEAD OF USING CURRENT EXERCISE AS DEFAULT -->

    <div class="block">
    <workout-details :details="exercises[currentExercise-1]">
    </workout-details>
    </div>

</div>
</template>

<script>
import WorkoutItem from './WorkoutItem.vue'
import WorkoutDetails from './WorkoutDetails.vue'

export default {
    data: function() {
        return {
            name: 'Treino',
            trainer: 'Fabricio',
            exercises: [
                {id: 1, status: 'Completed', primary: 'Shoulders', secondary: 'Biceps'},
                {id: 2, status: 'Completed', primary: 'Chest', secondary: 'Triceps'},
                {id: 3, status: 'To be Completed', primary: 'Back', secondary: 'Biceps'},
                {id: 4, status: 'To be Completed', primary: 'Shoulder', secondary: 'Legs'},
                {id: 5, status: 'To be Completed', primary: 'Chest', secondary: 'Triceps'}
            ],
            currentExercise: 1
        }
    },
    components: {
        'workout-item': WorkoutItem,
        'workout-details': WorkoutDetails
    },
    methods: {
        displayDetails(id) {
            this.currentExercise = id;
        }
    }
    
}
</script>

<style scoped>
.workout {
    background-color: bisque;
    display: flex;
    font-size: 1.2rem;
}
.block {
    width: 100%;
    border: 3px solid black;
}


li {
    list-style: none;
}


</style>
