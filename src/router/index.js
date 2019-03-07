import Vue from 'vue'
import VueRouter from 'vue-router'

import Profile from '../components/Profile'
import Jianshu from '../components/Jianshu'
import Medium from '../components/Medium'
import Contact from '../components/Contact'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Profile
    },
    {
        path: '/jianshu',
        component: Jianshu
    },
    {
        path: '/medium',
        component: Medium
    },
    {
        path: '/contact',
        component: Contact
    }
]

export default new VueRouter({
    routes
})
