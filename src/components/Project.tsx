interface ProjectSkills {
  skill1: string;
  skill2: string;
  skill3: string;
}

const Project: React.FC<ProjectSkills> = ({ skill1, skill2, skill3 }) => {
  return (
    <div className="relative flex items-center justify-center group">
      {/* Glow de fondo que aparece al hacer hover, con blur solo en el fondo */}
      <div className="absolute inset-0 rounded-lg bg-[#00ffea] opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-300 z-0"></div>

      {/* Botón encima */}
      <div className="relative z-10 bg-slate-700 text-white rounded-lg border-2 border-slate-500 hover:border-[#00ffea]">
        <img
          src="https://picsum.photos/350/200"
          alt=""
          className="rounded-t-lg"
        />
        <div className="p-5">
          <p className="text-2xl font-bold">Used:</p>
          <ul>
            <li>{skill1}</li>
            <li>{skill2}</li>
            <li>{skill3}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Project;
