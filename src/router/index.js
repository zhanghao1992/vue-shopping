import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/pages/IndexPage'
import DetailPage from '@/pages/DetailPage'
import Count from '@/pages/detail/Count'
import Analyice from '@/pages/detail/Analyice'
import Forecast from '@/pages/detail/Forecast'
import Publish from '@/pages/detail/Publish'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
      path: '/detail',
      component: DetailPage,
      children: [
        {
          path: 'count',
          component: Count
        },
        {
          path: 'analyice',
          component: Analyice
        },
        {
          path: 'forecast',
          component: Forecast
        },
        {
          path: 'publish',
          component: Publish
        }
      ]
    }
  ]
})
