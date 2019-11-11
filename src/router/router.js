import Vue from 'vue'
import Router from 'vue-router'
import AppHome from '@/components/AppHome'
import Suscribe from '@/components/Subcribe'
import SignIn from '@/components/SignIn'
import Contact from '@/components/Contact'
import NotreEquipe from '@/components/NotreEquipe'
import NotreMetier from '@/components/NotreMetier'
import Requête from '@/components/Requête'
import ContactUs from '@/components/ContactUs'
import TestServer from '@/components/TestServer'
import Profil from '@/components/Profil'

Vue.use(Router)

const router = new Router({
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
      path: '/contactus',
      name: 'Contactus',
      component: ContactUs
    },
    {
      path: '/requête',
      name: 'Requête',
      component: Requête
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
    },
    {
      path: '/testserver',
      name: 'testserver',
      component: TestServer
    },
    {
      path: '/profil',
      name: 'profil',
      component: Profil
    }
  ]
})

router.beforeEach((to, from, next) => {
  // access to component instance via `vm`
  if (to.fullPath === '/signin' || to.fullPath === '/subcribe') {
    console.log(localStorage.getItem('email'))
    if (localStorage.getItem('email') !== null) {
      next(
        { name: 'profil' }
      )
    } else {
      next()
    }
  } else if (to.fullPath === '/profil') {
    console.log(localStorage.getItem('email'))
    if (localStorage.getItem('email') === null) {
      next({ name: 'SignIn' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
