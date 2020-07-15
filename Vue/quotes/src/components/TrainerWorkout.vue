<template>
    <div>
        <div>
            <label for="trainer">Trainer Name</label>
            <input type="text" id="trainer" v-model="data.trainer">
        </div>

        <div>
            <label for="name">Workout Name</label>
            <input type="text" id="name" v-model="data.name">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: Object
    }
    
}
</script>