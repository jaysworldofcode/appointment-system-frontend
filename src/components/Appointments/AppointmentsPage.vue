<template>
    <div class="flex flex-col justify-center bg-white items-center pl-8 pr-8">
        <div class="flex flex-row-reverse w-full">
            <button @click="toggleNewAppointmentModal" type="button" class="flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                <svg width="20px" height="20px" viewBox="0 0 24 24" class="text-white" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11 17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V13H17C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11H13V7C13 6.44771 12.5523 6 12 6C11.4477 6 11 6.44771 11 7V11H7C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13H11V17Z" fill="text-white"/>
                </svg>
                <span class="uppercase">New Appointment</span>
            </button>
        </div>
        <div class="relative w-full overflow-x-auto sm:rounded-lg mt-4">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <caption class="p-5 text-lg text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                    <span class="font-black text-2xl">My Appointments</span>
                    <!-- <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lorem massa, placerat eu accumsan nec, vestibulum eget metus. Suspendisse mi purus, lacinia non enim nec, consectetur vestibulum sem.
                    </p> -->
                    <SearchButton class="mt-4"/>
                </caption>
                <thead class="text-xs text-gray-400 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b rounded-t-lg">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            PATIENT NAME
                        </th>
                        <th scope="col" class="px-6 py-3">
                            SCHEDULE
                        </th>
                        <th scope="col" class="px-6 py-3">
                            STATUS
                        </th>
                        <th scope="col" class="px-6 py-3">
                            NOTES
                        </th>
                        <th scope="col" class="px-6 py-3">
                            <span class="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            John Doe
                        </th>
                        <td class="px-6 py-4">
                            March  04, 2024 - 11:00 AM
                        </td>
                        <td class="px-6 py-4">
                            Success
                        </td>
                        <td class="px-6 py-4">
                            Tester Transaction
                        </td>
                        <td class="py-4 text-right flex justify-around">
                            <button @click="toggleViewAppointmentModal" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</button>
                            <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</button>
                            <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <nav aria-label="Page navigation example" class="w-full flex items-center justify-center">
                <ul class="inline-flex -space-x-px text-sm p-4">
                    <li>
                        <a href="#" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                    </li>
                    <li>
                        <a href="#" aria-current="page" class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
        <NewAppointmentModal :onInitialize="setNewAppointmentModal" />
        <ViewAppointmentDetailsModal :onInitialize="setViewAppointmentModal" />
   </div>
</template>

<script>
import SearchButton from '@/components/Appointments/sub_components/SearchButton.vue'
import NewAppointmentModal from '@/components/sub_components/NewAppointmentModal.vue'
import ViewAppointmentDetailsModal from '@/components/sub_components/ViewAppointmentDetailsModal.vue'

export default {
    name: 'AccountsPage',
    data() {
        return {
            new_appointment_modal: null,
            view_appointment_modal: null
        }
    },
    components: {
        SearchButton,
        NewAppointmentModal,
        ViewAppointmentDetailsModal
    },
    methods: {
        setNewAppointmentModal(modal){
            this.new_appointment_modal = modal
        },
        setViewAppointmentModal(modal){
            this.view_appointment_modal = modal
        },
        toggleNewAppointmentModal(){
            this.new_appointment_modal.toggle();
        },
        toggleViewAppointmentModal(){
            this.view_appointment_modal.toggle();
        }
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
  