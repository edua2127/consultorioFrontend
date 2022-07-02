import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/especialidade/listar',
    name: 'especialidade-listar',
    component: () => import(/* webpackChunkName: "list" */ '../views/especialidade/especialidade-list.vue')
  },
  {
    path: '/especialidade/form',
    name: 'especialidade-form',
    component: () => import(/* webpackChunkName: "form" */ '../views/especialidade/especialidade-form.vue')
  },
  {
    path: '/especialidade/form/:model/:id',
    name: 'especialidade-detalhar',
    props: (router) => ({ id: router.params.id, model: router.params.model }),
    component: () => import(/* webpackChunkName: "form" */ '../views/especialidade/especialidade-form.vue')
  },
  {
    path: '/convenio/listar',
    name: 'convenio-listar',
    component: () => import(/* webpackChunkName: "list" */ '../views/convenio/convenio-list.vue')
  },
  {
    path: '/convenio/form',
    name: 'convenio-form',
    component: () => import(/* webpackChunkName: "form" */ '../views/convenio/convenio-form.vue')
  },
  {
    path: '/convenio/form/:model/:id',
    name: 'convenio-detalhar',
    props: (router) => ({ id: router.params.id, model: router.params.model }),
    component: () => import(/* webpackChunkName: "form" */ '../views/convenio/convenio-form.vue')
  },
  {
    path: '/paciente/listar',
    name: 'paciente-listar',
    component: () => import(/* webpackChunkName: "list" */ '../views/paciente/paciente-list.vue')
  },
  {
    path: '/paciente/form',
    name: 'paciente-form',
    component: () => import(/* webpackChunkName: "list" */ '../views/paciente/paciente-form.vue')
  },
  {
    path: '/paciente/form/:model/:id',
    name: 'paciente-detalhar',
    props: (router) => ({ id: router.params.id, model: router.params.model }),
    component: () => import(/* webpackChunkName: "list" */ '../views/paciente/paciente-form.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router