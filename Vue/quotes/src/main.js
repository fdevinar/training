import Vue from 'vue'
import App from './App.vue'
import ServerHeader from './components/ServerHeader.vue'
import ServerDetails from './components/ServerDetails.vue'
import ServerList from './components/ServerList.vue'
import ServerFooter from './components/ServerFooter.vue'


Vue.config.productionTip = false

Vue.component('server-header', ServerHeader);
Vue.component('server-details', ServerDetails);
Vue.component('server-list', ServerList);
Vue.component('server-footer', ServerFooter);

new Vue({
  render: h => h(App),
}).$mount('#app')
