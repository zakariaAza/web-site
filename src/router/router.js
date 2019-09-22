import Vue from 'vue'
import Router from 'vue-router'
import AppHome from '@/components/AppHome'
import Suscribe from '@/components/Suscribe'
import SignIn from '@/components/SignIn'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AppHome',
      component: AppHome
    },
    {
      path: '/suscribe',
      name: 'SUscribe',
      component: Suscribe
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
