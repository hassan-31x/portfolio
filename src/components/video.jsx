import { useEffect, useRef } from 'react'
import HoverVideoPlayer from "react-hover-video-player";
import {gsap, Power2} from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const Video = ({title, desc, tech, imgName, videoName, keyss}) => {
  let container = useRef(null)
  let img = useRef(null)

  useEffect(() => {

    gsap.fromTo(container, 2, {x: `${keyss/2}00%`, opacity: 0}, {x: 0, opacity: 1, ease: Power2.easeInOut, scrollTrigger: {
      trigger: container,
      start: 'top 80%',
    }})
    gsap.to(img, {yPercent: -30, scrollTrigger: {
      trigger: img,
      scrub: true
    }})
  }, [])

  return (
    <div className={`opacity-100 translate-x-0 relative flex flex-col overflow-hidden ${keyss === 1 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`} ref={el => container=el}>
        <HoverVideoPlayer
          restartOnPaused
          pausedOverlay={
            <img
              src={`/src/assets/${imgName}.png`}
              className='grayscale-[60%]'
              ref={el => img=el}
              alt=""
              style={{
                width: "150%",
                height: "150%",
                objectFit: "cover",
              }}
            />
          }
          videoSrc={`/src/assets/${videoName}.mp4`} className='mx-auto lg:mx-0 w-[55rem] max-w-[60vw] h-auto mb-10 lg:mb-0'
        />
        
        <div className={`text-white ${keyss === 1 ? 'right-0' : 'left-0'} absolute z-[100]`}>
          <div className={`w-max ${keyss === 1 ? 'lg:ml-auto' : 'lg:mr-auto'}`}>
            {
              tech.map((lang) => (
                <span className='text-xs bg-purple py-1 px-2 mx-1 rounded-full'>{lang}</span>
              ))
            }
          </div>
          <h2 className={`text-3xl font-semibold font-Code ${keyss === 1 ? 'lg:text-right' : 'lg:text-left'} lg:my-3 my-1`}>{title}</h2>
          <div className=' w-[35rem] bg-black rounded-md h-56 lg:mt-10 max-w-[90vw]'>
            <p className='pt-5 px-10'>{desc}</p>
          </div>
        </div>
    </div>
  )
}

export default Video
