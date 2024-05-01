<template>
    <div class="w-full text-left">
        <nav class="flex" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li class="inline-flex items-center" v-for="(item, index) in data" :key="index">
                    <svg v-if="index != 0" class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <button @click="goToPage(item.to_route)" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                        {{ item.page_title }}
                    </button>
                </li>
            </ol>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Breadcrumbs',
    props:[
        'data'
    ],
    computed: {
    },
    methods: {
        goToPage(route){
            this.$router.push(route)
        }
    }
}
</script>
<style scoped>
</style>
  