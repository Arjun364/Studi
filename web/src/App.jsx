import { useState } from 'react'
import './component/commonCss.css'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProfileCreation from './component/Signup&Signin/ProfileCreation/ProfileCreation.jsx';
import Home from './Pages/Home.jsx';
import Login from './Pages/Login.jsx';
import Registration from './Pages/Registration.jsx';
import UserPage from './Pages/UserPage.jsx';
import UserProvider from './Store/UserContext.jsx';
import { AuthProvider } from './Store/AuthContext.jsx';
// import Viewport from '../src/component/UserHome/UserViewport/Viewport.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <UserProvider>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/registration' element={<Registration />}>
            <Route path='profile-creation' element={<ProfileCreation/>} />
          </Route>
          <Route path='login' element={<Login />} />
          <Route path='userpage' element={<UserPage />}>
            <Route index path='home' element={<UserPage />}/>
            <Route path='course' element={<UserPage />}/>
            <Route path='assignment' element={<UserPage />}/>
            <Route path='event' element={<UserPage />}/>
            <Route path='settings' element={<UserPage />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
    </UserProvider>

    </>

  )
}

export default App
