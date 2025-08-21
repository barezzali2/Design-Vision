import { Link } from "react-router-dom";
import { MdOutlineMail } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { SiThreads } from "react-icons/si";

function Footer() {
  return (
    <footer className="text-center py-5 shadow-[0_-5px_6px_-1px_rgba(0,0,0,0.5)]">
      <div className="max-w-6xl mx-auto">
        {/* Contact Section */}
        <div className="mb-10 md:flex md:justify-between md:text-center md:gap-100 md:mb-2">
          <div className=" mb-12 md:mb-0 md:w-1/2 md:pr-8 ">
          <h2 className="text-2xl font-semibold mb-4 text-white">Get in touch</h2>
          <div className="flex flex-col items-center space-y-5 mb-7">
            <a href="#" className="flex items-center space-x-2 text-gray-200 hover:text-gray-800 transition-colors md:hover:text-violet-700">
              <MdOutlineMail className="text-xl" />
              <span>design.vision25@gmail.com</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-gray-200 hover:text-gray-800 transition-colors md:hover:text-violet-700">
              <LuPhoneCall className="text-xl" />
              <span>+964 771 555 1567</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-gray-200 hover:text-gray-800 transition-colors md:hover:text-violet-700">
              <IoLocationOutline className="text-xl" />
              <span>Green City, Sulaimani</span>
            </a>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-3xl text-[#e4405f] hover:text-pink-700 cursor-pointer md:text-4xl md:hover:transform-[scale(1.2)] md:transition-all duration-250 ease-in-out">
              <FaSquareInstagram />
            </a>
            <a href="#" className="text-3xl text-blue-600 hover:text-blue-700 cursor-pointer md:text-4xl transition-colors md:hover:transform-[scale(1.2)] md:transition-all duration-250 ease-in-out">
              <FaFacebook />
            </a>
            <a href="#" className="text-3xl text-white cursor-pointer md:text-4xl md:hover:transform-[scale(1.2)] md:transition-all duration-250 ease-in-out">
              <SiThreads />
            </a>
          </div>
        </div>

        {/* About Section */}
        <div className="mb-12 px-7 md:w-1/2 md:pl-8 md:px-0">
          <h2 className="text-2xl font-semibold mb-4 text-white">About Design Vision</h2>
          <p className="text-gray-200 leading-relaxed max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptatibus optio, enim nisi ut, pariatur corporis dignissimos incidunt perspiciatis rerum ipsum repellendus quam eaque labore, blanditiis possimus non voluptatum nesciunt?
          </p>
        </div>
      </div>

        {/* Quick Links Section */}
        <div className="mb-6 md:mb-9">
          <h2 className="text-2xl font-semibold mb-4 text-white md:mb-5">Quick Links</h2>
          <div className="flex justify-center space-x-5 flex-wrap md:space-x-12">
            <Link to="/brands" className="text-gray-300 hover:text-gray-800 transition-colors text-[14px] md:text-[17px]">
              Brands
            </Link>
            <Link to="/occasions" className="text-gray-300 hover:text-gray-800 transition-colors text-[14px] md:text-[17px]">
              Logos
            </Link>
            <Link to="/men" className="text-gray-300 hover:text-gray-800 transition-colors text-[14px] md:text-[17px]">
              Explore Services
            </Link>
            <Link to="/occasions" className="text-gray-300 hover:text-gray-800 transition-colors text-[14px] md:text-[17px]">
              Special Offers
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-5">
          <p className="text-gray-300 text-sm md:text-[15px]">
            © 2025 DesignVision. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer