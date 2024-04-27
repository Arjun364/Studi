import React, { useEffect, useState } from 'react'
import './userStyle.css'
import { useNavigate } from 'react-router-dom';
import  profileIcon from '../../assets/profile-icon.png'
import { useAuth } from '../../Store/AuthContext';
import {signOut} from 'firebase/auth'
import { auth } from '../../Config/Firebase'
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../Config/Firebase'


const ProfilePop = ({select}) => {

  const [user,setUser]=useState("");
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [dep, setDep] = useState('');
  const [startDate, setStartDate] = useState(0);
  const [FinishDate, setFinishDate] = useState(0);
  const [year,setYear] = useState()

  const userId = user ? user : null;

  // console.log(user)

  useEffect(()=>{
    const items = JSON.parse(localStorage.getItem('user'));
    if (items) {
      setUser(items)
    }

    const fetchProfileName = async()=>{
      try{
        if (userId) {
          const userDocRef = doc(db, "Users", userId);
          const docSnapShot = await getDoc(userDocRef);
  
          if (docSnapShot.exists()) {
            const userData = docSnapShot.data();
            setFirstName(userData.firstName || 'First Name');
            setLastName(userData.lastName || 'Last Name');
            setEmail(userData.emailID || 'Emailaddress@gmail.com');
            setDep(userData.dep || 'Department Specilaised');
            setStartDate(userData.acadamicStart || null)
            setFinishDate(userData.acadamicFinish || null)
          } else {
            setFirstName('First Name');
            setLastName('Last Name');
            setEmail('Emailaddress@gmail.com');
            setDep('Department Specilaised');
          }

          if(startDate && FinishDate){
            const today= new Date()
            const presentyear= today.getFullYear()
            console.log(presentyear)
            setYear(presentyear-startDate + 1)
            console.log(year)
          }else{
            console.log("The year is not defined",startDate,FinishDate);
          }

          // switch(year){
          //   case 1 : setYear("First")
          //   break;
          //   case 2 : setYear("Second")
          //   break;
          //   case 3 : setYear("Third")
          //   break;
          // }

        }
      }catch(err){
        console.log("error occur on fetching",err)
      }
    }
    fetchProfileName();
  },[userId])

    const { currentUser } = useAuth();
    const navigate =useNavigate();

    const handleLogout = () => {
        signOut(auth)
          .then(() => navigate("/"))
          .then(()=>{localStorage.setItem("user",JSON.stringify(""));})
          .catch(error => console.log("Error signing out:", error));
      }
  return (
    <>
      <div className="ProfilePop-container" style={select?{display:"flex"}:{display:"none"}}>
      <div className="top">
        <img src={profileIcon} alt="Profile Icon" />
      </div>
      <div className="second">
        <p className="tittle">{firstName} {lastName}</p>
        <hr className="line" />
        <p className="email">{email}</p>
      </div>
      <div className="middle">
        <p className="year">{year <=3 ? year:"Graduated"} Year</p>
        <p className="dept">{dep}</p>
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