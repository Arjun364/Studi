import React from 'react'
import './aboutpage.css'
import overiewimg from '../../assets/img2.svg'

function AboutPage() {
  return (
    <>
    <div className="about-container" id='about'>
        <span className="heading1">About
        <hr className='about-horzline' />
        </span>
        <div className="content">
            <div className="top-section">
                <ul className="about-list">
                    <li><span className=" subheading list">Overview</span></li>
                    <hr className='line-horz'/>
                    <li><span className="subheading list">Motive</span></li>
                    <hr className='line-horz'/>
                    <li><span className="subheading list">Creators</span></li>
                </ul>
            </div>
            <div className="bottom-section">
                <div className="left-section">
                    <p className="overview-paragraph normal-text-style">
                    In the ever-evolving landscape of education, the significance of digital platforms cannot be overstated. This encapsulates a visionary project aimed at revolutionizing the educational experience within the KSMDB College's Department. The endeavor seeks to establish a comprehensive Departmental Education Platform that serves as an integrated hub for students, faculty, and administrators. The core objective of this project is to enhance the educational journey of the department's students by providing them with a cutting-edge platform that fosters academic excellence, collaboration, and engagement. Furthermore, it aims to streamline administrative tasks, improve communication, and promote innovation within the department.
                    </p>
                </div>
                <div className="right-section">
                    <img className="overview-img" src={overiewimg} alt="" srcset="" />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default AboutPage    