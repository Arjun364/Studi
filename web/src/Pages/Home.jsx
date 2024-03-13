import React from 'react'
import NavigationBar from '../component/Navigationbars/navigationbar/NavigationBar'
import HeroPage from '../component/getStarted/heroSection/HeroSection'
import AboutPage from '../component/getStarted/aboutSection/AboutSection'
import ServicePage from '../component/getStarted/servicePage/ServicePage'
import ContactPage from '../component/getStarted/contactSection/ContactSection'
import Footer from '../component/getStarted/footer/Footer'
import { Outlet } from 'react-router-dom'

function Home() {
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

export default Home 