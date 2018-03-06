import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Top from '@/components/Top'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Login from '@/components/Login'
import Auth from '@/components/Auth'

Vue.use(Router)

export default new Router({
  routes: [
    //{
    //  path: '/',
    //  name: 'HelloWorld',
    //  component: HelloWorld
    //},
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Auth',
      name: 'Auth',
      component: Auth
    }
  ]
})