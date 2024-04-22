<template>
    <div class="flex flex-col justify-center bg-white items-center h-screen w-screen">
      <div class="flex flex-col justify-center items-center bg-primary-white w-80">
        <span class="font-bold text-4xl">Welcome Back</span>
        <span class="text-slate-600">Login to access your private space &#128521;</span>
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
  