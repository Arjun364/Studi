import React, { useState } from 'react'
import './NavStyle.css'
import { useNavigate } from 'react-router-dom'



function NavigationBar() {
    const [menu,setMenu]=useState("home")
    const navigate =useNavigate()
    const menulist ='true'

    return (
        <>
            <div className="nav-container">
                <div className="left-section">
                    <span className="logo">STUDI</span>
                </div>
                <div className="middle-section">
                    <ul className="menu-list">
                        <li onClick={()=>{setMenu("home")}}><a className='navigation-Text-Style' href="#">Home{menu==="home"?<hr className='active'/>:<hr className='deactive'/>}</a></li>
                        <li onClick={()=>{setMenu("about")}}><a className='navigation-Text-Style' href="#about">About{menu==="about"?<hr className='active'/>:<hr className='deactive'/>}</a></li>
                        <li onClick={()=>{setMenu("services")}}><a className='navigation-Text-Style' href="#service">Services {menu==="services"?<hr className='active'/>:<hr className='deactive'/>}</a></li>
                        <li onClick={()=>{setMenu("contact")}}><a className='navigation-Text-Style' href="#contact">contact us {menu==="contact"?<hr className='active'/>:<hr className='deactive'/>}</a></li>
                    </ul>
                </div>
                <div className="right-section">

                    <button className="btn btn-text-style" onClick={()=>{navigate('registration')}}>Get Started </button>
                    {/* icon - Home */}
                    {/* <FaHome className='icon'/> */}
                </div>
            </div>
        </>
    )
}

export default NavigationBar