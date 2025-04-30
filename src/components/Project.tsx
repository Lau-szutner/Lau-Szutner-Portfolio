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

            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>HTML5</title>
              <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
            </svg>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Project;
