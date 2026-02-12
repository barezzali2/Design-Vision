import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";


function ServicesPage() {
  const { t } = useTranslation();

  const serviceCardsObj = t('services.serviceCards', {returnObjects: true});
  const serviceCards = Object.values(serviceCardsObj)

  const serviceClientsF = t('services.clientsFeedbacks', {returnObjects: true});
  const clientsFeedbacks = Object.values(serviceClientsF)


  return (
    <motion.div 
    className="mt-20 mb-20 md:mb-30 md:mt-15 w-[94%] max-w-6xl mx-auto px-4"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1.4 }}
    >
      <header className="text-center mb-12">
        <h1 className="text-[25px] md:text-4xl font-extrabold text-white mb-4">
          {t('services.title')}
        </h1>
        <p className="text-lg text-gray-500 max-w-3xl mx-auto">
          {t('services.subTitle')}
        </p>
      </header>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-16 md:mb-25">
        {serviceCards.map((service, index) => (
          <div
            key={index}
            className={`rounded-xl p-6 text-white bg-gradient-to-br ${service.bg} shadow-lg flex flex-col items-center text-center transform transition-transform hover:scale-105 duration-[0.4s] ease-in-out cursor-pointer`}
          >
            <div 
            className="text-[45px] animate-bounce lg:text-6xl"
            style={{ animationDelay: `${index * 0.35}s` }}
            >{service.icon}</div>
            <h3 className="text-[21px] font-semibold mb-3">{service.title}</h3>
            <p className="text-[14px]">{service.description}</p>
          </div>
        ))}
      </div>


      {/* Additional contents below services */}
      <motion.section 
      className="text-center mb-20 px-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.4 }}
      >
        <h2 className="text-3xl font-bold mb-4 text-white">
          {t('services.title2')}
        </h2>
        <p className="mt-8 mb-10 md:mt-6 md:mb-8 text-gray-500 max-w-2xl mx-auto">
          {t('services.subTitle2')}
        </p>
        <a href="/contact" className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition">
          {t('services.startButton')}
        </a>
      </motion.section>

      <motion.section 
      className="px-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.4 }}
      >
        <h2 className="text-3xl font-bold mb-10 text-center text-white">
          {t('services.clientsTitle')}
        </h2>

        <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
          {clientsFeedbacks.map((feedback) => (
            <>
              <blockquote className="bg-gray-800 rounded-lg p-6 shadow">
                <p className="italic mb-4">
                  "{feedback.comment}"
                </p>
                <footer className="text-sm font-semibold text-gray-400">— {feedback.name}</footer>
              </blockquote>
              
          </>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
}

export default ServicesPage;
