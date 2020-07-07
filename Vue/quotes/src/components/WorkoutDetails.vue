<template>
    <div class="details">
        <h3>This is the Workout Details component</h3>
        <p> Workout Name: {{ workoutName }} </p>
        <button @click="resetName">Click to reset Workout Name Property</button>
        <p>Trainer: {{ trainer }}</p>

    </div>
</template>

<script>
import { eventBus } from '../main';

export default {
    props: {
        workoutName: String,
        trainer: String
    },
    methods: {
        resetName() {
            this.workoutName = 'Fika grande porra!'
            this.$emit('nameReset', this.workoutName);
        }
    },
    created() {
        eventBus.$on('trainerChanged', (trainer) => {
            this.trainer = trainer;
        })
    }
}
</script>

<style scoped>
.details {
    background-color: crimson;
    height: 150px;
}

</style>