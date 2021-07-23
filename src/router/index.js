import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

import Reaction from '../views/ReactionTimerGame/Reaction.vue'

import Form from '../views/Form/Form.vue'

import Jobs from '../views/jobs/Jobs.vue'
import JobDetails from '../views/jobs/JobDetails.vue'

import Blog from '../views/Blog/Blog.vue'
import Details from '../views/Blog/Details.vue'

import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/reaction',
    name: 'Reaction',
    component: Reaction
  },
  {
    path: '/form',
    name: 'Form',
    component: Form
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/posts/:id',
    name: 'Details',
    component: Details,
    props: true
  },
  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: JobDetails,
    props: true
  },
  // Redirect
  {
    path: '/all-jobs',
    redirect: '/jobs'
  },
  // 404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
