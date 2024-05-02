import React from 'react'
import profile_icon from '../../../../assets/profile-icon.svg'
import shield_icon from '../../../../assets/shield.png'


const EditProfile = () => {
  return (
    <>
    <div className="editprofile-container">
        <div className="top-section">
            <h1 className="title">Edit Profile</h1>
            <hr className="line" />
        </div>
        <div className="bottom-section">
            <div className="left-side">
                <img src={profile_icon} alt="profile" />
            </div>
            <div className="right-side">
                <div className="top-side">
                    <label htmlFor="firstName">
                        First Name
                        <input type="text" id='firstName' placeholder='First Name' />
                    </label>
                    <label htmlFor="lastName">
                        Last Name
                        <input type="text" id='lastName' placeholder='Last Name' />
                    </label>
                </div>
                <div className="bottom-side">
                    <label htmlFor="email">
                        <input type="text" id="email" placeholder='emailaddress@gmail.com' />
                        <button className='verify-btn'>verify <img src={shield_icon} alt="verify" /></button>
                    </label>
                    <div className="submit-section">
                        <button className="btn ">Submit</button>
                        <button className="btn cancel-btn">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default EditProfile