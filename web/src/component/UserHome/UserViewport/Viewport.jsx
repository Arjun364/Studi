import React, { useState } from 'react'
import '../userStyle.css'
import MyOverview from './Home/MyOverview'
import Studymaterial from './Course/Studymaterial'
import ProfilePop from '../ProfilePop'

const viewport = ({menuActive,select}) => {
    const menu= menuActive
    const [subActive,setSubActive]=useState()

  return (
    <>
    <div className="viewport-container">
        <ProfilePop select={select}/>
        {menu==="Home"?<MyOverview />:<></>}
        {menu==="Course"?<Studymaterial />:<></>}
        {menu==="Assignment"?<Studymaterial />:<></>}
        {menu==="Event"?<Studymaterial />:<></>}
        {menu==="Settings"?<Studymaterial />:<></>}
    </div>
    </>
  )
}

export default viewport