import React from 'react'
import './heropage.css'
import illustration1 from '../../assets/img1.svg'
function HeroPage() {
    return (
        <>
            <div className="hero-section">
                <div className="left-section">
                    <img src={illustration1} alt="illustration ont loading " srcset="" />

                </div>
                <div className="right-section">
                    <div className="content">
                        <div className="main-heading">
                            <div className="upper-section">
                                <span>“A problem defined is a problem</span>
                            </div>
                            <div className="lower-section">
                                <span> half solved”</span>
                            </div>
                        </div>
                        <div className="overview-section">
                            We are here to help you reduce the complexity of
                            your learnings and also makes it easier.
                        </div>
                    </div>
                    <button className="btn">Learn more</button>
                </div>
            </div>
        </>
    )
}

export default HeroPage