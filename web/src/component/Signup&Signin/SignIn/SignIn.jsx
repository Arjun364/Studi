import React, { useState } from 'react';
import './signin.css';
import { useNavigate } from 'react-router-dom';
import google_icon from '../../../assets/google-icon.svg';
import { auth } from '../../../Config/Firebase'
import { signInWithEmailAndPassword,GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const SignIn = () => {
    const [optionbar, setOptionbar] = useState(true);
    const [isStudent, setIsStudent] = useState('');
    const [email,SetEmail]= useState("");
    const [pass,SetPass]= useState("");
    const [error,setError]=useState("")
    const [error1,setError1]=useState("")

    const navigate = useNavigate()


    const handleButtonClick = (role) => {
        setIsStudent(role);
        setOptionbar(false);
    };

    // Login with email and password----

    const sigin=async()=>{
        if (!email.includes('@') || !email.includes('.')) {
            setError1("Invalid email format.")
            
            return
          }
        try{
            await signInWithEmailAndPassword(auth,email,pass)
            SetEmail("")
            SetPass("")
            navigate('/userpage');

        } catch(err){
            if(err.code= "auth/invalid-credential"){
                setError("Invaild Email or Password.")
            }
        } 
    }

    console.log(auth.currentUser)

    // Login with google account-----
    const handleSignInWithGoogle = async()=>{
        const provider = new GoogleAuthProvider();
    
        try{
          const result = await signInWithPopup(auth,provider)
          const user=result.user
          console.log(user)
          navigate('/userpage');
    
        }catch(err){
          console.error(err)
        }
      }
    return (
        <>
            <div className="signin-container">
                <div className="signin-form" style={optionbar?{height:'10rem'}:{height:'30rem'}}>
                    {optionbar ?
                        <div className="isStaffStudent">
                            Are you a student or staff ?
                            <div className="btns">
                                <button className="btn btn-text-style" onClick={() => handleButtonClick("student")}>Student</button>
                                <button className="btn btn-text-style" id='btn2' onClick={() => handleButtonClick("staff")}>Staff</button>
                            </div>
                        </div>
                        :
                        <div className="login-form">
                            <h1 className="title">Login</h1>
                            <div className="txt-boxs">
                                <input type="text" name="email" id="email" className='txt-box-style' placeholder='Email' value={email} onChange={(e)=>{SetEmail(e.target.value)
                                setError1("")
                                setError("")}} />
                                {error1?<span className="errorMsg">{error1}</span>:""}
                                <input type="password" name="pass" id="pass" className='txt-box-style' placeholder='Password' value={pass} onChange={(e)=>{SetPass(e.target.value)
                                setError("")}} />
                                {error?<span className="errorMsg">{error}</span>:""}
                                <button className='btn btn-text-style' onClick={sigin}>Sign In</button>
                            </div>
                            <div className="Other-options">
                                <div className="or"><hr />or<hr /></div>
                                <div className="google" onClick={handleSignInWithGoogle}>
                                    <img src={google_icon} alt="google logo" />
                                    Continue With Google
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    );
};

export default SignIn;
