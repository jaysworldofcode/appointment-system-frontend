import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from '@/App.vue'
import store from "@/modules/store"
import menus from '@/constants/menus.js'
import '@/assets/css/tailwind.css'
import '@/assets/css/style.css'
import 'flowbite/dist/flowbite.js'

Vue.use(Vuex)
Vue.use(require('vue-moment'))
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    history: true,
    base: '/',
    routes: menus,
})
  
Vue.config.productionTip = false
  
new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
})