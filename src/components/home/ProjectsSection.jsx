import React, { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Modern Portfolio",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "E-Commerce Dashboard",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Travel Blog",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
];

function ProjectsSection() {
  const [expanded, setExpanded] = useState(false);

  const variants = {
    stacked: (i) => ({
      x: 0,
      y: i * -6,
      rotate: i * 2,
      scale: 1 - i * 0.03,
      zIndex: projects.length - i,
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
      className="py-20 bg-[#0f1218] min-h-screen overflow-hidden flex flex-col items-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Header */}
      <div className="text-center mb-16">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Explore Our Projects
        </h3>
        <p className="text-gray-400">
          Click the deck to expand the projects
        </p>
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-6 px-6 py-2 bg-indigo-600 rounded-full text-white font-medium hover:bg-indigo-500 transition cursor-pointer"
        >
          {expanded ? "Reset Stack" : "Expand Deck"}
        </button>
      </div>

      {/* Cards */}
      <div className="relative w-full max-w-6xl h-[400px] flex justify-center items-center">
        {projects.map((project, idx) => (
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
            className="absolute w-64 h-80 bg-[#181c24] rounded-xl shadow-2xl p-4 border border-gray-800 cursor-pointer overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg w-full h-32 object-cover mb-4"
            />
            <h4 className="text-lg font-bold mb-1">{project.title}</h4>
            <p className="text-xs text-gray-400 mb-4 line-clamp-2">
              Innovative design meeting modern functionality.
            </p>
            <span className="text-[#26a8df] text-xs font-semibold">
              VIEW DETAILS →
            </span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default ProjectsSection;
