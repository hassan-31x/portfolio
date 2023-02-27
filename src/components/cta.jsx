import { useEffect } from "react";
import { gsap, Power1, Power3 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger) 

const CallToAction = (props) => {

  useEffect(() => {
    gsap.fromTo('.cta', {opacity: 0}, {opacity: 1, delay: 0.3, duration: 1, scrollTrigger: {
      trigger: '.cta',
      start: 'top 80%',
    }})
  }, [])

  return (
    <div className='cta bg-change relative my-20 lg:my-96 w-screen pt-32 mx-auto h-[80vh] lg:h-[70vh] bg-no-repeat bg-contain cursor-pointer' onMouseEnter={() => props.changeEnter(true)} onMouseLeave={() => props.changeEnter(false)}>
      <div className='absolute hidden lg:block text-4xl xl:text-6xl text-white font-[200] font-Poppins left-[10%] top-auto right-auto bottom-[60%] xl:bottom-[40%]'>
        We take care of your Website 
      </div>
    </div>
  )
}

export default CallToAction