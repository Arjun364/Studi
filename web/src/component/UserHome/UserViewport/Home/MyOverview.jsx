import React from 'react'
import '../../userStyle.css'
import info_icon from '../../../../assets/info_icon.svg'
import calander_icon from '../../../../assets/calander.svg'
import in_progress from '../../../../assets/in_progress.svg'
import compelete_icon from "../../../../assets/complete.svg"
const MyOverview = () => {
    return (
        <>
            <div className="myoverview-container">
                <div className="top-section">
                    <h1 className="title">My overview</h1>
                    <hr className="line" />
                </div>
                <div className="bottom-section">
                    <div className="left-section">
                        <div className="top">
                            <div className="left">
                                Weekly Streak
                                <img src={info_icon} alt="info-icon" />
                            </div>
                            <div className="right">
                                <img src={calander_icon} alt="cal-icon" />
                                Feb
                            </div>
                        </div>
                        <div className="middle">
                            1/4 Weeks
                        </div>
                        <div className="bottom">
                            <div className="days active">
                                sun <span>1</span>
                            </div>
                            <div className="days">
                                mon <span>2</span>
                            </div>
                            <div className="days">
                                tue <span>3</span>
                            </div>
                            <div className="days">
                                wed <span>4</span>
                            </div>
                            <div className="days">
                                thu <span>5</span>
                            </div>
                            <div className="days">
                                fri <span>6</span>
                            </div>
                            <div className="days">
                                sat <span>7</span>
                            </div>
                        </div>
                    </div>
                    <div className="right-section">
                        <div className="top">
                            <div className="left">
                                <img src={in_progress} alt="clock" />
                            </div>
                            <div className="right">
                                <span className="heading"> 4 Subjects</span>
                                in progress
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="left">
                                <img src={compelete_icon} alt="complete" />
                            </div>
                            <div className="right">
                                <span className="heading">2 subjects</span>
                                completed
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyOverview