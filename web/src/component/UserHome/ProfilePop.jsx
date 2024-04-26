import React from 'react'
import './userStyle.css'
import { useNavigate } from 'react-router-dom';
import  profileIcon from '../../assets/profile-icon.png'
import { useAuth } from '../../Store/AuthContext';
import {signOut} from 'firebase/auth'
import { auth } from '../../Config/Firebase'

const ProfilePop = ({select}) => {

    const { currentUser } = useAuth();
    const navigate =useNavigate();

    const handleLogout = () => {
        signOut(auth)
          .then(() => navigate("/"))
          .catch(error => console.log("Error signing out:", error));
      }
  return (
    <>
      <div className="ProfilePop-container" style={select?{display:"flex"}:{display:"none"}}>
      <div className="top">
        <img src={profileIcon} alt="Profile Icon" />
      </div>
      <div className="second">
        <p className="tittle">{currentUser?.displayName || "Guest"}</p>
        <hr className="line" />
        <p className="email">{currentUser?.email || "guest@example.com"}</p>
      </div>
      <div className="middle">
        <p className="year">First Year</p>
        <p className="dept">B.Voc Software Development</p>
      </div>
      <div className="bottom">
        <div className="upper">Edit Profile</div>
        <div className="lower" onClick={handleLogout}>Logout</div>
      </div>
    </div>
    </>
  )
}

export default ProfilePop