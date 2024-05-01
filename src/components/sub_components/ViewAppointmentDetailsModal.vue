<template>
    <div class="flex w-full">
        <!-- Main modal -->
        <div :id="'view-appointment-modal-'+uuid" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative p-4 w-full max-w-2xl max-h-full">
                <!-- Modal content -->
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <!-- Modal header -->
                    <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 class="flex justify-center items-center text-xl font-semibold text-gray-900 dark:text-white">
                            <svg class="mr-4 " width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17 4.25H15.75V3C15.75 2.80109 15.671 2.61032 15.5303 2.46967C15.3897 2.32902 15.1989 2.25 15 2.25C14.8011 2.25 14.6103 2.32902 14.4697 2.46967C14.329 2.61032 14.25 2.80109 14.25 3V4.25H9.75V3C9.75 2.80109 9.67098 2.61032 9.53033 2.46967C9.38968 2.32902 9.19891 2.25 9 2.25C8.80109 2.25 8.61032 2.32902 8.46967 2.46967C8.32902 2.61032 8.25 2.80109 8.25 3V4.25H7C6.27065 4.25 5.57118 4.53973 5.05546 5.05546C4.53973 5.57118 4.25 6.27065 4.25 7V18C4.25 18.7293 4.53973 19.4288 5.05546 19.9445C5.57118 20.4603 6.27065 20.75 7 20.75H17C17.7293 20.75 18.4288 20.4603 18.9445 19.9445C19.4603 19.4288 19.75 18.7293 19.75 18V7C19.75 6.27065 19.4603 5.57118 18.9445 5.05546C18.4288 4.53973 17.7293 4.25 17 4.25ZM7 5.75H8.25V7C8.25 7.19891 8.32902 7.38968 8.46967 7.53033C8.61032 7.67098 8.80109 7.75 9 7.75C9.19891 7.75 9.38968 7.67098 9.53033 7.53033C9.67098 7.38968 9.75 7.19891 9.75 7V5.75H14.25V7C14.25 7.19891 14.329 7.38968 14.4697 7.53033C14.6103 7.67098 14.8011 7.75 15 7.75C15.1989 7.75 15.3897 7.67098 15.5303 7.53033C15.671 7.38968 15.75 7.19891 15.75 7V5.75H17C17.3315 5.75 17.6495 5.8817 17.8839 6.11612C18.1183 6.35054 18.25 6.66848 18.25 7V9.75H5.75V7C5.75 6.66848 5.8817 6.35054 6.11612 6.11612C6.35054 5.8817 6.66848 5.75 7 5.75ZM17 19.25H7C6.66848 19.25 6.35054 19.1183 6.11612 18.8839C5.8817 18.6495 5.75 18.3315 5.75 18V11.25H18.25V18C18.25 18.3315 18.1183 18.6495 17.8839 18.8839C17.6495 19.1183 17.3315 19.25 17 19.25Z" fill="#000000"/>
                            </svg>
                            View Appointment
                        </h3>
                        <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" :data-modal-hide="'view-appointment-modal-'+uuid">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                    <!-- Modal body -->
                    <div class="p-4 md:p-5 space-y-4">
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
                        <button type="button" @click="viewAppointmentDetails(1)" class="w-full mb-4 mt-4 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">
                            View Full details
                        </button>
                    </div>
                    <!-- Modal footer -->
                    <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button @click="save" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Save
                        </button>
                        <button :data-modal-hide="'view-appointment-modal-'+uuid" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                            Cancel
                        </button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { Modal } from 'flowbite';
import { v4 as uuidv4 } from 'uuid';
import { searchPatients } from '@/repository/PatientsRepository';
import { mapGetters, mapMutations } from "vuex";
import system_settings_types from '@/modules/store/system_settings/types'
import { required, minLength, between } from 'vuelidate/lib/validators'

export default {
    name: 'ViewAppointmentDetailsModal',
    props: [
        'onInitialize'
    ],
    data() {
        return {
            modal: null,
            uuid: null,
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
    validations: {
        field: {
            schedule_date_start: {
                required
            },
            schedule_time: {
                required
            },
            appointment_status: {
                required
            },
            notes: {
                required
            },
            selected_patient: {
                required
            },
        },
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
        viewAppointmentDetails(id){
            this.$router.push({ path: '/my-appointments/details', query: { id: id }})
            this.modal.toggle();
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
        initializeModal(){
            const $targetModal = document.getElementById('view-appointment-modal-'+this.uuid);

            // options with default values
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
                id: 'view-appointment-modal-'+this.uuid,
                override: true
            };

            return new Modal($targetModal, options, instanceOptions);
        }
    },
    created(){
        this.uuid = uuidv4();
    },
    mounted(){
        this.modal = this.initializeModal()

        if(this.onInitialize){
            this.onInitialize(
                this.modal
            )
        }
    }
}
</script>
<style scoped>
</style>