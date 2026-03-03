import React, { useReducer, useState } from 'react'
import { motion } from "framer-motion"
import { useTranslation } from 'react-i18next'
import Button from '../Button';
import { FaExternalLinkAlt } from "react-icons/fa";


  const initialState = {
    // isExpanded: false,
    selectedType: "all"
  };

  function projectsReducer(state, action) {
    switch(action.type) {
      case 'filter':
        return {
          ...state,
          selectedType: action.payload
        };
        default:
          return state;
    }
  }

function ProjectsPage() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t, i18n } = useTranslation();
  const [state, dispatch] = useReducer(projectsReducer, initialState)
  

  function handleExpand() {
    setIsExpanded((prev) => !prev)
  }

  function handleFilter(filterType) {
    dispatch({ type: 'filter', payload: filterType});
    setIsExpanded(false);
  }


  const projectListObj = t('projects.projectsList', {returnObjects: true})
  const projectsList = Object.values(projectListObj);
  const filterTypes = ["all", ...new Set(projectsList.map((project) => project.field))]
  const filteredProjects = state.selectedType === "all" ? projectsList : projectsList.filter((project) => project.field === state.selectedType);
  const visibleProjects = isExpanded ? filteredProjects : filteredProjects.slice(0, Math.ceil(projectsList.length / 2))


  return (
    <motion.div 
    className='mt-20 md:mt-15 mx-auto px-4 max-w-6xl w-[85%] lg:w-[80%] mb-15 lg:mb-20'
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


    <>
          <div className='mt-5 items-center'>
          {filterTypes.map((type) => (
          <button 
          className={`cursor-pointer bg-gray-800 text-gray-200 hover:bg-gray-900 p-3 px-3 rounded-md m-7 ${state.selectedType === type ? "bg-gray-900 text-white" : "none"}`}
          onClick={() => handleFilter(type)}
          >
            {type === "all" ? i18n.language === "en" && "All" || i18n.language === "ar" && "کل" || i18n.language === "ku" && "هەموو" : type}
          </button>
            ))}

          {/* <button 
          className='cursor-pointer bg-gray-800 text-gray-200 hover:bg-gray-700 p-3 rounded-md m-7'
          onClick={() => handleFilter("Graphic Design")}
          >
            Graphic Design
          </button>

          <button 
          className='cursor-pointer bg-gray-800 text-gray-200 hover:bg-gray-700 p-3 rounded-md m-7'
          onClick={() => handleFilter("UX/UI Design")}
          >
            UX/UI Design
          </button>

          <button 
          className='cursor-pointer bg-gray-800 text-gray-200 hover:bg-gray-700 p-3 rounded-md m-7'
          onClick={() => handleFilter("Web Development")}
          >
            Web Development
            </button>

          <button 
          className='cursor-pointer bg-gray-800 text-gray-200 hover:bg-gray-700 p-3 rounded-md m-7'
          onClick={() => handleFilter("Logo Design")}
          >
            Logo Design
          </button> */}
        </div>

    <div className='grid grid-cols-1 md:grid md:grid-cols-3 gap-20 mb-20 lg:mb-20'>
       {visibleProjects.map((project, index) => (
        <div key={index} className='items-center justify-center text-center h-auto mt-10 bg-gray-800 rounded-xl cursor-pointer pb-5 group overflow-hidden'>
          <img src={project.image} alt={index} className='mx-auto mb-6 rounded-t-xl md:group-hover:scale-[1.060] md:hover:transition-transform duration-400 ease-in-out'/>
          <h2 className='text-xl mb-3 font-medium'>{project.title}</h2>
          <h4 className='text-[15px] mb-3'>{project.field}</h4>
          <a href={project.link} target='blank' className='flex flex-row justify-center items-center text-sm text-indigo-500 lg:hover:text-indigo-400'>
          <FaExternalLinkAlt className={`${i18n.language === "ku" || i18n.language === "ar" ? "ml-2" : "mr-2"}`}/> {t('projects.visitHere')}
          </a>
        </div>
       ))
}

      {/* {isExpanded ? 
      (projectsList.slice().map((project, index) => (
        <div key={index} className='items-center justify-center text-center h-auto mt-10 bg-gray-800 rounded-xl cursor-pointer pb-5 group overflow-hidden'>
          <img src={project.image} alt={index} className='mx-auto mb-6 rounded-t-xl md:group-hover:scale-[1.060] md:hover:transition-transform duration-400 ease-in-out'/>
          <h2 className='text-xl mb-3 font-medium'>{project.title}</h2>
          <h4 className='text-[15px] mb-3'>{project.field}</h4>
          <p className='text-sm mb-5'>{project.description}</p>
          <a href={project.link} target='blank' className='flex flex-row justify-center items-center text-sm text-indigo-500 lg:hover:text-indigo-400'>
          <FaExternalLinkAlt className={`${i18n.language === "ku" || i18n.language === "ar" ? "ml-2" : "mr-2"}`}/> {t('projects.visitHere')}
          </a>
        </div>
    ))) : (projectsList.slice(0, Math.ceil(projectsList.length / 2)).map((project, index) => (
          <div key={index} className='items-center justify-center text-center h-auto mt-10 bg-gray-800 rounded-xl cursor-pointer pb-5 group overflow-hidden'>
          <img src={project.image} alt={index} className='mx-auto mb-6 rounded-t-xl md:group-hover:scale-[1.060] md:hover:transition-transform duration-400 ease-in-out'/>
          <h2 className='text-xl mb-3 font-medium'>{project.title}</h2>
          <h4 className='text-[15px] mb-3'>{project.field}</h4>
          <p className='text-sm mb-5'>{project.description}</p>
          <a href={project.link} target='blank' className='flex flex-row justify-center items-center text-sm text-indigo-500 lg:hover:text-indigo-400'>
          <FaExternalLinkAlt className={`${i18n.language === "ku" || i18n.language === "ar" ? "ml-2" : "mr-2"}`}/> {t('projects.visitHere')}
          </a>
        </div>
    ))
  )
    } */}
    </div>
  </>

    <Button expand={handleExpand} className="bg-gray-800 rounded-xl p-3 hover:bg-gray-900 transition transform duration-150 cursor-pointer">
      {isExpanded ? t('projects.showLessButton') : t('projects.showMoreButton')}
    </Button>


    </motion.div>
  )
}

export default ProjectsPage