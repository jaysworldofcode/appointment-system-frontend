<template>
    <div class="flex flex-col w-full justify-center bg-white items-center pl-8 pr-8">
        <Breadcrumbs :data="bread_crumb"/>
        <div v-if="is_loading_page" role="status" class="animate-pulse w-full mt-4">
            <div class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4 mt-4"></div>
            <div class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5 mt-4"></div>
            <div class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5 mt-4"></div>
            <div class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5 mt-4"></div>
            <div class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5 mt-4"></div>
            <div class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-full mt-4"></div>
        </div>
        <div v-else class="w-full mt-6">
            <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Schedule date</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                            </svg>
                        </div>
                        <input datepicker datepicker-buttons datepicker-autoselect-today type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date">
                    </div>
                </div>
                <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Schedule time</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clip-rule="evenodd"/>
                            </svg>
                        </div>
                        <input type="time" id="time" class="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" min="09:00" max="18:00" value="00:00" required />
                    </div>
                </div>
            </div>
            <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label for="appointment-status" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Appointment Status</label>
                    <select id="appointment-status" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Choose a status</option>
                        <option value="1">Successful</option>
                        <option value="2">Cancelled</option>
                        <option value="3">Not Arrived</option>
                        <option value="4">On Schedule</option>
                    </select>
                </div>  
                <div>
                    <label for="notes" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Note</label>
                    <textarea id="notes" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                </div>
            </div>
            <div class="relative overflow-x-auto">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Patient</label>
                <div class="p-2 pb-4 bg-white dark:bg-gray-900">
                    <label for="table-search" class="sr-only">Search Patient by Name</label>
                    <div class="relative mt-1">
                        <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="text" v-model="search_patient_name" @input="searchPatientName($event)" id="table-search" class="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Patient by Name">
                    </div>
                </div>
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Phone Number
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Address
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-if="field.selected_patient" class="bg-green-200 border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-green-100 dark:hover:bg-gray-600">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ field.selected_patient.firstname+' '+field.selected_patient.lastname }}
                            </th>
                            <td class="px-6 py-4">
                                {{ field.selected_patient.phone_number }}
                            </td>
                            <td class="px-6 py-4">
                                {{ field.selected_patient.address }}
                            </td>
                            <td class="px-6 py-4">
                                <button @click="unselectePatient" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Unselect</button>
                            </td>
                        </tr>
                        <tr v-for="patient in filterUnselectedPatient" :key="patient.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ patient.firstname+' '+patient.lastname }}
                            </th>
                            <td class="px-6 py-4">
                                {{ patient.phone_number }}
                            </td>
                            <td class="px-6 py-4">
                                {{ patient.address }}
                            </td>
                            <td class="px-6 py-4">
                                <button @click="selectPatient(patient)" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Select</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <ChatBubble
                type="message"
                save_by="You"
                message="This is a test message"
                date="Mar 12, 2024 - 12:00PM"
                on_message_delete="deleteMessage"
            />
        </div>
    </div>
</template>
<script>
import Breadcrumbs from '@/components/sub_components/Breadcrumbs'
import { searchPatients } from '@/repository/PatientsRepository';
import { mapGetters, mapMutations } from "vuex";
import system_settings_types from '@/modules/store/system_settings/types'
import { required, minLength, between } from 'vuelidate/lib/validators'
import ChatBubble from '@/components/sub_components/ChatBubble'

export default {
    name: 'AppointmentDetailsPage',
    data() {
        return {
            bread_crumb: [
                {
                    page_title: 'My Appointments',
                    to_route: '/my-appointments'
                },
                {
                    page_title: 'Tester',
                    to_route: '/my-appointments'
                },
            ],
            is_loading_page: false,
            search_patient_name: null,
            search_patients: [],
            field: {
                schedule_date_start: null,
                schedule_time: null,
                appointment_status: null,
                notes: null,
                selected_patient: null,
            }
        }
    },
    components: {
        Breadcrumbs,
        ChatBubble
    },
    computed: {
        ...mapGetters({
            getUserDetails: system_settings_types.GET_USER_DETAILS
        }),
        filterUnselectedPatient: function () {
            return this.search_patients.filter((i)=> {
                if(this.field.selected_patient == null){
                    return true
                }

                return i.id != this.field.selected_patient.id
            })
        },
    },
    methods: {
        deleteMessage(){

        },
        unselectePatient(){
            this.field.selected_patient = null
        },
        selectPatient(patient){
            console.log(patient)
            this.field.selected_patient = patient
        },
        toggleDrawer(){
            this.modal.toggle();
        },
        async searchPatientName(){
            const data = await searchPatients({
                    firstname: this.search_patient_name
                },
                this.getUserDetails.token
            )

            console.log(data)
            this.search_patients = data
        },
        save(){
            this.$v.$touch()
            console.log($v)
        },
    },
    created(){
    }
}
</script>
<style scoped>
</style>
  