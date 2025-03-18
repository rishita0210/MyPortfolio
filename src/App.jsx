
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Profile from './components/Profile'
import WorkInterest from './components/WorkInterest'
import SkillsSection from './components/skills'
const App = () => {
  return (
   <main>
    <Navbar/>
    <Hero/>
    <Projects/>
    <Profile/>
    <WorkInterest/>
    <SkillsSection/>
    
   </main>
  )
   
}

export default App

