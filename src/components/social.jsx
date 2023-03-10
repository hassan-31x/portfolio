import { motion } from "framer-motion";
import { IconContext } from "react-icons";
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineTwitter } from 'react-icons/Ai'
import { FaFacebookF, FaLinkedin } from 'react-icons/fa'

const SocialIcons = () => {
  return (
    <div className="hidden md:flex flex-col items-center fixed bottom-0 left-2 lg:left-10 z-10">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      >
        <a
          style={{ color: "inherit" }}
          target="_blank"
          href={"https://github.com/codebucks27"}
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
      >
        <a
          style={{ color: "inherit" }}
          target="_blank"
          href={"https://twitter.com/code_bucks"}
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
      >
        <a
          style={{ color: "inherit" }}
          target="_blank"
          href={"https://facebook.com/codebucks27"}
        >
          <IconContext.Provider value={{ className: 'text-purple lg:text-[2rem] text-[1rem] hover:text-[2rem] lg:hover:text-[3rem] origin-centre transition-all duration-[0.35s] ease-out my-2 hover:my-0'}}>
            <FaLinkedin />
          </IconContext.Provider>
        </a>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.6 }} className='mb-4'
      >
        <a
          style={{ color: "inherit" }}
          target="_blank"
          href={"https://youtube.com"}
        >
          <IconContext.Provider value={{ className: 'text-purple lg:text-[2rem] text-[1rem] hover:text-[2rem] lg:hover:text-[3rem] origin-centre transition-all duration-[0.35s] ease-out my-2 hover:my-0'}}>
            <AiOutlineTwitter />
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
