<template>
    <div>
        <p>Quote List</p>
        <ul>
            <li v-for="quote in quotes" :key="quote">
                {{ quote }}
            </li>
        </ul>
    </div>
</template>

<script>
// import { quoteBus } from '../main';

export default {
    props: {
        'quotes': Array
    }
}
</script>