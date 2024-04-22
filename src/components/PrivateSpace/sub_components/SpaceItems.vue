<template>
<div class="relative overflow-x-auto sm:rounded-lg">
    <div class="p-2 bg-white dark:bg-gray-900 flex flex-col md:flex-row lg:flex-row justify-between">
        <div class="relative mt-1">
            <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input type="text" id="table-search" class="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items">
        </div>
        <button type="button" class="
            mt-2
            md:mt-0
            lg:mt-0
            text-white
            bg-gradient-to-r
            from-blue-500
            via-blue-600
            to-blue-700
            hover:bg-gradient-to-br
            focus:ring-4
            focus:outline-none
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
        " @click="toggleNewSpaceModal">
            Add New
        </button>
    </div>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-4">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="p-1">
                    <div class="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checkbox-all-search" class="sr-only">checkbox</label>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                    Title
                </th>
                <th scope="col" class="px-6 py-3">
                    Caption
                </th>
                <th scope="col" class="px-6 py-3">
                    Title
                </th>
                <th scope="col" class="px-6 py-3">
                    Date Added
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <SpaceItem v-for="(item, index) in getPrivateSpace" :data="item" v-bind:key="index"></SpaceItem>
        </tbody>
    </table>
    <NewSpaceModal :on_close="onClose"></NewSpaceModal>
</div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import private_space_types from '@/modules/store/private-space/types.js'
import SpaceItem from '@/components/PrivateSpace/sub_components/SpaceItem.vue'
import NewSpaceModal from '@/components/PrivateSpace/sub_components/NewSpaceModal.vue'
import { Modal } from 'flowbite';

export default {
    name: 'SpaceItems',
    data(){
        return {
            new_space_modal: null
        }
    },
    components: {
        SpaceItem,
        NewSpaceModal
    },
    computed: {
        ...mapGetters({
            getPrivateSpace: private_space_types.GET_PRIVATE_SPACE,
        }),
    },
    methods: {
        onClose(){
            this.new_space_modal.hide();
        },
        toggleNewSpaceModal(){
            this.new_space_modal.toggle();
        },
        instantiateModals(){
            // new space modal
            const $new_space_modal = document.getElementById('new-space-modal');
            const options = {
                placement: 'bottom-right',
                backdrop: 'dynamic',
                backdropClasses:
                    'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40',
                closable: true,
                onHide: () => {
                    console.log('modal is hidden');
                },
                onShow: () => {
                    console.log('modal is shown');
                },
                onToggle: () => {
                    console.log('modal has been toggled');
                },
            };

            // instance options object
            const instanceOptions = {
                id: 'modalEl',
                override: true
            };
            this.new_space_modal = new Modal($new_space_modal, options, instanceOptions);
        }
    },
    mounted(){
        this.instantiateModals()
    }
}
</script>
<style scoped>
</style>
  