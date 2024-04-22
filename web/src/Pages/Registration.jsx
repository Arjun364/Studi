import React, { useState } from 'react';
import NavBarReg from '../component/Navigationbars/navforRegistraion/NavBarReg';
import SignUp from '../component/Signup&Signin/SignUp/SignUp';
import ProfileCreation from '../component/Signup&Signin/ProfileCreation/ProfileCreation';

const Registration = () => {
  const [signupCompleted, setSignupCompleted] = useState(false);
  const[isProfileCreation,setisProfilecreation] =useState(false)
  // Function to handle signup completion
  const handleSignupCompletion = () => {
    setSignupCompleted(true);
    setisProfilecreation(true);
  };

  return (
    <>
      <NavBarReg islogin={true} isProfileCreation={isProfileCreation}/>
      {/* Render either SignUp or ProfileCreation based on signupCompleted state */}
      {signupCompleted ? <ProfileCreation /> : <SignUp onSignupComplete={handleSignupCompletion} />}
    </>
  );
};

export default Registration;
