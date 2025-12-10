import React, { useState } from 'react'
import Logo from './Logo'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    function handleSetMenu() {
        setMenuOpen((prev) => !prev);
    }
  return (
    <div className='flex flex-row backdrop-blur-sm bg-[#1220301f] overflow-hidden sticky top-0 w-full z-11 flex-wrap items-center justify-around'>
            <Logo />

            <div className='w-40 md:w-0'></div>


            {/* Tablet/Large screen navbar */}
            <ul className='hidden md:list-none md:flex md:flex-row md:gap-15'>
                <li>
                <NavLink 
                to="/"
                className="text-xl font-semibold text-white hover:text-indigo-400 transition-colors"
                >
                    HOME
                </NavLink>
                </li>

                <li>
                    <NavLink 
                    to="/services"
                    className="text-xl font-semibold text-white hover:text-indigo-400 transition-colors"
                    >
                        SERVICES
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                    to="/projects"
                    className="text-xl font-semibold text-white hover:text-indigo-400 transition-colors"
                    >
                        PROJECTS
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                    to="/about"
                    className="text-xl font-semibold text-white hover:text-indigo-400 transition-colors"
                    >
                        ABOUT US
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                    to="/contact"
                    className="text-xl font-semibold text-white hover:text-indigo-400 transition-colors"
                    >
                    CONTACT
                    </NavLink>
                </li>
            </ul>


            {/* Hambergur button */}
            <div
            onClick={handleSetMenu}
            className="relative w-[30px] h-[25px] flex flex-col justify-center items-center cursor-pointer md:hidden z-[1002]"
            >
                {/* Top Bar */}
                <span
                    className={`absolute w-full h-[4.0px] bg-white/85 rounded-[3px] transition-all duration-200 ease-in-out
                    ${menuOpen ? 'rotate-45' : '-translate-y-[8px]'}`}
                ></span>

                {/* Middle Bar */}
                <span
                    className={`absolute w-full h-[4.0px] bg-white/85 rounded-[3px] transition-all duration-200 ease-in-out
                    ${menuOpen ? 'opacity-0' : 'opacity-100'}`}
                ></span>

                {/* Bottom Bar */}
                <span
                    className={`absolute w-full h-[4.0px] bg-white/85 rounded-[3px] transition-all duration-200 ease-in-out
                    ${menuOpen ? '-rotate-45' : 'translate-y-[8px]'}`}
                ></span>
            </div>


        
        {/* Small screen navbar */}
        <ul className={`flex flex-col w-full list-none overflow-hidden transition-all duration-350 ease-in-out text-center gap-8 md:hidden ${menuOpen ? 'h-[320px] opacity-100 visible mt-[25px] ' : 'h-0 opacity-0 invisible'}`}>
            <li>
                <NavLink 
                to="/"
                className="text-xl font-semibold text-white transition-colors"
                onClick={handleSetMenu}
                >
                    HOME
                </NavLink>
            </li>

            <li>
                <NavLink 
                to="/services"
                className="text-xl font-semibold text-white transition-colors"
                onClick={handleSetMenu}
                >
                    SERVICES
                </NavLink>
            </li>

            <li>
                <NavLink 
                to="/projects"
                className="text-xl font-semibold text-white transition-colors"
                onClick={handleSetMenu}
                >
                    PROJECTS
                </NavLink>
            </li>

            <li>
                <NavLink 
                to="/about"
                className="text-xl font-semibold text-white transition-colors"
                onClick={handleSetMenu}
                >
                    ABOUT US
                </NavLink>
            </li>

            <li>
                <NavLink 
                to="/contact"
                className="text-xl font-semibold text-white transition-colors"
                onClick={handleSetMenu}
                >
                    CONTACT
                </NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Navbar