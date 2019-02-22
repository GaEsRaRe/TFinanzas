import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'

import 'vuetify/dist/vuetify.min.css'

import VueRouter from "vue-router"
import { routes } from "./routes";


Vue.use(Vuetify)

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

new Vue({
  
  render: h => h(App),
  router
}).$mount('#app')

