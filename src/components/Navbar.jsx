import { useTranslation } from 'react-i18next';
import React, { useEffect, useRef, useState } from 'react'
import Logo from './Logo'
import { Link, NavLink } from 'react-router-dom'
import { MdLanguage } from "react-icons/md";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [openLangList, setOpenLangList] = useState(false);
    const { t, i18n } = useTranslation();
    const dropDownRef = useRef(null);



    useEffect(() => {
        function handleClickOutside(event) {
            if(dropDownRef.current && !dropDownRef.current.contains(event.target)) {
                setOpenLangList(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, [])


    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    function handleSetMenu() {
        setMenuOpen((prev) => !prev);
    }

    function handleOpenLang() {
        setOpenLangList((open) => !open)
    }

  return (
    <div 
    className={`flex flex-row backdrop-blur-md bg-[#1220301f] sticky top-0 w-full z-11 items-center flex-wrap justify-between px-10 lg:px-15`}>
            <Logo />


            {/* Tablet/Large screen navbar */}
            <ul className='hidden md:list-none md:flex md:flex-row md:gap-15'>
                <li>
                <NavLink 
                to="/"
                className={({ isActive }) => `text-xl font-semibold hover:text-indigo-400 transition duration-200 pb-2 ${isActive ? "text-indigo-400 border-b-2" : "none"}`}
                // fixing the space between them
                >
                    {t('nav.home')}
                </NavLink>
                </li>

                <li>
                    <NavLink 
                    to="/services"
                    className={({ isActive }) => `text-xl font-semibold hover:text-indigo-400 transition duration-200 pb-2 ${isActive ? "text-indigo-400 border-b-2" : "none"}`}
                    >
                        {t('nav.services')}
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                    to="/projects"
                    className={({ isActive }) => `text-xl font-semibold hover:text-indigo-400 transition duration-200 pb-2 ${isActive ? "text-indigo-400 border-b-2" : "none"}`}
                    >
                        {t('nav.projects')}
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                    to="/about"
                    className={({ isActive }) => `text-xl font-semibold hover:text-indigo-400 transition duration-200 pb-2 ${isActive ? "text-indigo-400 border-b-2" : "none"}`}
                    >
                        {t('nav.about')}
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                    to="/contact"
                    className={({ isActive }) => `text-xl font-semibold hover:text-indigo-400 transition duration-200  pb-2 ${isActive ? "text-indigo-400 border-b-2" : "none"}`}
                    >
                    {t('nav.contact')}
                    </NavLink>
                </li>
            </ul>


            {/* <div className="flex justify-center"> */}
            <div 
            ref={dropDownRef}
            className='hidden lg:relative lg:flex lg:justify-center'>
                
            <button 
            className='cursor-pointer' 
            onClick={handleOpenLang}>
                <MdLanguage className='text-[26px] md:text-[28px] hover:text-indigo-400 transition duration-200 ' />
            </button>


            {openLangList && ( 
                <ul 
                className='border-[0.5px] rounded-[10px] absolute top-full mt-2 md:mt-3 p-1 backdrop-blur-lg bg-[#1220301f]'
                >
                    
                <li 
                value="en" 
                className={`hover:bg-slate-800 hover:text-indigo-600 rounded-[10px] mt-2 px-2 md:py-1 md:mt-1 md:mb-2 md:px-5 cursor-pointer`}
                onClick={() => {
                        changeLanguage('en');
                        handleOpenLang();
                    }}
                >
                    <button 
                    className={`cursor-pointer ${i18n.language === "en" ? "text-indigo-600" : "none"}`}
                    >
                    {t('nav.english')}
                    </button>
                </li>

                <li 
                value="ku" 
                className='hover:bg-slate-800 hover:text-indigo-600 rounded-[10px] mt-2 px-2 md:py-1 md:mb-2 md:px-5 cursor-pointer'
                onClick={() => {
                        changeLanguage('ku');
                        handleOpenLang();
                    }}
                >
                    <button 
                    className={`cursor-pointer ${i18n.language === "ku" ? "text-indigo-600" : "none"}`}
                    >
                    {t('nav.kurdish')}
                    </button>
                </li>
                <li 
                value="ar" 
                className='hover:bg-slate-800 hover:text-indigo-600 rounded-[10px] mt-2 mb-1 px-2 md:py-1 md:mb-1 md:px-5 cursor-pointer'
                onClick={() => {
                        changeLanguage('ar');
                        handleOpenLang();
                    }}
                >
                    <button 
                    className={`cursor-pointer ${i18n.language === "ar" ? "text-indigo-600" : "none"}`}
                    >
                    {t('nav.arabic')}
                    </button>
                </li>
            </ul>)}
            </div>
                    
         



            {/* Hambergur button */}
            <div
            onClick={handleSetMenu}
            className="relative w-[30px] h-[25px] flex flex-col justify-center items-center cursor-pointer md:hidden z-[1002]"
            >
             
                <span
                    className={`absolute w-full h-[4.0px] bg-white/85 rounded-[3px] transition-all duration-200 ease-in-out
                    ${menuOpen ? 'rotate-45' : '-translate-y-[8px]'}`}
                ></span>

              
                <span
                    className={`absolute w-full h-[4.0px] bg-white/85 rounded-[3px] transition-all duration-200 ease-in-out
                    ${menuOpen ? 'opacity-0' : 'opacity-100'}`}
                ></span>

             
                <span
                    className={`absolute w-full h-[4.0px] bg-white/85 rounded-[3px] transition-all duration-200 ease-in-out
                    ${menuOpen ? '-rotate-45' : 'translate-y-[8px]'}`}
                ></span>
            </div>


        
        {/* Small screen navbar */}
        <ul 
        className={`flex flex-col w-full list-none overflow-hidden transition-all duration-350 ease-in-out text-center gap-8 md:hidden ${menuOpen ? 'h-auto opacity-100 visible mt-[25px] mb-5' : 'h-0 opacity-0 invisible'}`}
        >
            <li>
                <NavLink 
                to="/"
                className= {({isActive}) => `text-xl font-semibold transition-colors ${isActive ? "text-indigo-400 border-b-2 p-1" : "none"}`}
                onClick={handleSetMenu}
                >
                    {t('nav.home')}
                </NavLink>
            </li>

            <li>
                <NavLink 
                to="/services"
                className= {({isActive}) => `text-xl font-semibold transition-colors ${isActive ? "text-indigo-400 border-b-2 p-1" : "none"}`}
                onClick={handleSetMenu}
                >
                    {t('nav.services')}
                </NavLink>
            </li>

            <li>
                <NavLink 
                to="/projects"
                className= {({isActive}) => `text-xl font-semibold transition-colors ${isActive ? "text-indigo-400 border-b-2 p-1" : "none"}`}
                onClick={handleSetMenu}
                >
                    {t('nav.projects')}
                </NavLink>
            </li>

            <li>
                <NavLink 
                to="/about"
                className= {({isActive}) => `text-xl font-semibold transition-colors ${isActive ? "text-indigo-400 border-b-2 p-1" : "none"}`}
                onClick={handleSetMenu}
                >
                    {t('nav.about')}
                </NavLink>
            </li>

            <li>
                <NavLink 
                to="/contact"
                className= {({isActive}) => `text-xl font-semibold transition-colors ${isActive ? "text-indigo-400 border-b-2 p-1" : "none"}`}
                onClick={handleSetMenu}
                >
                    {t('nav.contact')}
                </NavLink>
            </li>




            {/* Languages */}
            <ul 
                className='flex flex-row mx-auto gap-8 mt-5'
                > 
                <li 
                
                className={`hover:bg-slate-800 hover:text-indigo-600 rounded-[10px] mt-2 px-2 md:py-1 md:mt-1 md:mb-2 md:px-5 cursor-pointer`}
                onClick={() => {
                        changeLanguage('en');
                        handleSetMenu();
                    }}
                >
                    <button 
                    className={`cursor-pointer ${i18n.language === "en" ? "text-indigo-600" : "none"}`}
                    >
                    {t('nav.english')}
                    </button>
                </li>

                <li 
                 
                className='hover:bg-slate-800 hover:text-indigo-600 rounded-[10px] mt-2 px-2 md:py-1 md:mb-2 md:px-5 cursor-pointer'
                onClick={() => {
                        changeLanguage('ku');
                        handleSetMenu();
                    }}
                >
                    <button 
                    className={`cursor-pointer ${i18n.language === "ku" ? "text-indigo-600" : "none"}`}
                    >
                    {t('nav.kurdish')}
                    </button>
                </li>
                <li 
                
                className='hover:bg-slate-800 hover:text-indigo-600 rounded-[10px] mt-2 mb-1 px-2 md:py-1 md:mb-1 md:px-5 cursor-pointer'
                onClick={() => {
                        changeLanguage('ar');
                        handleSetMenu();
                    }}
                >
                    <button 
                    className={`cursor-pointer ${i18n.language === "ar" ? "text-indigo-600" : "none"}`}
                    >
                    {t('nav.arabic')}
                    </button>
                </li>
            </ul>
            


        </ul>
    </div>
  )
}

export default Navbar