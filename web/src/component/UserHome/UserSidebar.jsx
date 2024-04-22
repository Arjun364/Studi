import React, { useState } from 'react'
import Home_icon from '../../assets/Home-icon.svg'
import Syllabus_icon from '../../assets/syllabus.svg'
import Assignment_icon from '../../assets/assignment-icon.svg'
import Event_icon from '../../assets/icon.svg'
import Setting_icon from '../../assets/setting1-icon.svg'

const UserSidebar = () => {
  const [Active,SetActive]=useState("Home");
  const [pos,setPos]=useState("Home")

  const ActiveHandler =(menu)=>{
    SetActive(menu)
    switch(menu){
      case "Home":
        setPos('3.3rem');
        break;
      case "Course":
        setPos('6.5rem');
        break;
      case "Assignment":
        setPos('9.8rem');
        break;
      case "Event":
        setPos('12.9rem');
        break;
      case "Setting":
        setPos('16.2rem');
        break;
      default :
        setPos('3.3rem');
        break;

    }
  }
  return (
    <>
    <div className="siderbar-container"> 
      <div className="menu-list1">

      <span className='activebar' style={{top:pos}}></span>
      <div id='Home' className={Active === "Home" ?'lio activeMenu':'lio '} 
      onClick={()=>{ActiveHandler("Home")}}>
      <img className={Active === "Home"? 'img-active':''}  src={Home_icon} alt="" />
      Home</div>

      <div id='Course' className={Active === "Course" ?'lio activeMenu':'lio '}
      onClick={()=>{ActiveHandler("Course")}}>
      <img className={Active === "Course"? 'img-active':''} src={Syllabus_icon} alt="" />
      Course</div>

      <div id='Assignment' className={Active === "Assignment" ?'lio activeMenu':'lio '}
      onClick={()=>{ActiveHandler("Assignment")}}>
      <img className={Active === "Assignment"? 'img-active':''} src={Assignment_icon} alt="" />
      Assignment</div>
      
      <div id='Event' className={Active === "Event" ?'lio activeMenu':'lio '}
      onClick={()=>{ActiveHandler("Event")}}>
      <img className={Active === "Event"? 'img-active':''} src={Event_icon} alt="" />
      Event</div>
      
      <div id='Setting' className={Active === "Setting" ?'lio activeMenu':'lio '}
      onClick={()=>{ActiveHandler("Setting")}}>
      <img className={Active === "Setting"? 'img-active':''} src={Setting_icon} alt="" />
      Settings</div>
      </div>
    </div>
    </>
  )
}

export default UserSidebar