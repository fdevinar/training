import Vue from 'vue'
import App from './App.vue'

import QuotesHeader from './components/shared/QuotesHeader.vue'
import QuotesFooter from './components/shared/QuotesFooter.vue'

Vue.component('quotes-header', QuotesHeader);
Vue.component('quotes-footer', QuotesFooter);

Vue.config.productionTip = false

Vue.filter('to-upper-case', (value) => {
    return value.toUpperCase();
  });
Vue.filter('count', function(text){
  return text + text.length;
})

export const quoteBus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')

