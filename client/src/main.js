import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store/store'
import axios from 'axios'
import { sync } from 'vuex-router-sync'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.prototype.$api = axios

Vue.config.productionTip = false

Vue.use(Vuetify)

sync(store, router)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
