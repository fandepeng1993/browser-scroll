import Vue from 'vue'
import Router from 'vue-router'

import test1 from '@/components/test1'
import test2 from '@/components/test2'
import test1in from '@/components/test1in'
import test2out from '@/components/test2out'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:{path:'/test1'}
    },
    {
      path:'/test1',
      component:test1,
      children:[
        {
          path:':id',
          component:test1in
        }

      ]
    },
    {
      path:'/test2',
      component:test2
    },
    {
      path:'/test2out/:id',
      component:test2out,
      meta:{
        notisKeep:true
      }
    }

  ]
})
