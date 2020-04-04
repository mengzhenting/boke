import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/index'
import Artical from '../components/artical'
import Search from '../components/search'
import Sort from '../components/sort'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/total/1'
  },
  {
    path: '/total/:page',
    component: Index
  },
  {
    path: '/artical/:id',
    name: 'artical',
    component: Artical
  },
  {
    path: '/search/:type/:num',
    name: 'search',
    component: Search
  },
  {
    path: '/sort/:classification/:pagenum',
    name: 'sort',
    component: Sort
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
