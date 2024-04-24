import React ,{ useState } from 'react'
import UserNav from '../component/UserHome/UserNav'
import UserSidebar from '../component/UserHome/UserSidebar'
import Viewport from '../component/UserHome/UserViewport/Viewport'

const UserPage = () => {
  const [active,setActive]=useState("Home");

  const handleMenuChange = (menu) => {
    setActive(menu);
  }
  
  return (
    <>
    <UserNav active={active} />
    <div className="hero-section1">
    <UserSidebar active={active} onMenuChange={handleMenuChange}/>
    <Viewport menuActive={active} />
    </div>
    </>
  )
}

export default UserPage
