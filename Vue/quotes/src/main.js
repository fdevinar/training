import Vue from 'vue'
import App from './App.vue'

import QuotesHeader from './components/shared/QuotesHeader.vue'
import QuotesFooter from './components/shared/QuotesFooter.vue'

Vue.component('quotes-header', QuotesHeader);
Vue.component('quotes-footer', QuotesFooter);

Vue.config.productionTip = false

//export const selectedBus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')

