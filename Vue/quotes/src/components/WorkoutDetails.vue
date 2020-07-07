<template>
    <div class="details">
        <p>Workout #{{ details.id }} Details:</p>
        <p>{{ details.status }}</p>
        <p>M1: {{ details.primary }}</p>
        <p>M2: {{ details.secondary }}</p>
        <button @click="complete()">Click to Complete Workout</button>
    </div>
</template>

<script>
//import { eventBus } from '../main';

export default {
    props: {
        details: {
            id: Number,
            status: String,
            primary: String,
            secondary: String
        }
    },
    methods: {
        complete(){
            this.details.status = 'Completed';
        }
    }
    // created() {
    //     eventBus.$on('trainerChanged', (trainer) => {
    //         this.trainer = trainer;
    //     });
    // }
}
</script>

<style scoped>

</style>