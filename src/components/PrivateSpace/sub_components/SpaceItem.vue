<template>
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td class="p-1">
            <div class="flex items-center">
                <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
            </div>
        </td>
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{ data.title }}
        </th>
        <td class="px-6 py-4">
            {{ data.caption }}
        </td>
        <td class="px-6 py-4">
            {{ data.type }}
        </td>
        <td class="px-6 py-4">
            {{ data.date_added }}
        </td>
        <td class="px-6 py-4 inline-flex items-center justify-center">
            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 mr-2">
                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.7703 12C20.7703 11.6412 20.5762 11.4056 20.188 10.9343C18.768 9.21014 15.6357 6 12 6C8.36428 6 5.23207 9.21014 3.81198 10.9343C3.42382 11.4056 3.22974 11.6412 3.22974 12C3.22974 12.3588 3.42382 12.5944 3.81198 13.0657C5.23207 14.7899 8.36428 18 12 18C15.6357 18 18.768 14.7899 20.188 13.0657C20.5762 12.5944 20.7703 12.3588 20.7703 12ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3432 9 9.00002 10.3431 9.00002 12C9.00002 13.6569 10.3432 15 12 15Z" fill="#33363F"/>
                </svg>
            </a>
            <a href="#" class="font-medium text-red-800 dark:text-blue-500">
                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ff0000">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                    <g id="SVGRepo_iconCarrier"> <path d="M10 12V17" stroke="#f50000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M14 12V17" stroke="#f50000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M4 7H20" stroke="#f50000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke="#f50000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#f50000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </g>
                </svg>
            </a>
        </td>
    </tr>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import private_space_types from '@/modules/store/private-space/types.js'

export default {
    name: 'SpaceItem',
    props: [
        'data'
    ],
}
</script>
<style scoped>
</style>
    