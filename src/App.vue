<template>
  <div id="app">
    <NavbarBarPrivate v-if="isRequiresAuth == true"></NavbarBarPrivate>
    <router-view></router-view>
  </div>
</template>

<script>
import NavigationDrawer from '@/components/sub_components/NavigationDrawer.vue'
import NavbarBarPrivate from '@/components/sub_components/NavBarPrivate.vue'

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
}
</script>

<style>
#app {
}
</style>
