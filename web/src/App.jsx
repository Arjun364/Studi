import { useState } from 'react'
import './component/commonCss.css'
import './App.css'
import { Scroll } from "react-scroll";
import Home from './Pages/Home.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/>
    </>

  )
}

export default App
