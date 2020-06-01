import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import Register from './components/UI/Register'
import Signing from './components/UI/Signing'
import Logout from './components/UI/Logout'
import Admin from './components/Admin/Main'
import Dashboard from './components/Admin/Dashboard'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component:Home
    },

    {
      path: '/api/auth/admin',
      name: 'Admin',
      component:Admin
    },

    {
    path: '/api/auth/admin',
    name: 'Dashboard',
    component:Dashboard
  },
  {
    path: '/register',
    name: 'Register',
    component:Register
  },
  {
    path: '/signing',
    name: 'Signing',
    component:Signing
  },
  {
    path: '/logout',
    name: 'Logout',
    component:Logout
  },
  ]
})
