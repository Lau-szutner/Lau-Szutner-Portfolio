import myImage from '../assets/projects/project-1.svg';

const ProjectCard = () => {
  return (
    <div className=" w-11/12 !box-border relative group">
      {/* Glow de fondo que aparece al hacer hover, con blur solo en el fondo */}
      <div className="absolute inset-0 rounded-md bg-[#00ffea] opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-300 z-0"></div>

      <div className="relative z-10 bg-slate-700 text-white px-5 py-3 rounded-md border-2 border-slate-500 hover:border-[#00ffea] grid grid-cols-2">
        <img src={myImage} alt="" />
        <div>
          <h2 className="text-5xl font-bold">MoneyMind</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            dicta possimus beatae sint ea libero nobis ipsum quibusdam pariatur
            consequatur reiciendis omnis veniam eum maiores, sapiente vero
            nostrum eaque eveniet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
