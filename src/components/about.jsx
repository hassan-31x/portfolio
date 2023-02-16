import { useState, useEffect, useRef } from "react";
import { gsap, Power1, Power3 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import './styling/gradients.css'
import About1 from "../assets/about1.webp";
import About2 from "../assets/about2.webp";
gsap.registerPlugin(ScrollTrigger)

const About = () => {
  let text = useRef(null)
  let img1 = useRef(null)
  let img2 = useRef(null)
  let imgs = useRef(null)

  // const [scrollPosition, setScrollPosition] = useState(0);

  // useEffect(() => {
  //   const getScrollPosition = () => {
  //     setScrollPosition(window.pageYOffset);
  //   };

  //   window.addEventListener("scroll", getScrollPosition);

  //   return () => {
  //     window.removeEventListener("scroll", getScrollPosition);
  //   };
  // }, []);

  useEffect(() => {
    gsap.fromTo(text, {x: '-100%', opacity: 0}, {x: 0, opacity: 1, ease: Power3.easeOut, duration: 2, scrollTrigger: {
      trigger: text,
      start: 'top 80%',
    }});
    gsap.fromTo(imgs, {opacity: 0},{opacity: 1, ease: Power1.easeInOut, duration: 1, delay: 1, scrollTrigger: {
      trigger: imgs,
    }});

    gsap.fromTo(img1, {rotation: -25}, {rotation: -15, duration: 1, scrollTrigger: {
      trigger: img1,
      scrub: 0.0005,
      start: 'top 70%',
      end: 'bottom 15%'
    }})

    gsap.fromTo(img2, {rotation: -15}, {rotation: -7, duration: 2, scrollTrigger: {
      trigger: img2,
      scrub: 0.0005,
      start: 'top 70%',
      end: 'bottom 15%'
    }})

  }, [])
  

  return (
    <div className="w-[80%] lg:w-[75%] min-h-screen pt-32 max-w-[90rem] mx-auto flex flex-col lg:flex-row gap-5">
      <div className="flex-[2] mb:20 lg:mb-0 relative">
        <h3 className="text-gray-400 text-center lg:text-left text-lg lg:text-xl xl:text-2xl font-Poppins uppercase lg:leading-10 translate-x-[-100%] opacity-0 text" ref={(el) => text=el}>
          I am Muhammad Hassan, a react developer having command over
          technologies like{" "}
          <span className="text-lightPurple capitalize italic">React JS</span> &{" "}
          <span className="text-lightPurple capitalize italic">Next JS </span>
          with an year of experience. I enjoy making intuitive UI and complex
          full stack applications. Want to hire me? I am just an email away!!
        </h3>
        <div className="gradient-03 absolute" />
      </div>
      <div className="flex-[5] relative h-auto lg:top-[-4.5rem] z-[100] opacity-100 mb-[25rem] mt-20 lg:my-0" ref={el => imgs=el}>
        <img
          src={About2}
          ref={el => img1=el}
          // style={{transform: `rotate(${(scrollPosition/70)-20}deg)`}}
          className={`h-[20rem] md:h-[33rem] lg:h-[38rem] xl:h-[45rem] absolute right-10 -rotate-[25deg] rounded-lg origin-bottom-left -top-10 grayscale hover:grayscale-0 duration-300`}
        />
        <img
          src={About1}
        //   style={scrollPosition/45<=15 ? {transform: `rotate(${(scrollPosition/45)-10}deg)`} : {}}
          // style={{transform: `rotate(${(scrollPosition/65)-10}deg)`}}
          ref={el => img2=el}
          className="h-[20rem] md:h-[33rem] lg:h-[38rem] xl:h-[45rem] absolute z-10 right-0 -rotate-[15deg] rounded-lg top-0 grayscale origin-bottom-left  hover:grayscale-0 duration-300"
        />
      </div>
    </div>
  );
};

export default About;
