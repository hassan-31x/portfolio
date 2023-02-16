import Skill from "./skill.jsx";
import "./styling/gradients.css";

const Skills = () => {

  const techs = [
    {
      name: 'Javascript',
      img: 'javascript',
      last: 'false'
    },
    {
      name: 'React JS',
      img: 'reacts',
      last: 'false'
    },
    {
      name: 'Next JS',
      img: 'next',
      last: 'false'
    },
    {
      name: 'Tailwind CSS',
      img: 'tailwind',
      last: 'true'
    },
    {
      name: 'Typescript',
      img: 'typescript',
      last: 'true'
    },
    {
      name: 'Node JS',
      img: 'node',
      last: 'true'
    },
    {
      name: 'Express JS',
      img: 'express',
      last: 'false'
    },
    {
      name: 'MYSQL',
      img: 'mysql',
      last: 'false'
    },
    {
      name: 'Firebase',
      img: 'firebase',
      last: 'false'
    },
  ]

  return (
    <div className="h-screen relative flex flex-col mb-96 text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute font-Code top-36 uppercase tracking-[3px] text-white text-3xl">
        Skills
      </h3>

      <div className="relative z-[999999999999]">
        <div className="grid grid-cols-3 gap-5 md:gap-8 lg:mt-5 ">
          {
            techs.map((tech) => (
              <Skill last={tech.last} name={tech.name} img={tech.img} />
            ))
          }
        </div>

        <div className="top-[-30%] lg:top-[60%] gradient-02" />
        <div className="lg:block hidden gradient-05" />
        <div className="lg:block hidden gradient-01" />
        <div className="lg:block hidden gradient-04" />
      </div>
    </div>
  );
};

export default Skills;
