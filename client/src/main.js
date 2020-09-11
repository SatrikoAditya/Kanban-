import Vue from 'vue';
import App from './App.vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import vmodal from 'vue-js-modal'
import GoogleSignInButton from 'vue-google-signin-button-directive'
import VueSweetalert2 from 'vue-sweetalert2';

Vue.use(vmodal)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueSweetalert2)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
  render: h => h(App),
  GoogleSignInButton,
}).$mount('#app');