import React from 'react'
import './navbarReg.css'
import Home_icon from '../../../assets/Home.svg'
import { useNavigate } from 'react-router-dom'

const NavBarReg = ({islogin}) => {
    const navigate =useNavigate()
    

  return (
    <>
    <div className="nav-container-1">
        <div className="left-container">
        <span className="logo">STUDI</span>
        </div>
        <div className="right-container">
            <button className='btn btn-text-style' onClick={()=>{islogin?navigate('/login'):navigate('/registration')}}> {islogin? 'login' :'register'}</button>
            <img src={Home_icon} style={{cursor:"pointer"}} alt="Home" id='Home-icon' onClick={()=>{navigate('/')}}/>
        </div>
    </div>
    </>
  )
}

export default NavBarReg