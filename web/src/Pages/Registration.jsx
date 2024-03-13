import React from 'react'
import NavigationBar from '../component/Navigationbars/navigationbar/NavigationBar'
import NavBarReg from '../component/Navigationbars/navforRegistraion/NavBarReg'
import SignUp from '../component/Signup&Signin/SignUp/SignUp'

const Registration = () => {
  return (
    <>
    <NavBarReg islogin={true}/>
    <SignUp/>
    </>
  )
}

export default Registration