import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'
// import Contact from '../views/Contact.vue'
// import About from '../views/About.vue'
import Login from '../views/Login.vue'
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/Login',
        name: 'Login',
        component: Login,
    },

    ]

})
export default router
