<template>
    <div>
        <p>{{ progress }}/10 Quotes</p>
        <div class="bar full">
            <div class="bar progress" :style="{width: this.barWidth}">.</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {'progress': Number},
    computed: {
        barWidth() {
            return this.progress * 10 + '%';
    }
    }
}
</script>

<style>
.bar {
height: 50px;
max-width: 100%;
color: transparent;
border-radius: 12px;
box-sizing: border-box;
}
.progress {
background-color: navy;
transition: 1s;
}
.full {
background-color: grey;
margin: 10px;
}
</style>
