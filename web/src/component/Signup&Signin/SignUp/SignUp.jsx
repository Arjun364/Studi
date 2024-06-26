import React, { useContext, useEffect, useState } from 'react'
import './signup.css'
import { useNavigate } from 'react-router-dom';
import img1 from '../../../assets/SignUpImg-1.svg'
import google_icon from '../../../assets/google-icon.svg'
import { createUserWithEmailAndPassword, sendEmailVerification, signOut, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../../../Config/Firebase'
import { db } from '../../../Config/Firebase'
import { getDocs, collection, addDoc, query, where, setDoc,doc, updateDoc,} from 'firebase/firestore'
import { UserContext } from '../../../Store/UserContext';
import { update } from 'firebase/database';
import userImg from "../../../assets/profile-big-icon.svg"

const SignUp = ({ onSignupComplete }) => {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [confirmPass, setconfirmPass] = useState("")
  const [error, setError] = useState("")
  const [error1, setError1] = useState("")
  // const [userName,setUserName]=useState()
  const { user, setUser } = useContext(UserContext);

  
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()

  const userCollectionRef = collection(db, "Users")
  // const currentUser =auth.currentUser


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
      const credential = await createUserWithEmailAndPassword(auth, email, pass)

      const currentUser = credential.user;
      // console.log(currentUser);

      sendEmailVerification(currentUser)
      // setUserUid(currentUser.uid)
      // setUserName(currentUser.displayName)
      
      
      const UserRef = await addDoc(userCollectionRef,{
        emailID:currentUser.email,
        userName:currentUser.displayName?currentUser.displayName:"profile name",
        photoUrl:currentUser.photoURL,
        // userId:userUid
      })
      
      if(UserRef){
        setUser(UserRef)
        localStorage.setItem("user",JSON.stringify(UserRef.id));
      }

      console.log("Document written with ID: ", UserRef);

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

  // console.log(auth?.currentUser) 



  // const userId = user ? user.id : null;

  const handleSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;

        // Check if the user exists in the "Users" collection
        const userSnapshot = await getDocs(query(collection(db, "Users"), where("emailID", "==", user.email)));

        if (!userSnapshot.empty) {
            // If the user exists, update their data
            const userData = userSnapshot.docs[0].data();
            const userId = userSnapshot.docs[0].id;

            await updateDoc(doc(db, "Users", userId), {
                userName: user.displayName || "profile name",
                photoUrl: user.photoURL,
            });

            setUser(userData);
            localStorage.setItem("user", JSON.stringify(userId));
            navigate("/userpage");
        } else {
            // If the user does not exist, add them to the collection
            const newUserRef = await addDoc(collection(db, "Users"), {
                emailID: user.email,
                userName: user.displayName || "profile name",
                photoUrl: user.photoURL,
            });

            setUser(newUserRef);
            localStorage.setItem("user", JSON.stringify(newUserRef.id));
            navigate('/registration/profile-creation');
            onSignupComplete();
        }
    } catch (err) {
        console.error(err);
    }
};


  useEffect(()=>{


  })

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
