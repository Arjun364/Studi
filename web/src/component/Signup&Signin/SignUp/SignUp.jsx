import React, { useState } from 'react'
import './signup.css'
import img1 from '../../../assets/SignUpImg-1.svg'
import google_icon from '../../../assets/google-icon.svg'
import { createUserWithEmailAndPassword, sendEmailVerification,signOut,GoogleAuthProvider, signInWithPopup  } from 'firebase/auth'
import { auth } from '../../../Config/Firebase'

const SignUp = () => {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [confirmPass, setconfirmPass] = useState("")
  const [error,setError]=useState("")
  const [error1,setError1]=useState("")
  const [loading, setLoading] = useState(true)


  const SignUp = async () => {  
    if (!email.includes('@') || !email.includes('.')) {
      setError1("Invalid email format.")
      
      return
    }

    if (pass !== confirmPass) {
      setError("The password Doesn't match.")
      return;
    }


    try {
      await createUserWithEmailAndPassword(auth, email, pass)
      sendEmailVerification(auth.currentUser)
      // for sign out the user 
      // signOut(auth)

      // Clear form and error on successful sign up
      setEmail("")
      setPass("")
      setconfirmPass("")
      setError("")
    } catch (err) {
      console.log(err)
      if (err.code=="auth/email-already-in-use") {
        setError("Email taken,try another")
      }
      if (err.code=="auth/missing-password") {
        setError("Password is required")
      }
      
    } finally{
      setLoading(false) //stop
    }

  }

  console.log(auth?.currentUser)
 
  const handleSignInWithGoogle = async()=>{
    const provider = new GoogleAuthProvider();

    try{
      const result = await signInWithPopup(auth,provider)
      const user=result.user
      console.log(user)

    }catch(err){
      console.error(err)
    }
  }

  return (
    <>
      <div className="signup-container">
        <div className="signUp-form">
          <img src={img1} alt="Student SignUp" />
          <div className="form">
            <h1 className="title">Registration</h1>
            <div className="txt-boxs">
              <input type="text" name="email" value={email} id="email" className='txt-box-style' placeholder='Email' onChange={(e) =>{ 
                setEmail(e.target.value)
                setError1("")}
                } required/>
              {error1?<span className="errorMsg">{error1}</span>:""}
              <input type="password" name="pass" value={pass} id="pass" className='txt-box-style' placeholder='Password' onChange={(e) => {
                setPass(e.target.value)
                setError("")
              }
            } required/>
              <input type="text" name="confirmpass" value={confirmPass}
                id="confrimpass" className='txt-box-style' placeholder='Confirm password' onChange={(e) => {setconfirmPass(e.target.value)
                setError("")
                }
                } required/>
                {error?<span className="errorMsg">{error}</span>:""}
              <button className='btn btn-text-style' onClick={SignUp}>Sign Up</button>
            </div>
            <div className="Other-options">
              <div className="or"><hr />or<hr /></div>
              <div className="google" onClick={handleSignInWithGoogle}>
                <img src={google_icon} alt="google logo" />
                Continue With Google
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp