<template>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <ul class="list-group">
                    <li class="list-group-item" :key="index" v-for="index in 5">
                        Server #{{ index }}
                    </li>
                </ul>
            </div>
            <!-- Server Details -->
            <server-details></server-details>


        </div>
</template>

<script>
export default {
    
}
</script>