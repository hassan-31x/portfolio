import { useState, useEffect, useRef } from 'react';
import {gsap, Power3} from 'gsap';
import AnimatedLetter from "./animatedletter.jsx"
import { BiCodeAlt } from 'react-icons/bi'
import { BsArrowDown } from 'react-icons/bs'

const Hero = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
    
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    useEffect(() => {    
        gsap.fromTo('.button2', {opacity: 0}, {opacity: 1, duration: 2.5, delay: 0.8, ease: Power3.easeInOut, stagger: 0.4})
    
      }, [])

    const hiArray = ['H','e','y',' ','👋',',',' ','M','y',' ','n','a','m','e',' ','i','s']
    const nameArray = ['M','u','h','a','m','m','a','d',' ','H','a','s','s','a','n']
    const jobArray = ['R','e','a','c','t',' ','D','e','v','e','l','o','p','e','r','.']

    const downloadPdf = () => {
        // using Java Script method to get PDF file
        fetch('resume-hassan.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'resume-hassan.pdf';
                alink.click();
            })
        })
    }

  return ( 
    <div className="w-[90vw] lg:w-[75vw] lg:min-h-[50vh] max-w-7xl mx-auto mt-16 mb-6 lg:my-28 flex flex-col md:flex-row font-Poppins">
        <div className='h-screen bg-blue-500 absolute'></div>
        <div className="flex gap-1 lg:gap-3 flex-col flex-[4]">
            <p className="lg:text-xl font-semibold opacity-90 text-lightPurple"><AnimatedLetter letterClass={letterClass} stringArray={hiArray} index={0} /></p>
            <h3 className="text-[1.82rem] md:text-[3rem] xl:text-[4.3rem] mb-2 lg:mb-0 text-white font-bold tracking-normal hello translate-y-0"><AnimatedLetter letterClass={letterClass} stringArray={nameArray} index={17} /></h3>
            <h2 className="text-[2.1rem] md:text-[4rem] xl:text-[5.8rem] text-gray-400 font-bold"><AnimatedLetter letterClass={letterClass} stringArray={jobArray} index={32} /></h2>

            <div className="buttons flex gap-2 font-Code">
                <button className='button2 mt-3 mb-6 md:my-0 py-2 px-3 text-xs md:text-lg md:py-3 md:px-5 bg-gray-800 text-white rounded-sm flex duration-150 delay-75 gap-3 items-center hover:text-[#61249a] font-semibold hover:bg-[#bb94d2] opacity-0'><BiCodeAlt />My Projects</button>
                <button className='button2 mt-3 mb-6 md:my-0 py-2 px-3 text-xs md:text-lg md:py-3 md:px-5 text-white flex gap-3 items-center duration-150 delay-75 border border-transparent hover:text-[#bb94d2] opacity-0' onClick={downloadPdf}><BsArrowDown />Download Resume</button>
            </div>
        </div>
        <div className='flex-1 flex items-center pb-2 mx-auto md:mx-0'>
            <div className="mouse ml-auto" />
        </div>
    </div>
  )
}

export default Hero
