import React, { useEffect, useState } from 'react'
import "../../userStyle.css"
import adobeIcon from "../../../../assets/drive-pdf.png"
import downloadIcon from "../../../../assets/download.png"
import backIcon from "../../../../assets/back.svg" 

const Subject = ({ onBackButtonClick }) => {


    const [subject,setSubject]=useState()
    const handleSub=()=>{
        
        onBackButtonClick();

    }

    useEffect(()=>{
        const items = JSON.parse(localStorage.getItem('sub'));
        if (items) {
          setSubject(items)
        }
    },[])
  return (
   <>
   <div className="subjects">
   <div className="subject-name-container">
            <div className="top-section">
                <div className="title"><img src={backIcon} alt="back" onClick={handleSub} />{subject}</div>
                <hr className="line" />
            </div>
            <div className="bottom-section">
                <div className="modules module-active">Module 1</div>
                <div className="modules">Module 2</div>
                <div className="modules">Module 3</div>
                <div className="modules">Module 4</div>
                <div className="modules">Module 5</div>
                <div className="modules">Module 6</div>
            </div>
        </div>
        <div className="subject-details-container">
              <div className="menulist">
              <div className="nav">
                <a  className="hovering">Pdf Notes</a>
                <a  className="hovering">Youtube Links</a>
                <a  className="hovering">Prepared Notes</a>
                <a  className="hovering">Comments</a>
            </div>
            <hr className='line'/>
            </div>
            <div className="bottom">
                <div className="note">
                    <div className="notes">
                        <div className="left-side">
                            <img src={adobeIcon} alt="Pdf icon" />
                            <p className="text"> Note 1.pdf</p>
                        </div>
                        <div className="right-side">
                            <img src={downloadIcon} alt="Download icon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
   </div>

   </>
  )
}

export default Subject
