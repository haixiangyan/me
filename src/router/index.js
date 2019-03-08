import Vue from 'vue'
import VueRouter from 'vue-router'

import Profile from '../components/Profile/Profile'
import Jianshu from '../components/Jianshu/Jianshu'
import Medium from '../components/Medium/Medium'
import Portfolio from '../components/Portfolio/Portfolio'

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
        path: '/portfolio',
        component: Portfolio
    }
]

export default new VueRouter({
    routes
})
