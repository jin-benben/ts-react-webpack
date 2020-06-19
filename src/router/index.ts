import loadable from '@loadable/component'
import {RouteProps} from 'react-router-dom'
import Home from '../pages/home'

export interface routeInterface {
  name?: string,
  path: string,
  component?: RouteProps["component"],
  exact?: boolean,
  routes?: routeInterface[],
  redirect?:string
}

export const routeList:routeInterface[]=[
  {
    name:'layout',
    path:'/',
    component:loadable(()=>import('../layout')),
    routes:[
      {
        name:'home',
        path:'/home',
        component:loadable(()=>import(/* webpackChunkName: "home" */'../pages/home')),
        exact:true,
      },
      {
        name:'center',
        path:'/my',
        component:loadable(()=>import(/* webpackChunkName: "center" */'../pages/my')),
        exact:true,
      }
    ]
  },
 
]
