import icons from '../assets/icons';

interface ProjectSkill {
  iconName: keyof typeof icons;
  label: string;
}

interface ProjectProps {
  skills: ProjectSkill[];
  title: string;
}

const Project: React.FC<ProjectProps> = ({ skills, title }) => {
  return (
    <div className="relative flex items-center justify-center group">
      {/* Glow de fondo */}
      <div className="absolute inset-0 rounded-lg bg-[#00ffea] opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-300 z-0"></div>

      {/* Contenedor principal */}
      <div className="relative z-10 bg-slate-700 text-white rounded-lg border-2 border-slate-500 hover:border-[#00ffea]">
        <img
          src="https://picsum.photos/350/200"
          alt="Project"
          className="rounded-t-lg"
        />
        <h1 className="text-3xl text-center m-4 font-bold">{title}</h1>{' '}
        {/* ← Aquí también agregué el title */}
        <div className="p-5">
          <p className="text-2xl font-bold mb-2">technologies:</p>

          <ul className="space-y-2 grid grid-cols-2">
            {skills.map((skill, index) => {
              const Icon = icons[skill.iconName];
              return (
                <li key={index} className="flex items-center gap-2">
                  <Icon className="w-12 h-12" />
                  <span>{skill.label}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Project;
