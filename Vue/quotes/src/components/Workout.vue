<template>
<div class="workout">
    <div class="block">
        <ul>
                <!-- MANDA O EXERCICIO ESPECIFICO QUE FOI CLICADO (EX) PARA WORKOUT ITEM -->
                <workout-item v-for="ex in exercises" :key="ex.id"  :workout="ex">
                </workout-item>
        </ul>
    </div>

    <div class="block">
    <workout-details :workout="exercises">
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
            ]
        }
    },
    components: {
        'workout-item': WorkoutItem,
        'workout-details': WorkoutDetails
    },
    methods: {}
    
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
