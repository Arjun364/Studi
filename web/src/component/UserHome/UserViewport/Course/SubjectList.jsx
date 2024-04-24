import React, { useState } from 'react'

const SubjectList = ({sem}) => {
    const sublistAr=["subject 1","subject 2","subject 3","subject 4","subject 5","subject 6",]

  return (
    <>
    <div className="subjectlist-container">
        <div className="left-section">
            <h1 className="title">Semester {sem}</h1>
        </div>
        <div className="right-section">
            <div className="top">
                <h1 className="title">Subjects</h1>
            </div>
            <div className="bottom">
                <ul>
                    {sublistAr.map((sub)=>{
                        return(
                            <li className='sub-list'>{sub}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default SubjectList