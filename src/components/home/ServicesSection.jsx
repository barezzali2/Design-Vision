import React from 'react'
import { motion } from "framer-motion";


const services = [
    {
    title: "Social Media Management",
    icon: "📱",
    description: "Engaging content for blogs, social media, and marketing campaigns.",
    bg: "from-[#4f3f99]/80 via-[#181c64]/90 to-[#26a8df]/80"
  },
  {
    title: "UX/UI Design",
    icon: "🎨",
    description: "Crafting intuitive and beautiful user experiences for web and mobile platforms.",
    bg: "from-[#4b0d00]/80 via-[#311c24]/90 to-[#002066]/80"
  },
  {
    title: "Web Development",
    icon: "💻",
    description: "Building fast, responsive, and scalable web applications tailored to your needs.",
    bg: "from-[#003396]/30 via-[#181c44]/90 to-[#26a8df]/65"
  },
  {
    title: "Brand Identity",
    icon: "🚀",
    description: "Creating memorable brands with unique logos, colors, and visual guidelines.",
    bg: "from-[#f7941f]/80 via-[#481c94]/90 to-[#eb1d25]/80"
  },
  {
    title: "Content Creation",
    icon: "📝",
    description: "Engaging content for blogs, social media, and marketing campaigns.",
    bg: "from-[#4f3f99]/80 via-[#181c64]/90 to-[#26a8df]/80"
  },
    {
    title: "Poster Design",
    icon: "🖼️",
    description: "Creative and eye-catching poster designs for your campaigns.",
    bg: "from-[#f9d423]/80 via-[#ff4e50]/90 to-[#f9d423]/80"
  },
  {
    title: "Logo Design",
    icon: "🌟",
    description: "Unique and memorable logos that represent your brand.",
    bg: "from-[#00c3ff]/80 via-[#ffff1c]/90 to-[#00c3ff]/80"
  },
  {
    title: "Digital Marketing",
    icon: "📈",
    description: "Strategies to grow your business and reach a wider audience.",
    bg: "from-[#fc5c7d]/80 via-[#6a82fb]/90 to-[#fc5c7d]/80"
  }
];




// const services = [
//   {
//     title: "Social Media Management",
//     icon: "📱",
//     description: "Engaging content for blogs, social media, and marketing campaigns.",
//     bg: "from-[#ffecd2]/80 via-[#fcb69f]/90 to-[#ff6e7f]/80"
//   },
//   {
//     title: "UI/UX Design",
//     icon: "🎨",
//     description: "Crafting intuitive and beautiful user experiences for web and mobile platforms.",
//     bg: "from-[#43cea2]/80 via-[#185a9d]/90 to-[#2b5876]/80"
//   },
//   {
//     title: "Web Development",
//     icon: "💻",
//     description: "Building fast, responsive, and scalable web applications tailored to your needs.",
//     bg: "from-[#f7971e]/80 via-[#ffd200]/90 to-[#f7971e]/80"
//   },
//   {
//     title: "Brand Identity",
//     icon: "🚀",
//     description: "Creating memorable brands with unique logos, colors, and visual guidelines.",
//     bg: "from-[#f953c6]/80 via-[#b91d73]/90 to-[#f953c6]/80"
//   },
//   {
//     title: "Content Creation",
//     icon: "✍️",
//     description: "Engaging content for blogs, social media, and marketing campaigns.",
//     bg: "from-[#30cfd0]/80 via-[#330867]/90 to-[#30cfd0]/80"
//   },
//   {
//     title: "Poster Design",
//     icon: "🖼️",
//     description: "Creative and eye-catching poster designs for your campaigns.",
//     bg: "from-[#f9d423]/80 via-[#ff4e50]/90 to-[#f9d423]/80"
//   },
//   {
//     title: "Logo Design",
//     icon: "🌟",
//     description: "Unique and memorable logos that represent your brand.",
//     bg: "from-[#00c3ff]/80 via-[#ffff1c]/90 to-[#00c3ff]/80"
//   },
//   {
//     title: "Digital Marketing",
//     icon: "📈",
//     description: "Strategies to grow your business and reach a wider audience.",
//     bg: "from-[#fc5c7d]/80 via-[#6a82fb]/90 to-[#fc5c7d]/80"
//   }
// ];



function ServicesSection() {
  return (
    <motion.div 
          className="w-[94%] max-w-6xl mx-auto px-4 mb-40"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1 }}
          >
          <div className="text-center mb-8">
            <h3 className="text-[25px] md:text-4xl font-bold mb-2 md:mb-4">What We Offer</h3>
            <p className="text-[15px] text-gray-300">
              See what we offer as a creative team.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className={`relative rounded-xl shadow-lg p-8 flex flex-col items-center justify-center overflow-hidden group bg-gradient-to-br ${service.bg} transition-transform hover:scale-105`}
              >
                {/* Intuitive backdrop effect */}
                <div className="absolute inset-0 opacity-30 blur-2xl pointer-events-none group-hover:opacity-50 transition-all"
                  style={{
                    background: "radial-gradient(circle at 60% 40%, #fff2 0%, transparent 70%)"
                  }}
                />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h4 className="text-xl font-bold mb-2">{service.title}</h4>
                  <p className="text-gray-200 text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
  )
}

export default ServicesSection