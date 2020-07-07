<template>
    <div class="list">
        <p>Workout #{{ id }}</p>
        <!-- <p>Status: {{ status }}</p> -->
    </div>
</template>

<script>
//import { eventBus } from '../main';

export default {
    props: {
        id: Number,
        status: String
    },
    methods: {}
}
</script>

<style scoped>
.list {
    background-color: ivory;
}

</style>