import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />

      <motion.div 
      className="px-6 md:px-20 text-center mx-7 my-20 lg:my-15"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.1 }}
      >
        <h1 className="text-[25px] md:text-4xl font-semibold mb-6">
          {t('contact.title')}
        </h1>

        <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed mb-10">
          {t('contact.subTitle')}
        </p>

        <div className="max-w-2xl mx-auto text-gray-500 space-y-4">
          <p><span className="font-semibold">{t('contact.emailLabel')}</span><a href="#">info@designvision.agency</a></p>
          <p><span className="font-semibold">{t('contact.phoneLabel')}</span> <a href="#">+964 772 542 0663</a></p>
          <p><span className="font-semibold">{t('contact.locationLabel')} </span>{t('contact.location')}</p>
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-6">{t('contact.messageTitle')}</h2>

        <form className="max-w-xl mx-auto space-y-4">
          <input
            type="text"
            placeholder={t('contact.name')}
            className="w-full border px-4 py-2 rounded-md outline-none"
          />
          <input
            type="email"
            placeholder={t('contact.email')}
            className="w-full border px-4 py-2 rounded-md outline-none"
          />
          <textarea
            placeholder={t('contact.message')}
            rows="4"
            className="w-full border px-4 py-2 rounded-md outline-none"
          ></textarea>

          <button
            type="submit"
            className="px-6 py-2 cursor-pointer bg-indigo-500 text-white rounded-md hover:bg-indigo-800 transition"
          >
            {t('contact.sendButton')}
          </button>
        </form>
      </motion.div>

      <Footer />
    </>
  );
}

export default Contact;
