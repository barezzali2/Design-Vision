import { Link } from "react-router-dom";
import { MdOutlineMail } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { SiThreads } from "react-icons/si";

import { useTranslation } from 'react-i18next';


function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="text-center py-10 shadow-[0_0px_200px_0px_#0f1218]">
      <div className="max-w-6xl mx-auto">
        {/* Contact Section */}
        <div className="mb-10 md:flex md:justify-between md:text-center md:gap-100 md:mb-2">
          <div className=" mb-12 md:mb-0 md:w-1/2 md:pr-8 ">
          <h2 className="text-2xl font-semibold mb-4 text-white">{t('footer.contactTitle')}</h2>
          <div className="flex flex-col items-center space-y-5 mb-7">
            <a href="#" className="flex items-center space-x-2 text-gray-200 hover:text-gray-800 transition-colors md:hover:text-violet-500">
              <MdOutlineMail className="text-xl" />
              <span>design.vision25@gmail.com</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-gray-200 hover:text-gray-800 transition-colors md:hover:text-violet-500">
              <LuPhoneCall className="text-xl" />
              <span>+964 772 542 0063</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-gray-200 hover:text-gray-800 transition-colors md:hover:text-violet-500">
              <IoLocationOutline className="text-xl" />
              <span>{t('footer.location')}</span>
            </a>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-3xl hover:text-pink-700 cursor-pointer md:text-4xl md:hover:transform-[scale(1.2)] md:transition-all duration-250 ease-in-out">
              <FaInstagram />
            </a>
            <a href="#" className="text-3xl hover:text-blue-700 cursor-pointer md:text-4xl transition-colors md:hover:transform-[scale(1.2)] md:transition-all duration-250 ease-in-out">
              <FaFacebook />
            </a>
            <a href="#" className="text-3xl text-white hover:text-pink-700 cursor-pointer md:text-4xl md:hover:transform-[scale(1.2)] md:transition-all duration-250 ease-in-out">
              <SiThreads />
            </a>
          </div>
        </div>

        {/* About Section */}
        <div className="mb-12 px-7 md:w-1/2 md:pl-8 md:px-0">
          <h2 className="text-2xl font-semibold mb-4 text-white">{t('footer.aboutDV')}</h2>
          <p className="text-gray-200 leading-relaxed max-w-2xl mx-auto">
            {t('footer.aboutText')}
          </p>
        </div>
      </div>

        {/* Quick Links Section */}
        <div className="mb-6 md:mb-9">
          <h2 className="text-2xl font-semibold mb-4 text-white md:mb-5">{t('footer.quickLinks')}</h2>
          <div className="flex justify-center space-x-5 flex-wrap md:space-x-12">
            <Link to="/projects" className="text-gray-300 hover:text-indigo-400 transition-colors text-[14px] md:text-[17px]">
              {t('footer.portfolio')}
            </Link>
            <Link to="/projects" className="text-gray-300 hover:text-indigo-400 transition-colors text-[14px] md:text-[17px]">
              {t('footer.logos')}
            </Link>
            <Link to="/services" className="text-gray-300 hover:text-indigo-400 transition-colors text-[14px] md:text-[17px]">
              {t('footer.services')}
            </Link>
            <Link to="/services" className="text-gray-300 hover:text-indigo-400 transition-colors text-[14px] md:text-[17px]">
              {t('footer.offers')}
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-10">
          <p className="text-gray-300 text-sm md:text-[15px]">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer