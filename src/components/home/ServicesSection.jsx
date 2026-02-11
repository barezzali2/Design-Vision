import { useTranslation } from 'react-i18next';

import React from 'react'
import { motion } from "framer-motion";


// const services = [
//     {
//     // title: "Social Media Management",
//     // icon: "📱",
//     // description: "Engaging content for blogs, social media, and marketing campaigns.",
//     // bg: "from-[#4f3f99]/80 via-[#181c64]/90 to-[#26a8df]/80"
//   },
//   {
//     // title: "Web Development",
//     // icon: "💻",
//     // description: "Building fast, responsive, and scalable web applications tailored to your needs.",
//     // bg: "from-[#8AD952]/80 via-[#46A9BD]/70 to-[#8AD952]/80"
//   },
//     {
//     // title: "Poster Design",
//     // icon: "🖼️",
//     // description: "Creative and eye-catching poster designs for your campaigns.",
//     // bg: "from-[#f9d423]/80 via-[#ff4e50]/90 to-[#f9d423]/80"
//   },
//   {
//     // title: "Logo Design",
//     // icon: "🌟",
//     // description: "Unique and memorable logos that represent your brand.",
//     // bg: "from-[#3CD1DE]/80 via-[#6C35D4]/90 to-[#3CD1DE]/80"
//   },
// ];




function ServicesSection() {
        const { t } = useTranslation();

        const serviceCardsObj = t('home-services.serviceCards', { returnObjects: true });
        const serviceCards = Object.values(serviceCardsObj);
  
  return (
    <div 
      className="w-[94%] max-w-6xl mx-auto px-6 mb-25 lg:mb-30"
    >
      <motion.div className="text-center mb-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.3 }}
      >
        <h3 className="text-[25px] md:text-4xl font-bold mb-2 md:mb-4">
            {t('home-services.title')}
        </h3>
        <p className="text-[15px] text-gray-400">
             {t('home-services.text')}
        </p>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {serviceCards.map((service, idx) => (
          <motion.div
            key={idx}
            className={`relative rounded-xl shadow-lg p-8 flex flex-col items-center justify-center overflow-hidden group bg-gradient-to-br ${service.bg} `}
            initial={{ opacity: 0, y: 70, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ 
              duration: 0.6,
              delay: idx * 0.12,
              ease: [0.25, 0.4, 0.25, 1],
              scale: { duration: 0.4 },
            }}
          >
            {/* Intuitive backdrop effect */}
            <motion.div 
              className="absolute inset-0 opacity-30 blur-2xl pointer-events-none"
              initial={{ opacity: 0.3 }}
              whileHover={{ opacity: 0.1 }}
              transition={{ duration: 0.1 }}
              style={{
                background: "radial-gradient(circle at 60% 40%, #fff2 0%, transparent 70%)"
              }}
            />
            <div className="relative z-10 flex flex-col items-center">
              <motion.div 
                className="text-5xl mb-4"
              >
                {service.icon}
              </motion.div>
              <h4 className="text-xl font-bold mb-2">{service.title}</h4>
              <p className="text-gray-200 text-sm">{service.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default ServicesSection