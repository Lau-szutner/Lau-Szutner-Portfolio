import Project from './Project';

const Projects = () => {
  return (
    <div className="h-screen  flex flex-col place-items-center gap-5">
      <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-center w-full">
        Projects
      </h2>
      <Project skill1="HTML" skill2="css" skill3="js"></Project>
    </div>
  );
};

export default Projects;
