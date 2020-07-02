<template>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <ul class="list-group">
                    <li class="list-group-item" :key="index" v-for="index in 5">
                        Server #{{ index }}
                    </li>
                </ul>
            <server-details></server-details>
            </div>
        </div>
            <!-- Server Details -->

</template>

<script>
import ServerDetails from './ServerDetails.vue'

export default {
    components: {
        'server-details': ServerDetails
    }
    
}
</script>
