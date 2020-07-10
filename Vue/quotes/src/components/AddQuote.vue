<template>
<div>
    <p>Add Quote</p>
    <input type="text" name="quote">
    <button @click="addQuote">Add Quote</button>
</div>
</template>

<script>
import { quoteBus } from '../main';

export default {
    data: function() {
        return {
            quoteList: ['First Test Quote', 'Second Test Quote']
        }
    },
    methods: {
        addQuote() {
            quoteBus.$emit('quoteAdded',this.quoteList);
        }
    }
}
</script>