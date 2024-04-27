import React, { useState, useContext, useEffect } from 'react';
import './ProfileCreation.css';
import img_1 from '../../../assets/Profile_Creation_img.svg';
import cross from '../../../assets/cross.svg';
import student from '../../../assets/student-icon.svg';
import staff from '../../../assets/staff-icon.svg';
import student_gray from '../../../assets/student-icon-gray.svg';
import staff_orange from '../../../assets/staff-icon-orange.svg';
import { useNavigate } from 'react-router-dom';
import { db } from '../../../Config/Firebase';
import { collection, query, where, getDocs, updateDoc, doc } from 'firebase/firestore';
import { UserContext } from '../../../Store/UserContext';
// import { setUserId } from 'firebase/analytics';


const ProfileCreation = ({}) => {
  const [selectedOption, setSelectedOption] = useState('student');
  const [role, setRole] = useState("student");
  const [selectedRole, setSelctedRole] = useState(false)


  // the profile details usestates
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dep, setDep] = useState("");
  const [gender, setGender] = useState("");
  const [start, setStart] = useState(0);
  const [finish, setFinish] = useState(0);
  const [profilImg, setprofileImg] = useState("");

  // console.log(firstName)
  // console.log(lastName)
  // console.log(dep)
  // console.log(gender)
  // console.log(start)
  // console.log(finish)

  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);



  const userId = user ? user : null;

  const handlingRole = async () => {

    try {

      if (selectedOption === "student") {
        setRole("student")

      } else {
        setRole("staff")
      }

      const userdata = doc(db, "Users", userId);
      await updateDoc(userdata, {
        role: role,
        userID: user
      })

      setSelctedRole(true)

      

    } catch (err) {
      // console.error(err)
    }

    try {


    } catch (err) {
      console.error(err)
    }
    finally {
      // setCodeInput(''); // Reset codeInput field after handling
    }

  };

  useEffect(()=>{

    const items = JSON.parse(localStorage.getItem('user'));
    if (items) {
      // console.log(items);
      setUser(items)
    }
    const handlingprofiledetails= async ()=>{
      setprofileImg()
    }
    handlingprofiledetails()
  },[])

  const handlingSubmit= async()=>{
    
    try{
      const userDetails = doc(db,"Users",userId);
      await updateDoc(userDetails,{
        firstName:firstName,
        lastName:lastName,
        dep:dep,
        gender:gender,
        acadamicStart:start,
        acadamicFinish:finish,
      })

      navigate("/userpage")

    }catch(err){
      console.error(err);
    }
  }

  return (
    <>
      <div className="Prof-creation-container">
        <div className="context-container">
          <div className="top-section">
            <img src={cross} alt="Exit" onClick={() => navigate('/')} />
          </div>
          {selectedRole ?
            <div className="profile-details-container">
              <div className="top-section">
                <div className="left-section">
                  <div className="img-container">
                    <img src="" alt="profile-image" />
                  </div>
                </div>
                <div className="right-section">
                  <div className="name-section">
                    <div className="firstName">
                      First Name
                      <input type="text" value={firstName} onChange={(e) => { setFirstName(e.target.value) }} />
                    </div>
                    <div className="lastName">
                      Last Name
                      <input type="text" value={lastName} onChange={(e) => { setLastName(e.target.value) }} />
                    </div>
                  </div>
                  <div className="dept-section">
                    Department specialised.
                    <select name="Department"  onChange={(e) => { setDep(e.target.value) }}>
                      <option value={null}>Select an option</option>
                      <option value="B.Voc Software Development">B.Voc Software Development</option>
                      <option value="Coming soon.">Coming soon.</option>
                      {/* Add more options here if needed */}
                    </select>
                  </div>
                  <div className="gender-section">
                    <label htmlFor="male">
                      <input type="radio" name="gender" id="male" onChange={() => setGender("male")} />
                      Male
                    </label>
                    <label htmlFor="female">
                      <input type="radio" name="gender" id="female" onChange={() => setGender("female")} />
                      Female
                    </label>
                  </div>
                  <div className="acadamic-section">
                    Enter your Acadamic section.
                    <div className="year">
                      <label htmlFor="start">
                        Start at : <input type="number" max='4' id='start' onChange={(e) => { setStart(e.target.value) }} />
                      </label>
                      <label htmlFor="finish">
                        Finish on : <input type="number" max="4" id='start' onChange={(e) => { setFinish(e.target.value) }} />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottom-section">
                <button onClick={handlingSubmit}>Finish</button>
              </div>
            </div> :
            <div className="middle-section">
              <div className="left-section">
                <img className='img1' src={img_1} alt="image" />
              </div>
              <div className="right-section">
                <h1 className="title">Choose Role</h1>
                <div className="roles">
                  <div className="student box" onClick={() => setSelectedOption('student')}>
                    <div className={selectedOption === 'student' ? 'box-active' : 'box-deactive'} >
                      <img src={selectedOption === 'student' ? student : student_gray} alt="student" />
                    </div>
                    <label htmlFor="student" className={selectedOption === 'student' ? 'active' : ''} >
                      <input type="radio" name="role" id="student" className='radio-btn' checked={selectedOption === 'student'} onChange={() => setSelectedOption('student')} />
                      Student
                    </label>
                  </div>
                  <div className="staff box" onClick={() => setSelectedOption('staff')}>
                    <div className={selectedOption === 'student' ? 'box-deactive' : 'box-active'}>
                      <img src={selectedOption === 'student' ? staff : staff_orange} alt="staff" style={{ color: 'gray' }} />
                    </div>
                    <label htmlFor="staff" className={selectedOption === 'staff' ? 'active' : ''}>
                      <input type="radio" name="role" id="staff" className='radio-btn' checked={selectedOption === 'staff'} onChange={() => setSelectedOption('staff')} />
                      Staff
                    </label>
                  </div>
                </div>
                <form className='input-Section'>
                  <button type="button" onClick={handlingRole}>Confirm</button>
                </form>
              </div>
            </div>}
          <div className="bottom-section">
            <hr className='loader' />
            <hr className='loadingPanel' />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCreation;
