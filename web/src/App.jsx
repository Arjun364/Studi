import { useState } from 'react'
import './component/commonCss.css'
import './App.css'
import Home from './Pages/Home.jsx';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Registration from './Pages/Registration.jsx';
import Login from './Pages/Login.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='registration' element={<Registration/>} />
      <Route path='login' element={<Login/>} />
    </Routes>
    </BrowserRouter>
    
    </>

  )
}

export default App
