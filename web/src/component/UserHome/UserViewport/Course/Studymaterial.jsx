import React from 'react'
import Semester from './Semester'

const Studymaterial = () => {
  return (
    <>
    <div className="studymaterial-container">
        <div className="top-section">
            <h1 className="title">Study Materials</h1>
            <hr className="line" />
        </div>
        <div className="bottom-section">
            <Semester/>
            <Semester/>
            <Semester/>
            <Semester/>
            <Semester/>
            <Semester/>

        </div>
    </div>
    </>
  )
}

export default Studymaterial