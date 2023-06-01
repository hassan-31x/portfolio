import { useEffect, useRef } from 'react'
import HoverVideoPlayer from "react-hover-video-player";
import Img from '../assets/overlay-img.png'
import {gsap, Power2} from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
 
const tempProjects = ({title, desc, tech, imgName, videoName, keys}) => {
  let container = useRef(null)
  let img = useRef(null)

  useEffect(() => {

    // gsap.fromTo(container, 2, {x: `${keys/2}00%`, opacity: 0}, {x: 0, opacity: 1, ease: Power2.easeInOut, scrollTrigger: {
    //   trigger: container,
    //   start: 'top 80%',
    // }})
    gsap.to(img, {yPercent: -30, scrollTrigger: {
      trigger: img,
      scrub: true
    }})
  }, [])

  return (
    <div className={`opacity-100 translate-x-0 relative flex flex-col mb-48 lg:mb-0 overflow-hidden ${keys === 1 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`} ref={el => container=el}>

      <div className='mx-auto lg:mx-0 max-w-[50rem] w-[90vw] h-auto mb-10 lg:mb-0 z-[1]'>
        <img
          src={Img}
          className='w-full'
          ref={el => img=el}
          />
      </div>
        
      <div className={`text-white ${keys === 1 ? 'right-0' : 'left-0'} lg:absolute z-[1] lg:z-[100]`}>
        <div className={`w-max ${keys === 1 ? 'lg:ml-auto' : 'lg:mr-auto'}`}>
          {
            tech.map((lang) => (
              <span className='text-xs bg-purple py-1 px-2 mx-1 rounded-full font-Poppins'>{lang}</span>
            ))
          }
        </div>
        <h2 className={`text-3xl font-regular font-Poppins ${keys === 1 ? 'lg:text-right' : 'lg:text-left'} lg:my-3 my-1`}>{title}</h2>
        <div className=' w-[35rem] bg-black rounded-md h-56 lg:mt-10 max-w-[90vw]'>
          <p className='py-3 px-5 lg:pt-5 lg:px-10'>{desc}</p>
        </div>
      </div>


    </div>
  )
}

export default tempProjects
