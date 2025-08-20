import { useState } from 'react';
import ProjectCard from './ProjectsCard';
import { projects } from './projectsData';

const Projects = () => {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  const next = () =>
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));

  return (
    <section
      className="h-min-screen flex flex-col place-items-center gap-5 pt-30 w-full"
      id="Projects"
    >
      <h2 className="text-6xl font-bold text-center w-full mb-15">Projects</h2>
      <div className="flex items-center justify-center w-11/12">
        {/* Botón anterior */}
        <button
          onClick={prev}
          className="bg-neutral-700 hover:bg-neutral-600 rounded-full w-12 aspect-square flex items-center justify-center text-2xl transition"
          aria-label="Anterior"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.0303 3.96967C11.3232 4.26256 11.3232 4.73744 11.0303 5.03033L4.81066 11.25H21C21.4142 11.25 21.75 11.5858 21.75 12C21.75 12.4142 21.4142 12.75 21 12.75H4.81066L11.0303 18.9697C11.3232 19.2626 11.3232 19.7374 11.0303 20.0303C10.7374 20.3232 10.2626 20.3232 9.96967 20.0303L2.46967 12.5303C2.17678 12.2374 2.17678 11.7626 2.46967 11.4697L9.96967 3.96967C10.2626 3.67678 10.7374 3.67678 11.0303 3.96967Z"
              fill="#ffffff"
            />
          </svg>
        </button>

        {/* Card activa */}
        <div className="w-full flex justify-center overflow-hidden">
          <div
            key={current}
            className="w-full flex justify-center animate-fade-slide"
          >
            <ProjectCard {...projects[current]} />
          </div>
        </div>

        {/* Botón siguiente */}
        <button
          onClick={next}
          className="bg-neutral-700 hover:bg-neutral-600 rounded-full w-12 aspect-square flex items-center justify-center text-2xl transition"
          aria-label="Siguiente"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.9697 3.96967C13.2626 3.67678 13.7374 3.67678 14.0303 3.96967L21.5303 11.4697C21.671 11.6103 21.75 11.8011 21.75 12C21.75 12.1989 21.671 12.3897 21.5303 12.5303L14.0303 20.0303C13.7374 20.3232 13.2626 20.3232 12.9697 20.0303C12.6768 19.7374 12.6768 19.2626 12.9697 18.9697L19.1893 12.75H3C2.58579 12.75 2.25 12.4142 2.25 12C2.25 11.5858 2.58579 11.25 3 11.25H19.1893L12.9697 5.03033C12.6768 4.73744 12.6768 4.26256 12.9697 3.96967Z"
              fill="#ffffff"
            />
          </svg>
        </button>
      </div>

      {/* Indicadores */}
      <div className="flex gap-2">
        {projects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${
              current === idx ? 'bg-[#00ffea]' : 'bg-neutral-600'
            }`}
            aria-label={`Ir al proyecto ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
