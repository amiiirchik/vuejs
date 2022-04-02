import{ createRouter, createWebHistory } from 'vue-router'
import Account from '../pages/Account.vue'
import User from '../pages/User.vue'

const routes = [
    {
        name: 'Account',
        path: '/account',
        alias: '/main',
        component: Account
    },
    {
        name: 'User',
        path: '/user',
        component: User
    },
    {
        name: 'Reviews',
        path: '/reviews',
        component: Reviews
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router