import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProjectsPage from '../components/projects/ProjectsPage'

function Projects() {
  return (
    <div className='items-center text-center justify-center h-[100%]'>
      <Navbar />
      <ProjectsPage />
      <Footer />
    </div>
  )
}

export default Projects