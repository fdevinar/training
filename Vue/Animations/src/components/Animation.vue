<template>
  <div>
    <h1 class="animate__animated animate__tada">{{ title }}</h1>
    <hr>
    <button class="btn btn-primary" @click="display = !display">Click Me</button>
    <hr>
    <transition appear name="fade">
      <p class="alert alert-success" v-show="display">TRANSITION this paragraph by clicking the button</p>
    </transition>
    <!-- Use TYPE to dictate which length Vue will look at to determine when transition is over -->
    <transition
      name="slide"
      type="animation"
      appear>
        <p class="alert alert-primary" v-show="display">ANIMATE this paragraph by clicking the button</p>
    </transition>
    <transition appear
      enter-active-class="animate__animated animate__bounceInLeft"
      leave-active-class="animate__animated animate__bounceOutDown">
    <h3 v-show="display">Bounce In Left - Bounce Out Down</h3>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Animation',
  props: {
    msg: String
  }
}
</script>

<script>
export default {
  data() {
    return {
      title: 'Animations!',
      display: true
    }
  },
  methods: {
  }
}
</script>

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
  font-weight: 700;
}
a {
  color: #42b983;
}
/* Configuring Fade animation */
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
/* Configuring Slide animation */
.slide-enter {
  /* transform: translateY(20px); */
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity 500ms;
}
.slide-leave {

}
.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 3s;
  opacity: 0;
}
@keyframes slide-in {
  from {
    transform: translateY(50px);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(50px);
  }
}
.animate__animated.animate__bounceOutDown {
  --animate-duration: 1900ms;
}

</style>
