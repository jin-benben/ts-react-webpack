import React from 'react'
import {HashRouter as Router,Route,useLocation, Switch} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'
import { routeList } from './router'


const App=()=>{
  return (
   <Router>
    { renderRoutes(routeList)}
   </Router>
  )
}

export default App