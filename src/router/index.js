import Vue from 'vue'
import VueRouter from 'vue-router'

//组件
import Home from "../views/home/Home";
import Profile from "../views/home/profile/Profile";
import Movies from "../views/home/movies/Movies";
import CityPick from "../views/city/CityPick";
import Theaters from "../views/home/theaters/Theaters";
import InThraters from "../views/home/movies/InThraters";
import ComingSoon from "../views/home/movies/ComingSoon";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    redirect: '/home/movies',
    children:[
        {
        path:'movies',
        name:'movies',
        component:Movies,
        redirect: '/home/movies/intheaters',
        children:[
          {
            path:'intheaters',
            name:'intheaters',
            component:InThraters
          },
          {
            path:'comingsoon',
            name:'comingsoon',
            component:ComingSoon
          }
        ]

      },
      {
        path:'theaters',
        name:'theaters',
        component:Theaters
      },
      {
        path:'profile',
        name:'profile',
        component:Profile
      }
    ]
  },
  {
    path: '/citypick',
     name: 'citypick',
    component: CityPick
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
