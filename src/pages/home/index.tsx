import React from 'react'
import {Dispatch} from 'redux'
import {connect} from 'react-redux'
import {Button} from 'antd'
import  './index.less'
interface HomeInterface{
  name:string,
  dispatch:Dispatch
}
const Home:React.FC<HomeInterface>=({name,dispatch})=>{
  console.log('home')
  const onClick=()=>{
    console.log('ok')
    dispatch({
      type:'CHANGE_NAME',
      name:'zzz'
    })
  }
  return (
    <div className="home">
      home
  我来自store---<span>{name}</span>

    <br />
    <Button onClick={onClick}>改变name为zz</Button>
   
    </div>
  )
}

export default connect((state:any)=>{
  console.log(state.home)
  return state.home
})(Home) 