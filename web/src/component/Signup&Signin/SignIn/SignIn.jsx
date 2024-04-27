import React, { useState , useContext } from 'react';
import './signin.css';
import { useNavigate } from 'react-router-dom';
import google_icon from '../../../assets/google-icon.svg';
import { auth } from '../../../Config/Firebase'
import { UserContext } from '../../../Store/UserContext';
import { signInWithEmailAndPassword,GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { collection, getDocs, query, where } from 'firebase/firestore';
import {db} from "../../../Config/Firebase"

const SignIn = () => {
    const [optionbar, setOptionbar] = useState(true);
    const [isStudent, setIsStudent] = useState('');
    const [email,SetEmail]= useState("");
    const [pass,SetPass]= useState("");
    const [error,setError]=useState("")
    const [error1,setError1]=useState("")

    const navigate = useNavigate()

  const { user, setUser } = useContext(UserContext);

  //   console.log(user);



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
            const result = await signInWithEmailAndPassword(auth,email,pass)
            const user = result.user
            console.log(user.email)

            const userSnapshot = await getDocs(query(collection(db,"Users"),where("emailID","==",user.email)))

            if(!userSnapshot.empty){
                userSnapshot.forEach((doc)=>{
                    const userID=doc.id;

                    console.log("User ID:", userID);

                    localStorage.setItem("user",JSON.stringify(userID));

                })
            }else{
                console.log("No user found with email:", user.email);
            }

            SetEmail("")
            SetPass("")
            navigate('/userpage');

        } catch(err){
            if(err.code= "auth/invalid-credential"){
                setError("Invaild Email or Password.")
                console.log(err);
            }
        } 
    }

    // console.log(auth.currentUser)

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
