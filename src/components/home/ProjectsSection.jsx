import { useTranslation } from 'react-i18next';
import React, { useState } from "react";
import { motion } from "framer-motion";


function ProjectsSection() {
  const [expanded, setExpanded] = useState(false);
  const { t } = useTranslation();

  const projectCardsObj = t('home-projects.projectCards', { returnObjects: true });
  const projectCards = Object.values(projectCardsObj);


  function handleSetExpanded() {
    setExpanded((expanded) => !expanded);
  }

  const variants = {
    stacked: (i) => ({
      x: 0,
      y: i * -6,
      rotate: i * 2,
      scale: 1 - i * 0.03,
      zIndex: projectCards.length - i,
      opacity: 1,
    }),
    expanded: (i) => ({
      x: (i - 1) * 350, // tighter spacing
      y: 0,
      rotate: 0,
      scale: 1,
      zIndex: 10,
      opacity: 1,
    }),
  };

  return (
    <motion.section
      className="mb-20 mt-35 min-h-screen overflow-hidden flex flex-col items-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          {t('home-projects.title')}
        </h3>
        <p className="hidden lg:block lg:text-gray-400">
          {t('home-projects.subTitle')}
        </p>
        <button
          onClick={handleSetExpanded}
          className="hidden lg:inline mt-6 px-6 py-2 bg-indigo-600 rounded-full text-white font-medium hover:bg-indigo-500 transition cursor-pointer"
        >
          {expanded ? t('home-projects.resetButton') : t('home-projects.expandButton')}
        </button>

        <p className='text-gray-400 mt-6 md:hidden lg:hidden'>
            {t("home-projects.subTitle2")}
        </p>
      </div>



    {/* Mobile screen */}
    <div className="lg:hidden w-full px-10 space-y-10">
        {projectCards.map((project, idx) => (
          <motion.div
            key={idx}
            className="w-full bg-[#181c24] rounded-xl p-4 border border-gray-800"
          >
          <div className="w-55 mx-auto mb-4 flex items-center justify-center">
            <img
              src={project.image}
              alt={project.title}
              className="h-auto rounded-lg"
            />
          </div>
            <h4 className="text-lg font-bold mb-1">{project.title}</h4>
            <p className="text-xs text-gray-400 mb-4 line-clamp-2">
              {project.text}
            </p>
            <span className="text-[#26a8df] text-xs font-semibold">
              {project.viewMore}
            </span>
          </motion.div>
        ))}
      </div>


      

      {/* Cards in desktop screen*/}
      <div className="hidden relative w-full h-[400px] justify-center items-center lg:inline-flex">
        {projectCards.map((project, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            variants={variants}
            initial="stacked"
            animate={expanded ? "expanded" : "stacked"}
            transition={{
              type: "tween",
              duration: 0.80,
              ease: [0.35, 1, 0.36, 1],
            }}
            whileHover={{
              scale: 1.12,
              zIndex: 50,
              boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
              transition: { duration: 0.45 },
            }}
            whileTap={{
              scale: 0.97,
              transition: { duration: 0.05 },
            }}
            className="absolute w-66 h-85 bg-[#181c24] rounded-xl shadow-2xl p-4 border border-gray-800 cursor-pointer overflow-hidden"
          >

        <div className="w-full h-40 mb-4 flex items-center justify-center">
          <img
            src={project.image}
            alt={project.title}
            className="max-w-full h-full object-contain rounded-lg"
          />
        </div>

            <h4 className="text-lg font-bold mb-1">{project.title}</h4>
            <p className="text-xs text-gray-400 mb-4 line-clamp-2">
              {project.text}
            </p>
            <span className="text-[#26a8df] text-xs font-semibold">
              {project.viewMore}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default ProjectsSection;
