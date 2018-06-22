import Vue from 'vue'
import Router from 'vue-router'

import test1 from '@/components/test1'
import test2 from '@/components/test2'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:{path:'/test1'}
    },
    {
      path:'/test1',
      component:test1
    },
    {
      path:'/test2',
      component:test2
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
