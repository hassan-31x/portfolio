import {useEffect} from 'react'
import { motion } from 'framer-motion'
import Cursor from '../assets/logo.png'

//Add index.js to import all images from single file
// import Express from '../assets/express.png'
// import Firebase from '../assets/firebase.png'
// import Javascript from '../assets/javascript.png'
// import Mysql from '../assets/mysql.png'
// // import Next from '/src/assets/next.png'
// import Next from '../assets/next.png'
// import Node from '../assets/node.png'
// import Reacts from '../assets/react.png'
// import Tailwind from '../assets/tailwind.png'
// import Typescript from '../assets/typescript.png'


const Skill = ({name, last, img}) => {
    // useEffect(() => {
    //   gsap.fromTo('.skill', 1, {x: '200%', opacity: 0}, {opacity: 1, x: 0, delay: 1, ScrollTrigger: {
    //     trigger: '.img-true',
    //     start: 'top 40%'
    //   }})
    // }, [])
  // const imgs = 'Typescript' 
  return (
    <div className='group relative flex z-[9999999]'>
        <motion.div
        initial={{
           x: last == "true" ? -200 : 200,
           opacity: 0
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x:0 }}
        // src={`/src/assets/${img}`}

        // src={Madarchod}


        // src={`../assets/${img}`}
        //  src={img && require('../assets/' + img)}
         className={`skill translate-x-0 rounded-full border border- object-cover w-[4.5rem] h-[4.5rem] md:w-[6.5rem] md:h-[6.5rem] xl:w-[8rem] xl:h-[8rem] filter group-hover:grayscale transition duration-300 ease-in-out ${img}`} style={{cursor: `url(${Cursor})`}}
         />

        <div className={`absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-gray-200 hover:border-2 hover:border-purple w-[4.5rem] h-[4.5rem] md:w-[6.5rem] md:h-[6.5rem] xl:w-[8rem] xl:h-[8rem] rounded-full z-0 img-true`}>
          <div className="flex items-center justify-center h-full"><p className="text-xs md:text-lg font-Poppins lg:font-bold tracking-tighter text-purple opacity-100 text-center">{name}</p></div>
        </div>
    </div>
  )
}

export default Skill