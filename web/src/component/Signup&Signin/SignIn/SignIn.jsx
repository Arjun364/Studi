import React, { useState } from 'react';
import './signin.css';
import google_icon from '../../../assets/google-icon.svg';

const SignIn = () => {
    const [optionbar, setOptionbar] = useState(true);
    const [isStudent, setIsStudent] = useState('');

    const handleButtonClick = (role) => {
        setIsStudent(role);
        setOptionbar(false);
    };

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
                                <input type="text" name="email" id="email" className='txt-box-style' placeholder='Email' />
                                <input type="password" name="pass" id="pass" className='txt-box-style' placeholder='Password' />
                                <button className='btn btn-text-style'>Sign In</button>
                            </div>
                            <div className="Other-options">
                                <div className="or"><hr />or<hr /></div>
                                <div className="google">
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
