import Vue from 'vue'
import Router from 'vue-router'
import test1 from '@/components/test1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'test1',
      component: test1
    },
  ]
})
