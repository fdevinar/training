<template>
  <div>
    <h1>{{ title }}</h1>
    <hr>
    <button class="btn btn-primary" @click="display = !display">Click Me</button>
    <hr>
    <transition name="fade">
      <p class="alert alert-info" v-show="display">Animate this paragraph by clicking the button</p>
    </transition>
   
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<script>
export default {
  data() {
    return {
      title: 'Animations',
      display: true
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-leave {
  /* opacity: 1; */
}
.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}


</style>
