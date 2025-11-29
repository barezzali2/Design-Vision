import React from 'react'
import Navbar from '../components/Navbar'
import ServicesSection from '../components/home/ServicesSection'
import Footer from '../components/Footer'
import ProjectsSection from '../components/home/ProjectsSection'

function Projects() {
  return (
    <div className='items-center text-center justify-center h-[100%]'>
      <Navbar />
      <ProjectsSection />
      <Footer />
    </div>
  )
}

export default Projects