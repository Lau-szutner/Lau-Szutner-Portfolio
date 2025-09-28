import icons from '../../assets/icons';
import { ProjectProps } from './types';

const ProjectCard: React.FC<ProjectProps> = ({
  skills,
  title,
  body,
  image,
  githubUrl,
  webUrl,
}) => {
  return (
    <div className="!box-border relative group xl:m-10 w-11/12 lg:w-11/12">
      {/* Glow de fondo */}
      <div className="absolute inset-0 rounded-md bg-[#00ffea] opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-300 z-0"></div>

      <div className="relative z-10 bg-neutral-800 text-white p-5 rounded-md border-2 border-neutral-700 hover:border-[#00ffea] grid gap-10 md:grid-cols-2">
        <img src={image} alt="" className="self-center" />

        <div className="gap-10 grid">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p>{body}</p>

          <div>
            <p className="font-bold">Tecnologías usadas:</p>
            <ul className="space-y-2 grid sm:grid-cols-2">
              {skills.map((skill, index) => {
                const Icon = icons[skill.iconName];
                const iconClass =
                  skill.iconName === 'Bootstrap' ? 'w-12 h-12' : 'w-10 h-10';

                return (
                  <li key={index} className="flex items-center gap-2">
                    <Icon className={iconClass} />
                    <span>{skill.label}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="grid w-full gap-5 sm:grid-cols-2">
            <a
              href={githubUrl}
              target="_blank"
              className="w-full bg-neutral-600 rounded-md flex items-center justify-center py-2 hover:scale-110 transition delay-150 duration-300 ease-in-out hover:bg-neutral-500"
            >
              Github
            </a>
            <a
              href={webUrl}
              target="_blank"
              className="w-full bg-neutral-600 rounded-md flex items-center justify-center py-2 hover:scale-110 transition delay-150 duration-300 ease-in-out hover:bg-neutral-500"
            >
              Web
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
