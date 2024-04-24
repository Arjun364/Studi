import React, { useState } from 'react'
import Semester from './Semester'
import SubjectList from './SubjectList';

const Studymaterial = () => {
  const [state,setstate]=useState(true)
  const [select,setSelect]=useState()
  const semar=[1,2,3,4,5,6]
  const handleClick=(sems)=>{   
   setstate(!state)
   setSelect(sems)
   setTitle()
  }
  return (
    <>
    <div className="studymaterial-container">
        <div className="top-section">
            <h1 className="title">Study materials</h1>
            <hr className="line" />
        </div>
        <div className="bottom-section">
            {state?
              semar.map((sems)=>{
                return(
                  <div key={sems} onClick={()=>handleClick(sems)}>
                    <Semester sem={sems} />
                  </div>
                )
              })
           :<SubjectList sem={select} /> }
        </div>
    </div>
    </>
  )
}

export default Studymaterial