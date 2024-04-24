<template>
  <div id="app">
    <NavbarBarPrivate v-if="isRequiresAuth == true"></NavbarBarPrivate>
    <router-view></router-view>
  </div>
</template>

<script>
import NavigationDrawer from '@/components/sub_components/NavigationDrawer.vue'
import NavbarBarPrivate from '@/components/sub_components/NavBarPrivate.vue'
import system_settings_types from '@/modules/store/system_settings/types.js'
import { mapGetters, mapMutations } from "vuex";
import local_config from '@/constants/local_config.js'

export default {
  name: 'App',
  components: {
    NavbarBarPrivate
  },
  computed: {
    isRequiresAuth() {
      return this.$route.meta.requiresAuth;
    }
  },
  methods: {
    ...mapMutations({
      setUserDetails: system_settings_types.SET_USER_DETAILS,
    }),
    checkIfAuthenticated(){
      if(localStorage.getItem(local_config.authorization_key) === null && this.isRequiresAuth){
        window.location.replace('/login');
      }else{
        // console.log(localStorage.getItem(local_config.authorization_key))
        this.setUserDetails(
          JSON.parse(localStorage.getItem(local_config.authorization_key))
        )
      }
    }
  },
  created(){
    this.checkIfAuthenticated()
  }
}
</script>

<style>
#app {
}
</style>
@/modules/store/system_settings/types.js