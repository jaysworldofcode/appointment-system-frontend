import Vue from 'vue'
import Vuex from 'vuex'
import private_space from '@/modules/store/private-space'
import system_settings from '@/modules/store/system_settings'

Vue.use(Vuex)

export default new Vuex.Store({ 
    modules: {
        system_settings,
        private_space
    },
})