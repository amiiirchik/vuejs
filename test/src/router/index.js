import{ createRouter, createWebHistory } from 'vue-router'
import Main from '../pages/Main.vue'
import User from '../pages/User.vue'
import Reviews from '../pages/Reviews.vue'

const routes = [
    {
        name: 'Main',
        path: '/',
        alias: '/main',
        component: Main,
        meta: {
            name: 'Главная',
            icon: 'home'
        }
    },
    {
        name: 'User',
        path: '/user',
        component: User,
        meta: {
            name: 'Юзер',
            icon: 'user'
        }
    },
    {
        name: 'Reviews',
        path: '/reviews',
        component: Reviews,
        meta: {
            name: 'Поиск',
            icon: 'search'
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router