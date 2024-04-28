import { useState } from 'react'
import { motion } from "framer-motion";
import { IconContext } from "react-icons";
import { AiOutlineGithub, AiOutlineWhatsApp } from 'react-icons/Ai'
import { FaFacebookF, FaLinkedin } from 'react-icons/fa'

const SocialIcons = () => {
  const [hover, setHover] = useState(false)

  const newLocal = "https://github.com/hassan-31x";
  return (
    <div className={`hidden md:flex flex-col items-center fixed bottom-0 lg:left-10 z-10 ${hover ? '-left-20' : 'left-2'}`}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
        onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      >
        <a
          style={{ color: "inherit" }}
          target="_blank"
          href={'https://www.facebook.com/hassan31x/'}
        >
          <IconContext.Provider value={{ className: 'text-purple lg:text-[2rem] text-[1rem] hover:text-[2rem] lg:hover:text-[3rem] origin-centre transition-all duration-[0.35s] ease-out my-2 hover:my-0'}}>
            <FaFacebookF />
          </IconContext.Provider>
        </a>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.2 }}
        onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      >
        <a
          style={{ color: "inherit" }}
          target="_blank"
          href={"https://github.com/hassan-31x"}
        >
          <IconContext.Provider value={{ className: 'text-purple lg:text-[2rem] text-[1rem] hover:text-[2rem] lg:hover:text-[3rem] origin-centre transition-all duration-[0.35s] ease-out my-2 hover:my-0'}}>
            <AiOutlineGithub />
          </IconContext.Provider>
        </a>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.4 }}
        onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      >
        <a
          style={{ color: "inherit" }}
          target="_blank"
          href={"https://www.linkedin.com/in/mhassan31x/"}
        >
          <IconContext.Provider value={{ className: 'text-purple lg:text-[2rem] text-[1rem] hover:text-[2rem] lg:hover:text-[3rem] origin-centre transition-all duration-[0.35s] ease-out my-2 hover:my-0'}}>
            <FaLinkedin />
          </IconContext.Provider>
        </a>
      </motion.div>
      {/* <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.6 }}
        onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      >
        <a
          style={{ color: "inherit" }}
          target="_blank"
          href={"https://www.twitter.com"}
        >
          <IconContext.Provider value={{ className: 'text-purple lg:text-[2rem] text-[1rem] hover:text-[2rem] lg:hover:text-[3rem] origin-centre transition-all duration-[0.35s] ease-out my-2 hover:my-0'}}>
            <AiOutlineTwitter />
          </IconContext.Provider>
        </a>
      </motion.div> */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.6 }} className='mb-4'
        onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      >
        <a
          style={{ color: "inherit" }}
          target="_blank"
          href={"https://api.whatsapp.com/send?phone=923132508277"}
        >
          <IconContext.Provider value={{ className: 'text-purple lg:text-[2rem] text-[1rem] hover:text-[2rem] lg:hover:text-[3rem] origin-centre transition-all duration-[0.35s] ease-out my-2 hover:my-0'}}>
            <AiOutlineWhatsApp />
          </IconContext.Provider>
        </a>
      </motion.div>

      <motion.div
        className="w-[2px] h-10 lg:h-32 bg-[#7440A5]"
        initial={{
          height: 0,
        }}
        animate={{
          height: "10rem",
        }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 0.8,
        }}
      />
    </div>
  )
}

export default SocialIcons
