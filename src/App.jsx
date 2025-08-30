import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Projects from './components/Project'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}
