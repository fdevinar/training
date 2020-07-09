<template>

<div>

<button @click="selectedComponent = 'endurance'">Endurance</button>
<button @click="selectedComponent = 'intensity'">Intensity</button>
<button @click="selectedComponent = 'strength'">Strength</button>


<component :is="selectedComponent">
    <p>Sending this Slot to component</p>
</component>

<!-- <endurance v-if="selectedComponent === 'endurance'">
<p>This work is targetted to marathon runners and triathletes.</p>
</endurance>

<intensity v-if="selectedComponent === 'intensity'">
<p>This work is targetted to combat sports practitioners.</p>
</intensity>

<strength v-if="selectedComponent === 'strength'">
<p>This work is targetted to powerlifters and strongman athletes.</p>
</strength> -->

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
        <h3>This HTML h3 is the default slot</h3>
        <h2 slot="h2">And this h2 is the named slot</h2>
    </workout-details>
    </div>

</div>

</div>
</template>

<script>
import WorkoutItem from './WorkoutItem.vue'
import WorkoutDetails from './WorkoutDetails.vue'
import Endurance from './Endurance.vue'
import Intensity from './Intensity.vue'
import Strength from './Strength.vue'

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
            selectedComponent: 'endurance'
        }
    },
    components: {
        'workout-item': WorkoutItem,
        'workout-details': WorkoutDetails,
        'endurance': Endurance,
        'intensity': Intensity,
        'strength': Strength
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
