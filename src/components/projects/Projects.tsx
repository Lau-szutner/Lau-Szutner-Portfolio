import { useState } from 'react';
import ProjectCard from './ProjectsCard';

type IconName =
  | 'react'
  | 'javascript'
  | 'typescript'
  | 'nextjs'
  | 'sequelize'
  | 'git'
  | 'nodejs'
  | 'express'
  | 'css'
  | 'html'
  | 'php'
  | 'tailwind';

interface ProjectSkill {
  iconName: IconName;
  label: string;
}

interface ProjectProps {
  title: string;
  skills: ProjectSkill[];
}

const projects: ProjectProps[] = [
  {
    title: 'MoneyMind',
    skills: [
      { iconName: 'react', label: 'React' },
      { iconName: 'javascript', label: 'Javascript' },
      { iconName: 'typescript', label: 'Typescript' },
      { iconName: 'nextjs', label: 'Nextjs' },
    ],
  },
  {
    title: 'MoneyMind',
    skills: [
      { iconName: 'react', label: 'React' },
      { iconName: 'javascript', label: 'Javascript' },
      { iconName: 'typescript', label: 'Typescript' },
      { iconName: 'nextjs', label: 'Nextjs' },
    ],
  },
  {
    title: 'MoneyMind',
    skills: [
      { iconName: 'react', label: 'React' },
      { iconName: 'javascript', label: 'Javascript' },
      { iconName: 'typescript', label: 'Typescript' },
      { iconName: 'nextjs', label: 'Nextjs' },
    ],
  },
  // agrega más proyectos...
];

const Projects = () => {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  const next = () =>
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));

  return (
    <section
      className="h-min-screen flex flex-col place-items-center gap-5 pt-30"
      id="Projects"
    >
      <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold text-center w-full mb-15">
        Projects
      </h2>
      <div className="flex items-center gap-4 justify-center w-11/12">
        <button
          onClick={prev}
          className="bg-neutral-700 hover:bg-neutral-600 text-white rounded-full w-12 aspect-square flex items-center justify-center text-2xl transition"
          aria-label="Anterior"
        >
          &#8592;
        </button>

        <div className="w-full flex justify-center overflow-hidden">
          <div
            key={current}
            className="w-full flex justify-center animate-fade-slide"
          >
            <ProjectCard {...projects[current]} />
          </div>
        </div>
        <button
          onClick={next}
          className="bg-neutral-700 hover:bg-neutral-600 text-white rounded-full w-12 aspect-square leading-none flex items-center justify-center text-2xl transition"
          aria-label="Siguiente"
        >
          &#8594;
        </button>
      </div>
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
