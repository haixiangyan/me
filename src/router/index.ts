import Vue from 'vue'
import VueRouter from 'vue-router'

const Profile = () => import('../pages/Profile/Profile.vue')
const Blog = () => import('../pages/Blog.vue')
const Portfolio = () => import('../pages/Portfolio.vue')
const BucketList = () => import('../pages/BucketList/BucketList.vue')

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

Vue.use(VueRouter)

export default new VueRouter({
  routes
})
