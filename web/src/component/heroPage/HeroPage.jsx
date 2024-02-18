import React from 'react'
import './heropage.css'
import illustration1 from '../../assets/img1.svg'
function HeroPage() {
    return (
        <>
            <div className="hero-section" id='home'>
                <div className="left-section">
                    <img src={illustration1} alt="illustration ont loading " srcset="" />

                </div>
                <div className="right-section">
                    <div className="content">
                        <div className=" main-heading heading1">
                            <div className="upper-section">
                                <span>“A problem defined is a problem</span>
                                <span>“Purpose of education is to make</span>
                            </div>
                            <div className="lower-section">
                                <span> half solved”</span>
                                <span> minds not career”</span>
                            </div>
                        </div>
                        <div className="overview-section normal-text-style">
                            We are here to help you reduce the complexity of
                            your learnings and also makes it easier.
                        </div>
                    </div>
                    <button className="btn btn-text-style">Learn more</button>
                </div>
            </div>
        </>
    )
}

export default HeroPage