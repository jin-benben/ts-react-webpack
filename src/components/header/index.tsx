import React from 'react'
import { Link } from 'react-router-dom'
import  './index.less'

const navList=[
  {name:'首页',path:'/',id:1},
  {name:'沸点',path:'/pins',id:2},
]

const Header=()=>{
  return (
    <div className="main-header-box">
      <header className="container">
        <a className="logo">
          <img src="https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg" />
        </a>
        <nav>
          {
            navList.map(item=> <Link className="nav-item" key={item.id} to={item.path}>{item.name}</Link>)
          }
        </nav>
      </header>
    </div>
  )
}

export default Header