<template>
    <div class="edit">
        <h3>This is Workout Edit component</h3>
        <p>Trainer is {{ trainer }}</p>
        <button @click="changeTrainer">Change Trainer</button>
    </div>
</template>

<script>
import { eventBus } from '../main';

export default {
    props: {
        trainer: String
    },
    methods: {
        changeTrainer() {
            this.trainer = 'Fabricio';
            eventBus.$emit('trainerChanged', this.trainer);
        }
    }
    
}
</script>

<style scoped>
.edit {
    background-color: yellow;
    height: 150px;
}
</style>