<template>
    <li class="list">
        <p @click="selectWorkout()">Workout #{{ workout.id }}</p>
        <!-- <p>Status: {{ status }}</p> -->
    </li>
</template>

<script>
import { selectedBus } from '../main';

export default {

    // RECEBE O OBJETO WORKOUT (SELECTED) COMO PROPS PARA PASSAR ADIANTA USANDO O SELECTEDBUS
    props: ['workout']
    ,
    methods: {
        selectWorkout(){
            selectedBus.$emit('selected',this.workout);
        }
    }
}
</script>

<style scoped>
.list {
    background-color: ivory;
}

</style>