import { useState, useEffect, useRef, useLayoutEffect } from 'react'
import { motion, useScroll } from 'framer-motion'
import {gsap, Power1, Power3} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
// import ScrollSmoother from 'gsap/ScrollSmoother'
// import ScrollSmoother from 'gsap-trial/ScrollSmoother'
// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
gsap.registerPlugin(ScrollTrigger);

import Navbar from './components/navbar.jsx'
import './App.css'
import SocialIcons from './components/social.jsx'
import Hero from './components/hero.jsx'
import About from './components/about.jsx'
import Skills from './components/skills.jsx'
import Widget from './components/widget.jsx'
import Projects from './components/projects.jsx'
import CallToAction from './components/cta.jsx'
import Contact from './components/contact.jsx'
import Work2 from './components/test/work2.jsx'
import Work3 from './components/test/work3.jsx'

function App() {
  let app = useRef(null)
  let main = useRef(null)

  const [hover, setHover] = useState(false)
  const [enter, setEnter] = useState(false)

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  })

  useEffect(() => {
    const getMousePosition = e => {
      setMousePosition({
        x: e.clientX - 17,
        y: e.clientY - 14
      })
    }
    
    window.addEventListener('mousemove', getMousePosition)
    
    return () => {
      window.removeEventListener('mousemove', getMousePosition)
    }
    
  }, [])
  
  // useEffect(() => {
  //   // let smoother = ScrollSmoother.create({
  //   //   smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
  //   //   effects: true // looks for data-speed and data-lag attributes on elements
  //   // });
  //   // return () => {
  //   //   smoother.kill();
  //   // };

  //   let smoother = ScrollSmoother.create({
  //     wrapper: app,
  //     content: main
  //   })
  // }, []);
  useEffect(() => {
    gsap.fromTo(app, 0, {css: {visibility: 'hidden'}}, {css: {visibility: 'visible'}})

    gsap.fromTo('.line', 1.2, {width: '2px'}, {width: '85vw', ease: Power1.easeInOut, scrollTrigger: {trigger: '.line', start: 'top 80%'}})
    
  }, [])
  const [cursorVariant, setCursorVariant] = useState('default')
  const { scrollYProgress } = useScroll()
  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y
    },
    text: {
      x: mousePosition.x - 17,
      y: mousePosition.y - 14,
      height: 70,
      width: 70
    },
    large: {
      x: mousePosition.x - 44,
      y: mousePosition.y - 45,
      height: 130,
      width: 130
    }
  }

  return (
    <div className="App bg-darkColor invisible overflow-hidden" ref={el => app=el}>
      <div ref={el => main = el}>
      <motion.path className='bg-red-900'
      d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
      style={{ pathLength: scrollYProgress }}/>
        
        <Navbar changeHover={hvr => {
          setHover(hvr)
          console.log(hvr)
          if (hvr) setCursorVariant('text')
          else setCursorVariant('default')
        }} />
        <Hero />
        <About />
        <div className='mt-48 mb-20 line w-[2px] max-w-7xl h-[1px] bg-[#3f3d46] mx-auto' />
        <Widget />
        <Projects />
        <Skills />
        <CallToAction changeEnter={enter => {
          setEnter(enter)
          if (enter) setCursorVariant('large')
          else setCursorVariant('default')
        }} />
        <Contact />

        <SocialIcons />
        <motion.div
        variants = {variants}
        animate = {cursorVariant}
        className={`hidden lg:block border border-purple h-5 w-5 rounded-full fixed top-0 left-0 pointer-events-none z-[999999] ${cursorVariant === 'text' || cursorVariant === 'large' ? 'bg-purple opacity-50' : 'bg-transparent'} text-center leading-[130px] font-Poppins font-normal text-white`} >{cursorVariant === 'large' && 'Contact'}</motion.div>
        
      </div>
    </div>
  )
}

export default App
