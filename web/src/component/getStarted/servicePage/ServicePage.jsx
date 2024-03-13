import React from 'react'
import './servicepage.css'
import { FaChevronCircleRight,FaChevronCircleLeft } from "react-icons/fa";
function ServicePage() {
    return (
        <>
            <div className="service-container" id='service'>
                <div className="top-section">
                    <span className="heading1">Services</span>
                    <hr className="service-lineHoriz" />
                </div>
                <div className="bottom-section">
                    <div className="left-section">
                        <FaChevronCircleLeft className='arrow' />
                    </div>
                    <div className="middle-section">
                        <div className="slider-content">
                            <div className="slider">
                                <span className="heading1" >Services That Elevate Your Educational Experience</span>
                                <p className="normal-text-style">Provide year based and semester based resources.User-friendly learner interface.
                                    Role based access control system.Provide learning history and progress.Provide
                                    flexibility for learners at their own pace ,anywhere and anytime.Ensure the confidentiality
                                    and security of user data.Additional services that assist learner in career planning and
                                    job placement</p>
                            </div>
                        </div>
                    </div>
                    <div className="right-section">
                        <FaChevronCircleRight className='arrow' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServicePage