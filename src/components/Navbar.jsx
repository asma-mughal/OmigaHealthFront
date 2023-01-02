import React, {useState, useEffect, Fragment} from 'react';
import i18next from "i18next";
import { Link, animateScroll as scroll, } from 'react-scroll'
import {Logo1} from '../assets/index';
import { useTranslation } from 'react-i18next';
import { MenuIcon, XIcon, ChevronDownIcon } from '@heroicons/react/outline';
import { Menu, Transition } from '@headlessui/react';
import { useNavigate  } from 'react-router-dom';
import { lang, arabic,english } from '../assets/index';
const Navbar = ({setDot, dot}) => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    const handleClose =()=> setNav(!nav)
    const {t, i18n} = useTranslation(['ABOUT']);
    useEffect(() => {
      if (localStorage.getItem("i18nextLng")?.length > 2) {
        i18next.changeLanguage("en");
        
      }
      

    }, []);
  
    const handleLanguageChange = (e) => {
     if(e=="es"){
      document.body.dir = 'rtl';
      setDot(true);
      console.log(dot);
     }
     if(e=="en") {
      document.body.dir = 'ltr';
      setDot(false);
      console.log(dot)
     }

      i18n.changeLanguage(e);
    };
    function classNames(...classes) {
      return classes.filter(Boolean).join(' ')
    }
    const navigate = useNavigate();
  return (
    <div className='w-screen h-[80px] z-10 bg-sky-50 fixed drop-shadow-lg font-poppins'>
    <div className='flex justify-between items-center w-full h-full'>
      <div className='flex items-center'>
      <img src={Logo1} className="pt-3"  />
        <ul className='hidden md:flex text-xs  font-bold uppercase'
        
        >
        <li className='hover:text-secondary'>
        <Link activeClass="activeLink" to="home" spy={true}
          
          smooth={true} duration={500} >{t("HOME")}</Link>
        </li>
        <li className='hover:text-secondary '
        >
           <Link activeClass="activeLink" to="about" spy={true}
         smooth={true} duration={500}
         ><button className='bg-transparent uppercase text-black border-0 hover:text-secondary
         cursor-pointer
         '
          onClick={()=>navigate("/abt")}>{t("ABOUT")}</button></Link></li>
        <li className='hover:text-secondary'>
        <Link activeClass="activeLink" to="services" spy={true}
         
        smooth={true} duration={500} >{t("SERVICES")}</Link>
        </li>
        <li className='hover:text-secondary'>
        <Link activeClass="activeLink" to="doc" spy={true}
         
         smooth={true} duration={500} >{t("FIND HOSPITAL")}</Link></li>
        <li className='hover:text-secondary'><Link to="contact"
         smooth={true} spy={true} offset={-50} activeClass="activeLink" duration={500}>{t("CONTACT")}</Link></li>
        </ul>
      </div>
      <div className='hidden md:flex pr-4 pl-5'>
      <Menu as="div" className="relative inline-block text-left m-5 ">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md border
         border-gray-300 bg-white px-4 py-2 text-xs font-medium 
         text-black
          hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2
           focus:ring-offset-gray-100">
        <img src={lang} className='w-4 h-4 ml-2'/>
          <ChevronDownIcon className="-mr-1 ml-2 h-3 w-3" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute
         right-0 z-10 mt-2 w-24 origin-top-right rounded-md
         bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  onClick={()=>handleLanguageChange("en")}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
               <img src={english} className="w-6 h-6" />
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                onClick={()=>handleLanguageChange("es")}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 <img src={arabic} className="w-6 h-6" />
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
      </div>
      
      <div className='md:hidden m-6' onClick={handleClick}>
          {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
        
      </div>
    </div>
    <ul className={!nav ? 'hidden' : 'absolute bg-sky-50 w-full px-8 text-sm font-bold'}>
    <li className='hover:text-secondary'><Link to="home" 
        smooth={true} activeClass="activeLink"  duration={500}>{t("HOME")}</Link></li>
        <li className='hover:text-secondary '>
          <Link to="about" smooth={true}  activeClass="activeLink"  offset={-200} duration={500}>{t("ABOUT")}</Link></li>
        <li className='hover:text-secondary'>
          <Link to="services" smooth={true} duration={500}>{t("SERVICES")}</Link></li>
        <li className='hover:text-secondary'>
        <Link to="doc" smooth={true} activeClass="activeLink"  duration={500}>{t("FIND HOSPITAL")}</Link></li>
        <li className='hover:text-secondary'><Link to="contact"
         smooth={true} offset={-50} activeClass="activeLink"  duration={500}>{t("CONTACT")}</Link></li>
      <div className='flex flex-col my-4 mx-3'>
      <Menu as="div" className="relative inline-block text-left m-5">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
        <img src={lang} className='w-4 h-4 ml-2'/>
          <ChevronDownIcon className="mr-10 ml-10 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute
         right-0 z-10 mt-2 w-56 origin-top-right rounded-md
         bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  onClick={()=>handleLanguageChange("en")}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                > <img src={english} className="w-6 h-6" />    
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  onClick={()=>handleLanguageChange("es")}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  <img src={arabic} className="w-6 h-6" />
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
      </div>
    </ul>
  </div>
  )
}

export default Navbar
