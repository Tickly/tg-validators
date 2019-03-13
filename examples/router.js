import Vue from 'vue'
import VueRouter from 'vue-router'

import GettingStarted from './GettingStarted.vue'

import BasicForm from './BasicForm.vue'

Vue.use(VueRouter);


const routes = [{
    path: '/getting-started',
    component: GettingStarted,
  },
  {
    path: '/basic-form',
    component: BasicForm
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})


export default router
