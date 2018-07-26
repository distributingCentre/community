import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/user/Login'
import Regist from '@/components/user/Regist'
import Home from '../components/home/Home'
import TabBar from '../components/common/Tab'
import Spot from '../components/spot/Spot'
import Mine from '../components/mine/Mine'
import Rec from '../components/rec/Rec'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Login',
      name: 'Login',
      meta: {index: 0},
      component: Login
    },
    {
      path: '/Regist',
      name: 'Regist',
      meta: {index: 1},
      component: Regist
    },
    {
      path: '/TabBar',
      name: 'TabBar',
      component: TabBar,
      children: [
        {
          path: '/Home',
          name: 'Home',
          component: Home
        },
        {
          path: '/Rec',
          name: 'Rec',
          component: Rec
        },
        {
          path: '/Spot',
          name: 'Spot',
          component: Spot
        },
        {
          path: '/Mine',
          name: 'Mine',
          component: Mine
        }
      ]
    }
  ]
})
