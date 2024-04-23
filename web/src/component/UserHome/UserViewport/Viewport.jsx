import React from 'react'
import '../userStyle.css'
import MyOverview from './Home/MyOverview'
import Studymaterial from './Course/Studymaterial'

const viewport = () => {
  return (
    <>
    <div className="viewport-container">
        {/* <MyOverview/> */}
        <Studymaterial/>
    </div>
    </>
  )
}

export default viewport