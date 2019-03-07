import Vue from 'vue'
import VueRouter from 'vue-router'

import Profile from '../components/Profile/Profile'
import Jianshu from '../components/Jianshu/Jianshu'
import Medium from '../components/Medium/Medium'

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
]

export default new VueRouter({
    routes
})
