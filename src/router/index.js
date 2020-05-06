import Vue from 'vue'
import VueRouter from 'vue-router'

import Profile from '../components/Profile/Profile'
import Jianshu from '../components/Jianshu/Jianshu'
import Medium from '../components/Medium/Medium'
import Portfolio from '../components/Portfolio/Portfolio'
import BucketList from '../components/BucketList/BucketList'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'profile',
        component: Profile
    },
    {
        path: '/jianshu',
        name: 'jianshu',
        component: Jianshu
    },
    {
        path: '/medium',
        name: 'medium',
        component: Medium
    },
    {
        path: '/portfolio',
        name: 'portfolio',
        component: Portfolio
    },
    {
        path: '/bucket-list/',
        redirect: '/bucket-list/done'
    },
    {
        path: '/bucket-list/:type',
        name: 'bucket-list',
        component: BucketList
    }
]

export default new VueRouter({
    routes
})
