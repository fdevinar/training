<template>
<div>
    <p>Add Quote</p>
    <input type="text" v-model="quote">
    <button @click="addQuote()">Add Quote</button>
</div>
</template>

<script>
import { quoteBus } from '../main';

export default {
    data() {
        return {
            quote: ''
        }
    },
    methods: {
        addQuote() {
            quoteBus.$emit('quoteAdded',this.quote);
            this.quote = '';
        }
    }
}
</script>