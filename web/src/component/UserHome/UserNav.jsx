import React, { useState } from 'react'
import './userStyle.css'
import bell_icon from '../../assets/bell-icon.svg'
import profile_icon from '../../assets/profile-icon.svg'
import set_icon from '../../assets/setting-icon.svg'

const UserNav = ({active}) => {
  return (
        <>
        <div className='user-nav'>
            <div className="left-section">
                <h1>Studi</h1>
            </div>
            <div className="middle-section">
                <span className="title-name">{active}</span>
            </div>
            <div className="right-section">
                <div className="notificationbar">
                    <img src={bell_icon} alt="notification" />
                </div>
                <div className="profile-details">
                <div className="leftside">
                    <img src={profile_icon} alt="profile" />
                    <div className="text-container">
                    <span className='main-title'>Profile name</span>
                    <span className='sub-title'>Email Address</span>
                    </div>
                </div>
                <div className="rightside">
                    <img src={set_icon} alt="setting" />
                    
                </div>
                </div>
            </div>
        </div>
        </>
  )
}

export default UserNav
