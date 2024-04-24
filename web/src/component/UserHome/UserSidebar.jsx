import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Home_icon from '../../assets/Home-icon.svg'
import Syllabus_icon from '../../assets/syllabus.svg'
import Assignment_icon from '../../assets/assignment-icon.svg'
import Event_icon from '../../assets/icon.svg'
import Setting_icon from '../../assets/setting1-icon.svg'

const UserSidebar = ({active, onMenuChange}) => {
  const [pos,setPos]=useState("Home")

  const ActiveHandler =(menu)=>{
    onMenuChange(menu);

    switch(menu){
      case "Home":
        setPos('3.8rem');
        break;
      case "Course":
        setPos('7.8rem');
        break;
      case "Assignment":
        setPos('11.8rem');
        break;
      case "Event":
        setPos('15.7rem');
        break;
      case "Settings":
        setPos('19.8rem');
        break;
      default :
        setPos('5.3rem');
        break;

    }
  }
  return (
    <>
    <div className="siderbar-container"> 
      <div className="menu-list1">

      <span className='activebar' style={{top:pos}}>9</span>
      
      <Link to='/userpage/home'><div id='Home' className={active === "Home" ?'lio activeMenu':'lio '} 
      onClick={()=>{ActiveHandler("Home")}}>
      <img className={active === "Home"? 'img-active':''}  src={Home_icon} alt="" />
      Home</div></Link>

      <Link to='/userpage/course'><div id='Course' className={active === "Course" ?'lio activeMenu':'lio '}
      onClick={()=>{ActiveHandler("Course")}}>
      <img className={active === "Course"? 'img-active':''} src={Syllabus_icon} alt="" />
      Course</div></Link>

      <Link to='/userpage/assignment'><div id='Assignment' className={active === "Assignment" ?'lio activeMenu':'lio '}
      onClick={()=>{ActiveHandler("Assignment")}}>
      <img className={active === "Assignment"? 'img-active':''} src={Assignment_icon} alt="" />
      Assignment</div></Link>
      
      <Link to='/userpage/event'><div id='Event' className={active === "Event" ?'lio activeMenu':'lio '}
      onClick={()=>{ActiveHandler("Event")}}>
      <img className={active === "Event"? 'img-active':''} src={Event_icon} alt="" />
      Event</div></Link>
      
      <Link to='/userpage/settings'><div id='Setting' className={active === "Settings" ?'lio activeMenu':'lio '}
      onClick={()=>{ActiveHandler("Settings")}}>
      <img className={active === "Settings"? 'img-active':''} src={Setting_icon} alt="" />
      Setting</div></Link>
      </div>
    </div>
    </>
  )
}

export default UserSidebar
