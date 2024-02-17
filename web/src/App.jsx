import { useState } from 'react'
import './App.css'
import NavigationBar from './component/navigationbar/NavigationBar'
import HeroPage from './component/heroPage/HeroPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavigationBar/>
    <HeroPage/>
    </>
  )
}

export default App
