import React from 'react'
import NavigationBar from '../component/navigationbar/NavigationBar'
import HeroPage from '../component/heroSection/HeroSection'
import AboutPage from '../component/aboutSection/AboutSection'
import ServicePage from '../component/servicePage/ServicePage'
import ContactPage from '../component/contactSection/ContactSection'
import Footer from '../component/footer/Footer'

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