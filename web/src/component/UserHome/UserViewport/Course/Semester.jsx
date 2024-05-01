import React, { useState } from 'react'


const Semester = ({sem}) => {
  const [selected,setSelected]=useState(false);
  return (
    <>
        <div className="semester-container">
          <div className="cover-section">
            <h1 className="title">{sem}</h1>
          </div>
        </div>
    </>
  );
}

export default Semester