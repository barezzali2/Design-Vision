import { useRef } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import { motion } from "framer-motion";



const services = [
  {
    title: "UI/UX Design",
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
  }
];




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




function Home() {
  const currentRef = useRef(null);

  return (
    <>
    <div className='items-center text-center justify-center h-[100%]'>
        {/* Navbar */}
        <Navbar />


        {/* Home Body */}
        <div className='mt-30 mb-20'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1 }}
            >
            <h2 className='text-2xl mb-3'>Turn Your Vision</h2>
            <motion.h2 
            className="text-4xl font-semibold bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(90deg, #f7941f, #f7941f, #eb1d25, #4f3f99, #003366, #26a8df)',
              backgroundSize: '150% auto',
            }}
            animate={{
                  backgroundPosition: ["0% 50%", "100% 50%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear"
                }}
            >
              Into Reality
              </motion.h2>
            </motion.div>


            <motion.img 
            src="/assets/name.png" 
            alt="name" 
            className='w-90 mx-auto mt-18 mb-35'
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, type: "tween", ease: "easeOut" }}
            />


              <motion.div 
              className="relative flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1 }}
              >
                    <a 
                    href=""
                    onClick={(e) => {
                        e.preventDefault();
                        currentRef.current?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                    <h4 className='mb-20 border-1 border-indigo-500 p-5 rounded-2xl text-2xl'>Get Started</h4>
                    </a>
                    <div className="[animation:updown_1.5s_ease-in-out_infinite]">
                      <span className="block w-[6.5vw] h-[6.5vw] border-b-[7px] border-r-[7px] border-[#7735dc81] rotate-45 mb-[-10px]"></span>
                    </div>
                    <div className="[animation:updown_1.5s_ease-in-out_infinite] [animation-delay:-0.2s]">
                      <span className="block w-[6.5vw] h-[6.5vw] border-b-[7px] border-r-[7px] border-[#7735dc81] rotate-45 mb-[-10px]"></span>
                    </div>
                    <div className="[animation:updown_1.5s_ease-in-out_infinite] [animation-delay:-0.4s]">
                      <span className="block w-[6.5vw] h-[6.5vw] border-b-[7px] border-r-[7px] border-[#7735dc81] rotate-45 mb-[-10px]"></span>
                    </div>
              </motion.div>


          <div 
          className='mb-30'
          ref={currentRef}
          ></div>
     
          <motion.div 
        
          className="w-[94%] max-w-6xl mx-auto px-4 mb-40"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1 }}
          >
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold mb-2">What We Offer</h3>
            <p className="text-lg text-gray-300">
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
              
          


        <motion.div 
        className="w-[94%] max-w-6xl mx-auto mt-20 px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1 }}

        >
        <div className="text-center mb-8">
          <h3 className="text-3xl md:text-4xl font-bold mb-2">Explore Our Projects</h3>
          <p className="text-lg text-gray-300">
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


      </div>

      <Footer />
    </div>
    </>
  )
}

export default Home