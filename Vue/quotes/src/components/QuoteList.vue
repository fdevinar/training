<template>
    <div>
        <p>Quote List</p>
        <ul class="quote-list">
            <li class="quote" v-for="quote in quotes" :key="quote" @click="remove(quote)">
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

<style scoped>
.quote-list {
    display: flex;
}
.quote {
    width: 180px;
    border: 1px solid black;
    margin: 10px;
    border-radius: 10px;
    background-color: beige;
}
</style>