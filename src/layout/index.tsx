import React from 'react'
import {renderRoutes,matchRoutes} from 'react-router-config'
import {routeInterface} from '../router'
import Header from '../components/header'
import Footer from '../components/footer'
import './index.less' 

interface IRouter {
  route:routeInterface
}
const Layout:React.FC<IRouter>=(props)=>{
  console.log('layout',props.route.routes)
  console.log(matchRoutes(props.route.routes, "/home"))
  return (
  <div className="main">
    <Header />
    <section>
    {renderRoutes(props.route.routes)}
    </section>
    <Footer />
  </div>
  )
}

export default Layout