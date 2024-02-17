import { useState } from 'react'
import './component/commonCss.css'
import './App.css'
import { Scroll } from "react-scroll";
import NavigationBar from './component/navigationbar/NavigationBar'
import HeroPage from './component/heroPage/HeroPage'
import AboutPage from './component/aboutPage/AboutPage'
import ServicePage from './component/servicePage/ServicePage';
import ContactPage from './component/contactPage/ContactPage';
import Footer from './component/footer/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavigationBar/>
    <HeroPage/>
    <AboutPage/>
    <ServicePage/>
    <ContactPage/>
    <Footer/>
    </>

  )
}

export default App
