import {useEffect, useRef} from "react";
import {gsap} from 'gsap'
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const Work2 = () => {
  let gndo = useRef(null)

  useEffect(() => {
    console.log(document.querySelector('.containers').offsetWidth)
    const sections = gsap.utils.toArray('.containers section')

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: gndo,
        pin: true,
        scrub: 1,
        end: "  +=3500",
        // end: () => '+=' + document.querySelector('.containers').offsetWidth,
        snap: 1 / (sections.length - 1),
        //markers: true,
      }
    })
  }, [])
  
  return (
    <div className="h-screen border-[10px] border-blue-600 w-screen overflow-x-hidden">
      <div className="containers h-full w-[300vw] border-4 mt-auto border-green-800 flex" ref={el => gndo = el} style={{background: 'linear-gradient(to right, red, yellow, black'}}>
        <section className="bg-red-300 h-full w-[100vw]"></section>
        <section className="bg-blue-300 h-full w-[100vw]"></section>
        <section className="bg-yellow-300 h-full w-[100vw]"></section>
      </div>
    </div>
  );
};

export default Work2;