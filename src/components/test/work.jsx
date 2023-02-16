

import {useEffect, useRef} from "react";
import {gsap} from 'gsap'
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const Work = () => {
  let gndo = useRef(null)

  useEffect(() => {
    const sections = gsap.utils.toArray('.containers section')

    let scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: '.containers',
        pin: true,
        scrub: 1,
        start: 'top 50%',
        toggleActions: 'restart none none none',
        // end: "  +=3000",
        // end: () => '+=' + gndo.offsetWidth,
        end: () => '+=' + document.getElementsByClassName('containers').offsetWidth,
        snap: 1 / (sections.length - 1),
        //markers: true,
      }
    })
  }, [])
  
  return (
    <div className="h-[200px] w-screen overflow-x-hidden">
      <div className="containers h-full w-[300vw] flex" ref={el => gndo = el} style={{background: 'linear-gradient(to right, red, yellow, black'}}>
        <section className="bg-violet-200 h-full w-[100vw]"></section>
        <section className="bg-violet-500 h-full w-[100vw]"></section>
        <section className="bg-violet-800 h-full w-[100vw]"></section>
      </div>
    </div>
  );
};

export default Work;

