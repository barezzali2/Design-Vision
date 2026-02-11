import React, { useState } from 'react'
import { motion } from "framer-motion"
import { useTranslation } from 'react-i18next'
import Button from '../Button';

function ProjectsPage() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useTranslation();

  function handleExpand() {
    setIsExpanded((prev) => !prev)
  }


  const projectListObj = t('projects.projectsList', {returnObjects: true})
  const projectsList = Object.values(projectListObj)

  return (
    <motion.div 
    className='mt-20 md:mt-15 mx-auto px-4 max-w-6xl w-[93%] lg:w-full mb-15 lg:mb-20'
    initial={{ opacity: 0, y:30 }}
    whileInView={{ opacity: 1, y:0 }}
    viewport={{once: true}}
    transition={{duration: 1.4}}
    >

      <header className='text-center mb-12'>
        <h1 className='text-[25px] md:text-4xl font-extrabold text-white mb-6'>
          {t('projects.title')}
        </h1>
        <p className='text-lg text-gray-500 max-w-3xl mx-auto'>
          {t('projects.subTitle')}
        </p>
      </header>


    <div className='grid grid-cols-1 md:grid md:grid-cols-3 gap-20 mb-20 lg:mb-20'>
      {isExpanded ? 
      (projectsList.slice().map((project, index) => (
          <div key={index} className='items-center justify-center text-center h-auto mt-10 bg-gray-800 rounded-xl cursor-pointer pb-5 group overflow-hidden'>
          <img src={project.image} alt={index} className='mx-auto mb-6 rounded-t-xl md:group-hover:scale-[1.080] md:hover:transition-transform duration-400 ease-in-out'/>
          <h2 className='text-xl mb-3 font-medium'>{project.title}</h2>
          <h4 className='text-[15px] mb-3'>{project.field}</h4>
          <p className='text-sm'>{project.description}</p>
        </div>
    ))) : (projectsList.slice(0, Math.ceil(projectsList.length / 2)).map((project, index) => (
          <div key={index} className='items-center justify-center text-center h-auto mt-10 bg-gray-800 rounded-xl cursor-pointer pb-5 group overflow-hidden'>
          <img src={project.image} alt={index} className='mx-auto mb-6 rounded-t-xl md:group-hover:scale-[1.080] md:hover:transition-transform duration-400 ease-in-out'/>
          <h2 className='text-xl mb-3 font-medium'>{project.title}</h2>
          <h4 className='text-[15px] mb-3'>{project.field}</h4>
          <p className='text-sm'>{project.description}</p>
        </div>
    ))
    )
    }
    </div>

    <Button expand={handleExpand} className="bg-[#241f33a2] rounded-xl p-3 border-1 hover:bg-[#0e0c13] transition transform duration-150 cursor-pointer">
      {isExpanded ? "Show Less" : "Show More"}
    </Button>


    </motion.div>
  )
}

export default ProjectsPage