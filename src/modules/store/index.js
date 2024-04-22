import Vue from 'vue'
import Vuex from 'vuex'
import settings from '@/modules/store/settings'
import private_space from '@/modules/store/private-space'

Vue.use(Vuex)

export default new Vuex.Store({ 
    modules: {
        settings,
        private_space
    },
})