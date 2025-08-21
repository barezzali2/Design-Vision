import React, { useRef } from 'react'
import { motion } from "framer-motion";


function HeroSection() {
      const currentRef = useRef(null);

  return (
    <div className='mt-20 mb-20'>
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

            {/* Design vision image */}
            <motion.img 
            src="/assets/name.png" 
            alt="name" 
            className='w-90 mx-auto mt-15'
            initial={{ opacity: 0, x: -400 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, type: "tween", ease: "easeOut" }}
            />

            
            {/* Top image */}
            <motion.img 
            src="/assets/homeimg.png" 
            alt="homeimg" 
            className='w-80 mx-auto mb-10'
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, type: "tween", ease: "easeOut" }}
            />

           

            <div className='mb-20 mx-11'>
              <p>We blend creativity with cutting-edge technology to craft digital experiences 
                that captivate, engage, and inspire. From concept to creation, every project 
                is a journey of innovation and artistic excellence.
            </p>
            </div>


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
                        <h4 className='mb-20 border-1 border-indigo-500 p-5 rounded-2xl text-xl'>Get Started</h4>
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

    </div>
  )
}

export default HeroSection