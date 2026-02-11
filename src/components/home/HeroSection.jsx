import { useTranslation } from 'react-i18next';
import React, { useRef } from 'react';
import { motion } from "framer-motion";

function HeroSection() {
  const currentRef = useRef(null);
      const { t } = useTranslation();

  return (
    <div className='mt-20 mb-20'>

      {/* FLEX ROW: LEFT TEXT / RIGHT IMAGE --- */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20">

        {/* LEFT SIDE: Title + Logo */}
        <motion.div
          className="w-full text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1 }}
        >
          <h2 className='text-2xl mb-3 lg:text-4xl lg:mb-6'>
            {t('home-hero.title1')}
          </h2>

          <motion.h2
            className="text-4xl font-semibold bg-clip-text text-transparent lg:text-6xl lg:pb-5 mb-10 lg:mb-15"
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
            {t('home-hero.title2')}
          </motion.h2>

          {/* Logo */}
          <motion.img
            src="/assets/name.png"
            alt="name"
            className='w-64 mx-auto lg:w-120 lg:mt-10'
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, type: "tween", ease: "easeOut" }}
          />
        </motion.div>

        {/* RIGHT SIDE: Main Image */}
        {/* <motion.img
          src="/assets/homeimg.png"
          alt="homeimg"
          className='w-80 mt-10 lg:mt-0 lg:w-[380px] mx-auto'
          initial={{ opacity: 0, x: 5 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "tween", ease: "easeOut" }}
        /> */}

      </div>

      {/* Description */}
      <motion.div 
      className='mb-20 mx-11 mt-10 text-center lg:mx-90 lg:mb-12 lg:text-xl lg:text-center'
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.7 }}
      >
        <p>
          {t('home-hero.text')}
        </p>
      </motion.div>

      {/* Scroll Down Animation */}
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
           <h4 className='mb-20 relative overflow-hidden group px-8 py-4 rounded-full text-xl font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:scale-105 active:scale-95 hover:shadow-[0_0_30px_rgba(168,85,247,0.7),0_0_60px_rgba(168,85,247,0.4)] transition-all duration-500 cursor-pointer before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/20 before:to-white/0 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-600'>
            {t('home-hero.getStartedButton')}
          </h4>
        </a>

        {[0, 0.2, 0.4].map((delay, idx) => (
          <div
            key={idx}
            className="[animation:updown_1.5s_ease-in-out_infinite]"
            style={{ animationDelay: `-${delay}s` }}
          >
            <span className="block w-[6.5vw] h-[6.5vw] border-b-[7px] border-r-[7px] border-[#7735dc81] rotate-45 mb-[-10px]"></span>
          </div>
        ))}
      </motion.div>

      <div className='mb-30' ref={currentRef}></div>

    </div>
  );
}

export default HeroSection;
