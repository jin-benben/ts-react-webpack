import React from 'react'
import { NavLink } from 'react-router-dom'
import  './index.less'

const Header=()=>{
  return (
    <div className="main-header-box">
      <header>
       
        <nav>
          <NavLink to='/home'>home</NavLink>
          <NavLink to='/my'>center</NavLink>
        </nav>
      </header>
    </div>
  )
}

export default Header