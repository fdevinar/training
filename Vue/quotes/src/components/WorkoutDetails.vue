<template>
    <div class="details" v-if="selected">
        <p>Workout #{{ selected.id }} Details:</p>
        <p>{{ selected.status }}</p>
        <p>M1: {{ selected.primary }}</p>
        <p>M2: {{ selected.secondary }}</p>
        <button @click="complete()">Click to Complete Workout</button>
    </div>
    <div v-else>
        <p>No Workout Selected</p>
    </div>
</template>

<script>
import { selectedBus } from '../main';

export default {
    data: function() {
        return {
            selected: null
        }
    }
    ,
    methods: {
        complete(){
            this.selected.status = 'Completed';
        }
    },
    created() {
        // RECEBE O OBJETO WORKOUT E SETA COMO SELECTED(O OBJETO INTEIRO WORKOUT)
        selectedBus.$on('selected', (workout) => {
            this.selected = workout;
        });
    }
}
</script>

<style scoped>

</style>