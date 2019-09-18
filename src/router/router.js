import Vue from 'vue'
import Router from 'vue-router'
import Toolbar from '@/components/Toolbar'
import Suscribe from '@/components/Suscribe'
import SignIn from '@/components/SignIn'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Toolbar',
      component: Toolbar
    },
    {
      path: '/suscribe',
      name: 'Siscribe',
      component: Suscribe
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    }
  ]
})
