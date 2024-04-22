<template>
    <div class="flex flex-col justify-center bg-white items-center pl-8 pr-8">
        <div class="w-full">
            <LargeTitle :title="pageTitle"></LargeTitle>
        </div>
        <div class="w-full mt-8 grid gap-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
            <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#" class="flex">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Your Private Messages</h5>
                    <span class="inline-flex items-center justify-center px-2 ms-1 text-sm font-medium text-gray-800 bg-primary-v-white rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec pellentesque nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                </p>
                <button type="button" class="w-full inline-flex items-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">
                    View
                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </button>
            </div>
            <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Your private space</h5>
                </a>
                <p class="
                    mb-3
                    font-normal
                    text-gray-700
                    dark:text-gray-400"
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec pellentesque nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                <button type="button" class="
                    w-full
                    inline-flex
                    items-center
                    text-white
                    bg-gradient-to-r
                    from-blue-500
                    via-blue-600
                    to-blue-700
                    hover:bg-gradient-to-br
                    focus:ring-4 focus:outline-none
                    focus:ring-blue-300
                    dark:focus:ring-blue-800
                    shadow-lg
                    shadow-blue-500/50
                    dark:shadow-lg
                    dark:shadow-blue-800/80
                    font-medium
                    rounded-lg
                    text-sm
                    px-5
                    py-2.5
                    text-center
                    me-2
                    mb-2"
                >
                    View
                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </button>
            </div>
            <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Your accounts</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec pellentesque nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                <button type="button" class="w-full inline-flex items-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">
                    View
                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import LargeTitle from '@/components/sub_components/LargeTitle.vue'

export default {
    name: 'ProfilePage',
    components: {
        LargeTitle
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
  