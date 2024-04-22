<template>
    <div class="flex flex-col justify-center bg-white items-center pl-8 pr-8">
        <div class="flex w-full">
            <LargeTitle :title="pageTitle"></LargeTitle>
        </div>
        <div class="w-full mt-8">
            <SpaceItems></SpaceItems>
        </div>
    </div>
</template>

<script>
import LargeTitle from '@/components/sub_components/LargeTitle.vue'
import SpaceItems from '@/components/PrivateSpace/sub_components/SpaceItems.vue'

export default {
    name: 'ProfilePage',
    props: {
    },
    components: {
        LargeTitle,
        SpaceItems
    },
    computed: {
        pageTitle(){
            return this.$route.name;
        }
    }
}
</script>
<style scoped>
</style>
  