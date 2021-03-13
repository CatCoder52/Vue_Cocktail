import Vue from 'vue';
import VueTailwind from 'vue-tailwind/dist/full';
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import axios from './plugins/interceptor';
import events from './plugins/events';
import './assets/tailwind.css';
import VueTailwindSettings from './plugins/vue-tailwind';
import 'tailwindcss/dist/tailwind.css';
import router from './router/index';
import App from './App.vue';

Vue.use(VueTailwind, VueTailwindSettings);
Vue.prototype.$http = axios;
Vue.prototype.$bus = events;
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
