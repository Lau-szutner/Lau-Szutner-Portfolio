import Project from './Project';

const Projects = () => {
  return (
    <div className="h-screen  flex flex-col place-items-center gap-5">
      <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-center w-full">
        Projects
      </h2>

      
      <Project
  skills={[
    { iconName: "css", label: "CSS3" },{ iconName: "html", label: "HTML5" }
  ]}
/>

    </div>
  );
};

export default Projects;
