import React from 'react'
import UserNav from '../component/UserHome/UserNav'
import UserSidebar from '../component/UserHome/UserSidebar'
import Viewport from '../component/UserHome/UserViewport/Viewport'

const UserPage = () => {
  return (
    <>
    <UserNav/>
    <div className="hero-section1">
    <UserSidebar/>
    <Viewport/>
    </div>
    </>
  )
}

export default UserPage
