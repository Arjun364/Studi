import React from 'react'
import './NavStyle.css'
import { FaHome } from "react-icons/fa";


function NavigationBar() {
    return (
        <>
            <div className="nav-container">
                <div className="left-section">
                    <span className="logo">STUDI</span>
                </div>
                <div className="middle-section">
                    <ul className="menu-list">
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">contact us</a></li>
                    </ul>
                </div>
                <div className="right-section">
                    <button className="btn">Get Started </button>
                    {/* icon - Home */}
                    {/* <FaHome className='icon'/> */}
                </div>
            </div>
        </>
    )
}

export default NavigationBar