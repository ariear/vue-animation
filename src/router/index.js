import { createRouter , createWebHistory } from "vue-router"
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import About from '../views/About.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
]

const router = createRouter({
    'history' : createWebHistory(),
    routes,
    'linkActiveClass' : 'text-gray-400'
})

export default router