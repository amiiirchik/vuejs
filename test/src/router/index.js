import { createRouter, createWebHistory } from 'vue-router'
import Account from '../pages/Account.vue'

const routes = [
    {
        name: 'Account',
        path: '/',
        component: Account
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router