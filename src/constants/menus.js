import LoginPage from '@/components/Login/LoginPage.vue'
import ProfilePage from '@/components/Profile/ProfilePage.vue';
import PrivateSpacePage from '@/components/PrivateSpace/PrivateSpacePage.vue'
import AccountsPage from '@/components/Accounts/AccountsPage.vue'
import RegistrationPage from '@/components/Registration/RegistrationPage.vue'
import AppointmentsPage from '@/components/Appointments/AppointmentsPage.vue';

export default [
    {
        name: 'Login',
        icon: 'login',
        path: '/login',
        meta: {
            requiresAuth: false
        },
        component: LoginPage
    },
    {
        name: 'My Appointments',
        icon: 'registration',
        path: '/my-appointments',
        meta: {
            requiresAuth: true
        },
        component: AppointmentsPage
    },
    // {
    //     name: 'Registration Page',
    //     icon: 'registration',
    //     path: '/register',
    //     meta: {
    //         requiresAuth: false
    //     },
    //     component: RegistrationPage
    // },
    // {
    //     name: 'My Profile',
    //     icon: 'my-profile',
    //     path: '/my-profile',
    //     meta: {
    //         requiresAuth: true
    //     },
    //     component: ProfilePage
    // },
    // {
    //     name: 'My Private Space',
    //     icon: 'my-private-space',
    //     path: '/my-private-space',
    //     meta: {
    //         requiresAuth: true
    //     },
    //     component: PrivateSpacePage
    // },
    // {
    //     name: 'My Accounts',
    //     icon: 'accounts',
    //     path: '/accounts',
    //     meta: {
    //         requiresAuth: true
    //     },
    //     component: AccountsPage
    // },
];