import React, { useEffect, useReducer, useRef, useState } from 'react'
import { motion } from "framer-motion"
import { useTranslation } from 'react-i18next'
import Button from '../Button';
import { FaExternalLinkAlt, FaFilter } from "react-icons/fa";


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
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const [state, dispatch] = useReducer(projectsReducer, initialState)
  const currentLang = (i18n.resolvedLanguage || i18n.language || 'en').split('-')[0];
  

  function handleExpand() {
    setIsExpanded((prev) => !prev)
  }

  function handleFilter(filterType) {
    dispatch({ type: 'filter', payload: filterType});
    setIsExpanded(false);
    setIsFilterOpen(false);
  }

  function toggleFilterPanel() {
    setIsFilterOpen((prev) => !prev)
  }

  const getTypeLabel = (type) => (
    type === "all"
      ? currentLang === "en" && "All" || currentLang === "ar" && "کل" || currentLang === "ku" && "هەموو"
      : type
  );

  const projectListObj = t('projects.projectsList', {returnObjects: true})
  const projectsList = Object.values(projectListObj);
  const filterTypes = ["all", ...new Set(projectsList.map((project) => project.field))]
  const filteredProjects = state.selectedType === "all" ? projectsList : projectsList.filter((project) => project.field === state.selectedType);
  const visibleProjects = isExpanded ? filteredProjects : filteredProjects.slice(0, Math.ceil(projectsList.length / 2))


  return (
    <motion.div 
    className='mt-20 md:mt-15 mx-auto px-4 max-w-6xl w-[95%] lg:w-[80%] mb-15 lg:mb-20'
    initial={{ opacity: 0, y:30 }}
    whileInView={{ opacity: 1, y:0 }}
    viewport={{once: true}}
    transition={{duration: 1.4}}
    >

      <header className='text-center mb-12 mx-4'>
        <h1 className='text-[25px] md:text-4xl font-extrabold text-white mb-6'>
          {t('projects.title')}
        </h1>
        <p className='text-lg text-gray-500 max-w-3xl mx-auto'>
          {t('projects.subTitle')}
        </p>
      </header>


    <>

      {/* Filter panel (mobile + tablet) */}
      <div className='lg:hidden w-[90%] md:w-[70%] mx-auto relative'>
        <button
          type='button'
          onClick={toggleFilterPanel}
          aria-expanded={isFilterOpen}
          className='w-full md:w-auto mx-auto flex items-center justify-center gap-3 bg-indigo-500 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-indigo-400 transition'
        >
          <FaFilter className='text-sm' />
          {t('projects.filterButton')}
        </button>

        <div
          className={`absolute left-0 right-0 top-full mt-4 z-20 transform transition-all duration-200 ${isFilterOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}
        >
          <div className='bg-[#0c1220] border border-indigo-400/40 rounded-3xl p-6 md:p-8 shadow-lg'>
            <h3 className='text-white text-lg font-semibold mb-4'>
              {t('projects.filterTypesHeading')}
            </h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              {filterTypes.map((type) => (
                <button
                  key={type}
                  type='button'
                  onClick={() => handleFilter(type)}
                  className={`w-full text-left px-4 py-3 rounded-2xl border transition ${state.selectedType === type ? "bg-indigo-500 text-white border-indigo-400" : "bg-[#11192a] text-gray-200 border-transparent hover:border-indigo-400/40 hover:bg-[#0b101b]"}`}
                >
                  {getTypeLabel(type)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Default filter options (large screens) */}
      <div className='hidden lg:flex lg:flex-wrap lg:justify-center text-[13px] lg:text-[16px] lg:mt-5 lg:items-center'>
        {filterTypes.map((type) => (
          <button 
            key={type}
            className={`border-1 border-indigo-400 cursor-pointer hover:bg-[#0b101b] p-2 md:p-3 px-3 rounded-md m-7 ${state.selectedType === type ? "bg-[#070b13] text-white" : "bg-[#11192a] text-gray-200"}`}
            onClick={() => handleFilter(type)}
          >
            {getTypeLabel(type)}
          </button>
        ))}
      </div>

    <div className='grid grid-cols-1 md:grid md:grid-cols-3 gap-20 mb-20 lg:mb-20 max-w-[85%] mx-auto md:max-w-[90%]'>
       {visibleProjects.map((project, index) => (
        <div key={index} className='items-center justify-center text-center h-auto mt-10 bg-gray-800 rounded-xl cursor-pointer pb-5 group overflow-hidden'>
          <img src={project.image} alt={index} className='mx-auto mb-6 rounded-t-xl md:group-hover:scale-[1.060] md:hover:transition-transform duration-600 ease-in-out'/>
          <h2 className='text-xl mb-3 font-medium'>{project.title}</h2>
          <h4 className='text-[15px] mb-3'>{project.field}</h4>
          <a href={project.link} target='blank' className='flex flex-row justify-center items-center text-sm text-indigo-500 lg:hover:text-indigo-400'>
          <FaExternalLinkAlt className={`${currentLang === "ku" || currentLang === "ar" ? "ml-2" : "mr-2"}`}/> {t('projects.visitHere')}
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
          <FaExternalLinkAlt className={`${currentLang === "ku" || currentLang === "ar" ? "ml-2" : "mr-2"}`}/> {t('projects.visitHere')}
          </a>
        </div>
    ))) : (projectsList.slice(0, Math.ceil(projectsList.length / 2)).map((project, index) => (
          <div key={index} className='items-center justify-center text-center h-auto mt-10 bg-gray-800 rounded-xl cursor-pointer pb-5 group overflow-hidden'>
          <img src={project.image} alt={index} className='mx-auto mb-6 rounded-t-xl md:group-hover:scale-[1.060] md:hover:transition-transform duration-400 ease-in-out'/>
          <h2 className='text-xl mb-3 font-medium'>{project.title}</h2>
          <h4 className='text-[15px] mb-3'>{project.field}</h4>
          <p className='text-sm mb-5'>{project.description}</p>
          <a href={project.link} target='blank' className='flex flex-row justify-center items-center text-sm text-indigo-500 lg:hover:text-indigo-400'>
          <FaExternalLinkAlt className={`${currentLang === "ku" || currentLang === "ar" ? "ml-2" : "mr-2"}`}/> {t('projects.visitHere')}
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

