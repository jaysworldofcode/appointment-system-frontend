<template>
    <div class="flex flex-col justify-center bg-white items-center h-screen w-screen">
      <div class="flex flex-col justify-center items-center bg-primary-white w-80">
        <span class="font-black text-2xl">iAppoint</span>
        <p class="text-sm mt-2">Unlock Your Appointments Potential: Seamlessly Manage Your Appointments with Ease! &#128521;</p>
        <input type="text" class="form-input w-full mt-8" placeholder="Username" />
        <input type="password" class="form-input w-full mt-2" placeholder="Username" />
        <button class="form-button w-full mt-2" @click="login">Sign In</button>
        <a href="#" class="no-underline hover:underline mt-4 text-blue-700" @click="register">Do you have an account? Sign Up</a>
      </div>
    </div>
  </template>
  <script>
  export default {
    name: 'LoginPage',
    methods: {
      login(){
        this.$router.push('/my-profile')
      },
      register(){
        this.$router.push('/register')
      }
    }
  }
  </script>
  <style scoped>
  </style>
  