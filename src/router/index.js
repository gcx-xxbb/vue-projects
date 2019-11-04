import Vue from 'vue'
import Router from 'vue-router'
import Logon from '@/components/Logon'
import logoin from '@/components/logoin'
import index from '@/components/index'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/logon',
      name: 'Logon',
      component: Logon
    },
    {
      path: '/logoin',
      name: 'logoin',
      component: logoin
    }
  ]
})
