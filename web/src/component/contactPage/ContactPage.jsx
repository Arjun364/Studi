import React from 'react'
import './contactpage.css'
import { FaEnvelope, FaInstagram , FaLinkedin } from "react-icons/fa";

function ContactPage() {
  return (
    <>
    <div className="contact-container">
        <div className="top-section">
            <span className="normal-text-style">Get in Touch</span>
            <span className="heading1">Contact us</span>
        </div>
        <div className="bottom-section">
        <div className="email icons normal-text-style"><FaEnvelope className='icon'/>Studi@gmail.com</div>
        <div className="instagram icons normal-text-style"><FaInstagram className='icon' />Studi__</div>
        <div className="linkedin icons normal-text-style"><FaLinkedin className='icon' />Linkedin</div>
        </div>
    </div>
    </>
  )
}

export default ContactPage