import { useState } from "react";
import { motion } from "framer-motion";
import Logo from '../assets/logo.png'
import {RxHamburgerMenu} from 'react-icons/rx'

const Navbar = (props) => {

  const [showNav, setShowNav] = useState(false)

  // render social icons using key
  const socialIcons = [
    {
      name: "facebook",
      url: "www.facebook.com",
    },
    {
      name: "instagram",
      url: "www.instagram.com",
    },
    {
      name: "youtube",
      url: "www.youtube.com",
    },
    {
      name: "snapchat",
      url: "www.snapchat.com",
    },
  ];

  const navItems = [
    {
      name: 'Home',
      id: 'home'
    },
    {
      name: 'Projects',
      id: 'projects'
    },
    {
      name: 'Skills',
      id: 'skills'
    },
    {
      name: 'Contact',
      id: 'contact'
    },
  ]

  const scroll = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <header className="sticky bg-darkColor top-0 p-3 mx-auto z-[1000] w-screen xl:items-center font-Code" >
      <div className="w-full bg-yellow-400 text-black h-10 justify-center text-center flex items-center text-xs lg:text-sm font-Poppins lg:font-semibold">This website is under development. Projects section will be updated. You can view the projects&#160;<a href="https://github.com/hassan-31x" className="underline text-purple"> here </a>&#160;till then</div>
      <div className="flex max-w-7xl mx-auto justify-between items-center">
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="text-white text-3xl uppercase cursor-pointer"
        >
          <img src={Logo} alt="" className="h-20" />
        </motion.div>
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.95,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex items-center text-grey-300 cursor-pointer"
        >
        <ul className="hidden lg:flex gap-8">
            {navItems.map((item, index) => (
              <li key={item.id} className="text-white" onMouseEnter={() => props.changeHover(true)} onMouseLeave={() => props.changeHover(false)} onClick={() => scroll(item.id)}><span className="text-purple pr-2">0{index+1}. </span>{item.name}<div className="underline-div" /></li>
            ))}
        </ul>

        <RxHamburgerMenu className="text-white text-3xl block lg:hidden mr-5" onClick={() => setShowNav(!showNav)} />
        </motion.div>
      </div>
      <div className={`lg:hidden w-screen bg-purple py-2 rounded-md duration-500 ease-out ${showNav ? 'translate-x-0' : 'translate-x-full'}`}>
        <ul className="flex gap-4 justify-between mx-4">
            <li className="text-white" onMouseEnter={() => props.changeHover(true)} onMouseLeave={() => props.changeHover(false)}><span className="text-purple pr-2"></span>Home<div className="underline-div" /></li>
            <li className="text-white" onMouseEnter={() => props.changeHover(true)} onMouseLeave={() => props.changeHover(false)}><span className="text-purple pr-2"></span>Projects<div className="underline-div" /></li>
            <li className="text-white" onMouseEnter={() => props.changeHover(true)} onMouseLeave={() => props.changeHover(false)}><span className="text-purple pr-2"></span>Skills<div className="underline-div" /></li>
            <li className="text-white" onMouseEnter={() => props.changeHover(true)} onMouseLeave={() => props.changeHover(false)}><span className="text-purple pr-2"></span>Contact<div className="underline-div" /></li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
