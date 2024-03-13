import React from 'react'
import './signup.css'
import img1 from '../../../assets/SignUpImg-1.svg'
import google_icon from '../../../assets/google-icon.svg'

const SignUp = () => {
  return (
    <>
    <div className="signup-container">
        <div className="signUp-form">
        <img src={img1} alt="Student SignUp"/>
        <div className="form">
            <h1 className="title">Registration</h1>
            <div className="txt-boxs">
            <input type="text" name="email" id="email"  className='txt-box-style'  placeholder='Email'/>
            <input type="password" name="pass" id="pass"  className='txt-box-style'  placeholder='Password'/>
            <input type="text" name="confirmpass" id="confrimpass"  className='txt-box-style'  placeholder='Confirm password'/>
            <button className='btn btn-text-style'>Sign Up</button>
            </div>
            <div className="Other-options">
                <div className="or"><hr />or<hr /></div>
                <div className="google">
                   <img src={google_icon} alt="google logo"  />
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