import React from 'react'
import { motion } from "framer-motion"

function ProjectsPage() {
  return (
    <motion.div 
    className='mt-20 md:mt-15 mx-auto px-4'
    initial={{ opacity: 0, y:30 }}
    whileInView={{ opacity: 1, y:0 }}
    viewport={{once: true}}
    transition={{duration: 1.4}}
    >

      <header className='text-center mb-12'>
        <h1 className='text-[25px] md:text-4xl font-extrabold text-white mb-4'>
          Our Cutting Edge Projects
        </h1>
        <p className='text-lg text-gray-500 max-w-3xl mx-auto'>
          Explore our different projects with having an exclusive vision
        </p>
      </header>

    </motion.div>
  )
}

export default ProjectsPage