import React, { useState } from 'react';
import './ProfileCreation.css';
import img_1 from '../../../assets/Profile_Creation_img.svg';
import cross from '../../../assets/cross.svg';
import student from '../../../assets/student-icon.svg';
import staff from '../../../assets/staff-icon.svg';
import student_gray from '../../../assets/student-icon-gray.svg';
import staff_orange from '../../../assets/staff-icon-orange.svg';
import { useNavigate } from 'react-router-dom';
import { db } from '../../../Config/Firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

const ProfileCreation = () => {
  const [selectedOption, setSelectedOption] = useState('student');
  const [codeInput, setCodeInput] = useState('');
  const [error,setError]=useState()
  const navigate = useNavigate();

  const handlingRole = async () => {
    let collectionName = '';
    if (selectedOption === 'student') {
      collectionName = 'CandidateCodes';
    } else {
      collectionName = 'StaffCodes';
    }
    console.log(codeInput)
    try{
      const codesCollection = collection(db, collectionName);
      const codeQuery = query(codesCollection, where('code', '==', codeInput));
      const querySnapshot = await getDocs(codeQuery);
      if (!querySnapshot.empty) {
        console.log('Code found in the collection.');
        setError("")
        // Code exists, proceed with your logic
      } else {
        console.log('Code not found in the collection.');
        setError("Invalid "+selectedOption+ " code")
        // Code does not exist, handle accordingly (e.g., display error message)
      }
      
    }catch(err){
      console.log(err)
    }
    finally{
      // setCodeInput(''); // Reset codeInput field after handling
    }

  };
  
  return (
    <>
      <div className="Prof-creation-container">
        <div className="context-container">
          <div className="top-section">
            <img src={cross} alt="Exit" onClick={() => navigate('/')} />
          </div>
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
                    <input type="radio" name="role" id="student" className='radio-btn' checked={selectedOption === 'student'} onChange={() => setSelectedOption('student')}/>
                    Student
                  </label>
                </div>
                <div className="staff box" onClick={() => setSelectedOption('staff')}>
                  <div className={selectedOption === 'student' ? 'box-deactive' : 'box-active'}>
                    <img src={selectedOption === 'student' ? staff : staff_orange} alt="staff" style={{ color: 'gray' }} />
                  </div>
                  <label htmlFor="staff" className={selectedOption === 'staff' ? 'active' : ''}>
                    <input type="radio" name="role" id="staff" className='radio-btn' checked={selectedOption === 'staff'} onChange={() => setSelectedOption('staff')}/>
                    Staff
                  </label>
                </div>
              </div>
              <form className='input-Section'>
                <input type="text" placeholder={selectedOption === 'student' ? 'Enter the Candidate code' : 'Enter the Staff code'} value={codeInput} onChange={(e) => setCodeInput(e.target.value)} />
                {error?<span className='errMsg'>{error}</span>:<></>}
                <button type="button" onClick={handlingRole}>Confirm</button>
              </form>
            </div>
          </div>
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
