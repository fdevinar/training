<template>
    <div class="details">
        <h3>This is the Workout Details component</h3>
        <p> {{ workoutName }} </p>
    </div>
</template>

<script>
export default {
    props: ['workoutName']
    
}
</script>

<style scoped>
.details {
    background-color: crimson;
}

</style>