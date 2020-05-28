import Vue from 'vue'
import VueRouter from 'vue-router'

import Profile from '../pages/Profile/Profile.vue'
import Blog from '../pages/Blog.vue'
import Portfolio from '../pages/Portfolio.vue'
import BucketList from '../pages/BucketList/BucketList.vue'

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
