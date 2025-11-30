import React from 'react'
import { motion } from "framer-motion";



const projects = [
  {
    title: "Modern Portfolio",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    description: "A sleek portfolio website for creative professionals.",
    link: "#"
  },
  {
    title: "E-Commerce Dashboard",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    description: "A powerful dashboard for managing online stores.",
    link: "#"
  },
  {
    title: "Travel Blog",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    description: "A vibrant blog platform for sharing travel experiences.",
    link: "#"
  },
  {
    title: "Fitness App",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    description: "A mobile app to track workouts and progress.",
    link: "#"
  },
  {
    title: "Recipe Finder",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
    description: "Find and share recipes with a global community.",
    link: "#"
  },
  {
    title: "Startup Landing Page",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    description: "A bold landing page for new startups.",
    link: "#"
  }
];



function ProjectsSection() {
  return (
     <motion.div 
        className="w-[94%] max-w-6xl mx-auto px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1 }}

        >
        <div className="text-center mb-8">
          <h3 className="text-[25px] md:text-4xl font-bold mb-2 md:mb-4">Explore Our Projects</h3>
          <p className="text-[15px] text-gray-300">
            Discover some of our latest and most creative work.
          </p>
        </div>
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
            key={idx}
            className="bg-[#181c24] rounded-lg shadow-lg p-6 hover:scale-105 transition-transform flex flex-col"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-md mb-4 w-full h-40 object-cover"
                />
              <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
              <p className="text-gray-400 text-sm mb-2">{project.description}</p>
              <a
                href={project.link}
                className="text-[#26a8df] hover:underline text-sm mt-auto"
                target="_blank"
                rel="noopener noreferrer"
                >
                View Details
              </a>
            </div>
          ))}
        </div>
        </motion.div>
  )
}

export default ProjectsSection