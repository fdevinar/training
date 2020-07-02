import Vue from 'vue'
import App from './App.vue'
import ServerHeader from './components/shared/ServerHeader.vue'
import ServerFooter from './components/shared/ServerFooter.vue'

// import ServerDetails from './components/ServerDetails.vue'
// import ServerList from './components/ServerList.vue'



Vue.config.productionTip = false

Vue.component('server-header', ServerHeader);
Vue.component('server-footer', ServerFooter);

// Vue.component('server-details', ServerDetails);
// Vue.component('server-list', ServerList);

new Vue({
  render: h => h(App),
}).$mount('#app')
