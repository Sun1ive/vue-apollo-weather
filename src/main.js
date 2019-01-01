import 'vuetify/dist/vuetify.min.css';
import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify';
import router from './router';

import apolloProvider from './apollo';

Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
  router,
  apolloProvider,
  render: h => h(App)
}).$mount('#app');
