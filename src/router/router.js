import Vue from 'vue'
import Router from 'vue-router'
import AppHome from '@/components/AppHome'
import Suscribe from '@/components/Subcribe'
import SignIn from '@/components/SignIn'
import Contact from '@/components/Contact'
import NotreEquipe from '@/components/NotreEquipe'
import NotreMetier from '@/components/NotreMetier'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AppHome',
      component: AppHome
    },
    {
      path: '/subcribe',
      name: 'Subcribe',
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
    },
    {
      path: '/metier',
      name: 'metier',
      component: NotreMetier
    },
    {
      path: '/equipe',
      name: 'equipe',
      component: NotreEquipe
    }
  ]
})
