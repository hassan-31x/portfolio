import Video from "./video.jsx";
import TempProjects from "./tempProjects.jsx";

const Projects = () => {
  const projects = [
    {
      idx: 1,
      title: 'Epsilon Website',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos temporibus alias, perferendis aperiam similique dolore porro repellat sit veritatis, vel est tenetur eius sequi magni. Fugit error velit laboriosam culpa.',
      tech: ['html', 'css', 'react'],
      imgName: "overlay-img",
      videoName: "Project1",
    },
    {
      idx: -1,
      title: 'Epsilon Website',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos temporibus alias, perferendis aperiam similique dolore porro repellat sit veritatis, vel est tenetur eius sequi magni. Fugit error velit laboriosam culpa.',
      tech: ['html', 'css', 'react'],
      imgName: "overlay-img",
      videoName: "Project1",
    },
    {
      idx: 1,
      title: 'Epsilon Website',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos temporibus alias, perferendis aperiam similique dolore porro repellat sit veritatis, vel est tenetur eius sequi magni. Fugit error velit laboriosam culpa.',
      tech: ['html', 'css', 'react'],
      imgName: "overlay-img",
      videoName: "Project1",
    },
    {
      idx: -1,
      title: 'Epsilon Website',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos temporibus alias, perferendis aperiam similique dolore porro repellat sit veritatis, vel est tenetur eius sequi magni. Fugit error velit laboriosam culpa.',
      tech: ['html', 'css', 'react'],
      imgName: "overlay-img",
      videoName: "Project1",
    },
  ];
  
  return (
    <div className="w-[90vw] lg:w-[85vw] xl:w-[75vw] lg:min-h-[50vh] max-w-7xl mx-auto">
       {/* {projects.map((project) => (
        <div className="mb-10">
          <Video
            title={project.title}
            desc={project.desc}
            tech={project.tech}
            imgName={project.imgName}
            videoName={project.videoName}
            keys={project.idx}
          />
        </div>
      ))} */}
      {projects.map((project) => (
        <div className="mb-10">
          <TempProjects
          title={project.title}
          desc={project.desc}
          tech={project.tech}
          imgName={project.imgName}
          videoName={project.videoName}
          keys={project.idx} />
        </div>
      ))}
    </div>
  );
};

export default Projects;
