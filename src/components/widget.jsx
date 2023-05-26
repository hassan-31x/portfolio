import { useEffect } from "react";
import {gsap, Power4} from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const Widget = () => {

useEffect(() => {

  gsap.fromTo('.line span', 1.3, {y: 100, skewY: 7}, {y: 0, ease: Power4.easeOut, delay: 0.7, skewY: 0, scrollTrigger: {
    trigger: '.line',
    start: 'top 95%',
    toggleActions: 'restart none none none'
  }})
  gsap.fromTo('.sub span', 2.5, {opacity: 0}, {opacity: 1, ease: Power4.easeOut, delay: 1, scrollTrigger: {
    trigger: '.line',
    start: 'top 85%'
  }})
}, [])


  return (
    <div className="max-h-[50vh] h-[200px] w-[80%] lg:w-[75%] max-w-[90rem] mx-auto pb-96" id="projects">
      <div class="line h-[50px] lg:h-[70px] relative overflow-hidden mt-10 lg:mt-24">
        <span className="text-gray-100 text-4xl md:text-6xl lg:text-7xl font-Code tracking-tightest uppercase opacity-80 absolute">Projects</span>
      </div>
      <div className="w-96 sub">
        <span className="text-white text-xs w-2 uppercase tracking-wide">web&mobile / ui&ux /<br/>frontend / responsive</span>
      </div>
    </div>
  );
};

export default Widget;
