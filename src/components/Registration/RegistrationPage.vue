<template>
    <div class="flex flex-col justify-center bg-white items-center h-screen w-screen">
      <div class="flex flex-col justify-center items-center bg-primary-white w-80">
        <span class="font-bold text-4xl">Register</span>
        <div class="w-full">
            <label for="username-registration" class="block text-sm font-medium text-gray-900 dark:text-white">Title</label>
            <input type="text" id="username-registration" class="
                bg-gray-50 border
                border-gray-300
                text-gray-900
                rounded-lg
                focus:ring-blue-500
                focus:border-blue-500
                w-full
                p-2.5
                dark:bg-gray-700
                dark:border-gray-600
                dark:placeholder-gray-400
                dark:text-white
                dark:focus:ring-blue-500
                dark:focus:border-blue-500
            " placeholder="Enter your username" required />
        </div>
        <div class="w-full mt-2">
            <label for="email-registration" class="block text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input type="text" id="email-registration" class="
                bg-gray-50 border
                border-gray-300
                text-gray-900
                rounded-lg
                focus:ring-blue-500
                focus:border-blue-500
                w-full
                p-2.5
                dark:bg-gray-700
                dark:border-gray-600
                dark:placeholder-gray-400
                dark:text-white
                dark:focus:ring-blue-500
                dark:focus:border-blue-500
            " placeholder="Enter your email" required />
        </div>
        <div class="w-full mt-2">
            <label for="password-registration" class="block text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input type="password" id="password-registration" class="
                bg-gray-50 border
                border-gray-300
                text-gray-900
                rounded-lg
                focus:ring-blue-500
                focus:border-blue-500
                w-full
                p-2.5
                dark:bg-gray-700
                dark:border-gray-600
                dark:placeholder-gray-400
                dark:text-white
                dark:focus:ring-blue-500
                dark:focus:border-blue-500
            " placeholder="Enter your password" required />
        </div>
        <div class="w-full mt-2">
            <label for="pin-registration" class="block text-sm font-medium text-gray-900 dark:text-white">Pin</label>
            <input type="text" id="pin-registration" class="
                bg-gray-50 border
                border-gray-300
                text-gray-900
                rounded-lg
                focus:ring-blue-500
                focus:border-blue-500
                w-full
                p-2.5
                dark:bg-gray-700
                dark:border-gray-600
                dark:placeholder-gray-400
                dark:text-white
                dark:focus:ring-blue-500
                dark:focus:border-blue-500
            " placeholder="Enter your pin" required />
        </div>
        <button class="form-button w-full mt-2">Register</button>
      </div>
    </div>
</template>
<script>
export default {
    name: 'RegistrationPage',
    components: {
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
  