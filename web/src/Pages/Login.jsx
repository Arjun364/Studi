import {React} from 'react'
import NavBarReg from '../component/Navigationbars/navforRegistraion/NavBarReg'
import SignIn from '../component/Signup&Signin/SignIn/SignIn'




const Login = () => {

  return (
    <>
    <NavBarReg islogin={false}/>
    <SignIn/>
    </>
  )
}

export default Login