<template>
    <div>
        <p>Quote List</p>
        <ul>
            <li v-for="quote in quoteList" :key="quote">
                {{ quote }}
            </li>
        </ul>
    </div>
</template>

<script>
import { quoteBus } from '../main';

export default {
    data: function() {
        return {
            quoteList: null
        }},
    created() {
        quoteBus.$on('quoteAdded', (quoteList) => {
            this.quoteList = quoteList;
        })
    }
}
</script>