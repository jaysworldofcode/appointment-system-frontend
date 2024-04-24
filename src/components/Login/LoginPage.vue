<template>
    <div class="flex flex-col justify-center bg-white items-center h-screen w-screen">
      <div class="flex flex-col justify-center items-center bg-primary-white w-80">
        <span class="font-black text-2xl">iAppoint</span>
        <p class="text-sm mt-2">Unlock Your Appointments Potential: Seamlessly Manage Your Appointments with Ease! &#128521;</p>
        <input type="text" v-model="login_field.username" class="form-input w-full mt-8" placeholder="Username" />
        <input type="password" v-model="login_field.password" class="form-input w-full mt-2" placeholder="Username" />
        <button class="form-button w-full mt-2" @click="login">
          <span v-if="is_logging_in == false">Sign In</span>
          <div v-else role="status">
            <svg aria-hidden="true" class="inline w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
          </div>
    </button>
        <a href="#" class="no-underline hover:underline mt-4 text-blue-700" @click="register">Do you have an account? Sign Up</a>
      </div>
      <Alert
        :is_show_alert="is_show_alert_error"
        message="Account doesn't exists"
        :on_close="onErrorAlertClose"
        location="bottom-0"
        type="error"
      />
    </div>
  </template>
  <script>
  import axios from 'axios'
  import Alert from '@/components/sub_components/Alert.vue'
  import local_config from '@/constants/local_config.js'

  export default {
    name: 'LoginPage',
    components: {
      Alert
    },
    data() {
        return {
            login_field: {
              username: null,
              password: null
            },
            is_show_alert_error: false,
            alert_error_message: '',
            is_logging_in: false
        }
    },
    created(){
      localStorage.removeItem(
        local_config.authorization_key
      )
    },
    methods: {
      onErrorAlertClose(){
        this.is_show_alert_error = false
      },
      async login(){
        if(this.is_logging_in){
          return
        }

        this.is_logging_in = true
        try {
          await axios.post(process.env.VUE_APP_ROOT_API+'api/auth/login', {
              email: this.login_field.username,
              password: this.login_field.password
          }).then(function (response) {
            localStorage.setItem(
              local_config.authorization_key,
              JSON.stringify(response.data)
            );
          })
          this.$router.push('/my-appointments')
        } catch (error) {
          if (error.response.status === 401) {
            this.is_show_alert_error = true
          }
        }
        this.is_logging_in = false
      },
      register(){
        this.$router.push('/register')
      }
    }
  }
  </script>
  <style scoped>
  </style>
  @/constants/local_config.js