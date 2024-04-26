import React, { useContext, useState } from 'react'
import './signup.css'
import { useNavigate } from 'react-router-dom';
import img1 from '../../../assets/SignUpImg-1.svg'
import google_icon from '../../../assets/google-icon.svg'
import { createUserWithEmailAndPassword, sendEmailVerification, signOut, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../../../Config/Firebase'
import { db } from '../../../Config/Firebase'
import { getDocs, collection, addDoc, query, where, setDoc,doc,} from 'firebase/firestore'
import { UserContext } from '../../../Store/UserContext';

const SignUp = ({ onSignupComplete }) => {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [confirmPass, setconfirmPass] = useState("")
  const [error, setError] = useState("")
  const [error1, setError1] = useState("")
  const [userUid,setUserUid]=useState()
  const [userName,setUserName]=useState()
  const {user,setUser}=useContext(UserContext)
  
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()

  const userCollectionRef = collection(db, "Users")


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
      setUserUid(auth.currentUser.uid)
      setUserName(auth.currentUser.displayName)
      
      const UserRef = await addDoc(collection(db,"Users"),{
        emailID:email,
        // userUid:UserRef.id,
      })

      setUser(UserRef)

      console.log("Document written with ID: ", UserRef.id);

      // for sign out the user 
      // signOut(auth)

      // Clear form and error on successful sign up
      setEmail("")
      setPass("")
      setconfirmPass("")
      setError("")

      navigate('/registration/profile-creation');

      // Call the callback to indicate signup completion
      onSignupComplete();
    } catch (err) {
      console.log(err)
      if (err.code == "auth/email-already-in-use") {
        setError("Email taken,try another")
      }
      if (err.code == "auth/missing-password") {
        setError("Password is required")
      }

    } finally {
      setLoading(false) //stop
    }

  }

  console.log(auth?.currentUser) 

  const handleSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider)
      const user = result.user
      console.log(user)

      // Check if the user exists
      const userSnapshot = await getDocs(query(collection(db, "Users"), where("emailID", "==", user.email)));

      if (userSnapshot.empty) {
        // If the user doesn't exist in the "Users" collection, add them
        await addDoc(collection(db, "Users"), {
          emailID: user.email,
          // You can add additional user data here if needed
        });
      }

      onSignupComplete();
      navigate('/registration/profile-creation');

    } catch (err) {
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
              <input type="text" name="email" value={email} id="email" className='txt-box-style' placeholder='Email' onChange={(e) => {
                setEmail(e.target.value)
                setError1("")
              }
              } required />
              {error1 ? <span className="errorMsg">{error1}</span> : ""}
              <input type="password" name="pass" value={pass} id="pass" className='txt-box-style' placeholder='Password' onChange={(e) => {
                setPass(e.target.value)
                setError("")
              }
              } required />
              <input type="text" name="confirmpass" value={confirmPass}
                id="confrimpass" className='txt-box-style' placeholder='Confirm password' onChange={(e) => {
                  setconfirmPass(e.target.value)
                  setError("")
                }
                } required />
              {error ? <span className="errorMsg">{error}</span> : ""}
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