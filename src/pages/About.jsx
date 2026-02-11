import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next";


function About() {
  const { t } = useTranslation();

  const aboutUsObj = t('aboutUs.description2', {returnObjects: true});
  const aboutUsValues = Object.values(aboutUsObj);


  return (
    <div>
      <Navbar />

      <motion.div 
      className="px-6 md:px-20 text-center mx-7 mt-20 md:mt-15 mb-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.1 }}
      >
        <h1 className="text-[25px] md:text-4xl font-semibold mb-6">
          {t('aboutUs.title')}
        </h1>

        <p className="text-gray-500 max-w-2xl leading-relaxed mb-10 mx-auto">
          {t('aboutUs.subTitle')}
        </p>


        <div className="md:flex md:flex-row md:justify-between md:text-center md:items-start ">
          
        <div>
        <h2 className="text-2xl font-semibold mb-4">{t('aboutUs.leftSide')}</h2>
        <p className="text-gray-500 md:max-w-90 leading-relaxed mb-8 mx-auto">
          {t('aboutUs.description1')}
        </p>
        </div>

        <div>
        <h2 className="text-2xl font-semibold mb-4">{t('aboutUs.rightSide')}</h2>
        <ul className="text-gray-500 space-y-2">
          <li>• {aboutUsValues[0]}</li>
          <li>• {aboutUsValues[1]}</li>
          <li>• {aboutUsValues[2]}</li>
          <li>• {aboutUsValues[3]}</li>
        </ul>
        </div>

        </div>

      </motion.div>

      <Footer />
    </div>
  );
}

export default About;
