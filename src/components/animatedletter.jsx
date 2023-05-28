import { useEffect } from 'react';
import './styling/animate.css'
import { gsap } from "gsap";
import { motion } from 'framer-motion'

const AnimatedLetter = ({ letterClass, stringArray, index}) => {
  
//   let tl = gsap.timeline({
//     ease: 'power1.out'
// })


// useEffect(() => {
//     tl.to('.text-animate', {y: '-20%', duration: 0.9, delay: 0.8, opacity: 1, stagger: 0.05})
// }, []);

  return (
    <span>
      {
        stringArray.map((char, i) => (
            // <span
            // key={char+i} className={`${letterClass} hello translate-y-0 opacity-[0.2] _${i + index}`}>
            //     {char}
            // </span>
            <motion.span
            initial={{ scale: 0, translateY: 20 }}
            animate={{ scale: [0, 0.7, 1, 1.3, 1], translateY: 0 }}
            transition={{ type: "spring", duration: 1, delay: (i+index)/25 }}
            key={char+i} className={`${letterClass} _${i + index} cursor-pointer`}>
                {char} 
            </motion.span>
        ))
      }
    </span>
  )
}

export default AnimatedLetter
