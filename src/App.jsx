
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Profile from './components/Profile'
import WorkInterest from './components/WorkInterest'
import SkillsSection from './components/skills'
import Technologie from './components/technologies'
import Contact from './components/contact'
const App = () => {
  return (
   <main>
    <Navbar/>
    <Hero/>
    <Projects/>
    <Profile/>
    <WorkInterest/>
    {/* <SkillsSection/> */}
    <Technologie/>
    <Contact/>
    
   </main>
  )
   
}

export default App

