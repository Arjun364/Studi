import React, { useEffect, useState, useContext} from 'react';
import { UserContext } from '../../Store/UserContext';
import './userStyle.css';
import bell_icon from '../../assets/bell-icon.svg';
import profile_icon from '../../assets/profile-icon.svg';
import profile_white_icon from '../../assets/profile-white-icon.svg';
import set_icon from '../../assets/setting-icon.svg';
import set_white_icon from '../../assets/setting-white-icon.svg';
import { useAuth } from '../../Store/AuthContext';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../Config/Firebase'

const UserNav = ({ active,onSelectChange,select}) => {
  // const [profileName, setProfileName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const { user, setUser } = useContext(UserContext);

  
  
  const userId = user ? user : null;
  // console.log(user)

  // const userId=""


  const handleSelect=(state)=>{
    onSelectChange(state)
  }

  useEffect(() => {

     }, []);

//   console.log(currentUser);
  
useEffect(() => {
  const items = JSON.parse(localStorage.getItem('user'));
  if (items) {
    setUser(items)
  }

  const fetchProfileName = async () => {
    try {
      // Check if userId is defined before fetching profile data
      if (userId) {
        const userDocRef = doc(db, "Users", userId);
        const docSnapShot = await getDoc(userDocRef);

        if (docSnapShot.exists()) {
          const userData = docSnapShot.data();
          setFirstName(userData.firstName || 'First Name');
          setLastName(userData.lastName || 'Last Name');
          setEmail(userData.emailID || 'Emailaddress@gmail.com');
        } else {
          setFirstName('First Name');
          setLastName('Last Name');
          setEmail('Emailaddress@gmail.com');
        }
      }
    } catch (err) {
      console.error('Error fetching profile name:', err);
    }
  };

  fetchProfileName();
}, [userId]);



  return (
    <>
      <div className='user-nav'>
        <div className='left-section'>
          <h1>Studi</h1>
        </div>
        <div className='middle-section'>
          <span className='title-name'>{active}</span>
        </div>
        <div className='right-section'>
          <div className='notificationbar'>
            <img src={bell_icon} alt='notification' />
          </div>
          <div className='profile-details' onClick={()=>{handleSelect(!select)}} style={select?{width:'5rem',gap:"0rem",backgroundColor:"#545454" }:{width:" 14.563rem",gap:"1rem"}}>
            <div className='leftside'>
            {select ? <img src={profile_white_icon} alt='profile' /> : <img src={profile_icon} alt='alternate profile' />}
              <div className='text-container' style={select?{display:"none",opacity:"0"}:{display:"flex",opacity:"1"}}>
                <span className='main-title'>{firstName} {lastName}</span>
                <span className='sub-title'>{email}</span>
              </div>
            </div>
            <div className='rightside'>
            {select? <img src={set_white_icon} alt='setting' />:<img src={set_icon} alt='setting' />}
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserNav;
