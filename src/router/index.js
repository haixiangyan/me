import Vue from 'vue'
import VueRouter from 'vue-router'

import Profile from '../pages/Profile'
import Jianshu from '../pages/Jianshu'
import Medium from '../pages/Medium'
import Portfolio from '../pages/Portfolio'
import BucketList from '../pages/BucketList/BucketList'

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
