<template>
    <div>
        <p>Quote List</p>
        <ul>
            <li v-for="quote in quotes" :key="quote" @click="remove(quote)">
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
    },
    methods: {
        remove(quote) {
            let index = this.quotes.indexOf(quote);
            this.quotes.splice(index,1);
        }
    }
}
</script>