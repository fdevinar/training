import Vue from 'vue'
import App from './App.vue'

import WorkoutHeader from './components/shared/WorkoutHeader.vue'
import WorkoutFooter from './components/shared/WorkoutFooter.vue'

Vue.component('workout-header', WorkoutHeader);
Vue.component('workout-footer', WorkoutFooter);

Vue.config.productionTip = false

export const eventBus = new Vue();


new Vue({
  render: h => h(App),
}).$mount('#app')

