import Vue from 'vue'
import VueRouter from 'vue-router'

import Profile from '../pages/Profile'
import Blog from '../pages/Blog'
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
    path: '/blog',
    name: 'blog',
    component: Blog
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio
  },
  {
    path: '/bucket-list/',
    name: 'bucket-list',
    component: BucketList
  }
]

export default new VueRouter({
  routes
})
