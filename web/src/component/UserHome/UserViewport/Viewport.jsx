import React, { useEffect, useState } from 'react'
import '../userStyle.css'
import MyOverview from './Home/MyOverview'
import Studymaterial from './Course/Studymaterial'
import ProfilePop from '../ProfilePop'
import Subject from './Course/Subject'

const viewport = ({menuActive,select}) => {
    const menu= menuActive
    const [subActive,setSubActive]=useState(false)

  useEffect(()=>{



    // console.log("it is subActive :",subActive);
    // console.log("it is active",active);


  },[])
  
  const handleBackButtonClick = () => {
    setSubActive(false); // Update subActive state when back button is clicked
};
  const handleSubClick = () => {
    setSubActive(true); // Update subActive state when back button is clicked
};

  return (
    <>
    <div className="viewport-container">
        <ProfilePop select={select}/>
        {menu==="Home"?<MyOverview />:<></>}
        {menu==="Course"?(<>{subActive?<Subject onBackButtonClick={ handleBackButtonClick} />:<Studymaterial onSubClick={handleSubClick}/>}</>):<></>}
        {menu==="Assignment"?<Studymaterial />:<></>}
        {menu==="Event"?<Studymaterial/>:<></>}
        {menu==="Settings"?<Studymaterial />:<></>}
    </div>
    </>
  )
}

export default viewport
