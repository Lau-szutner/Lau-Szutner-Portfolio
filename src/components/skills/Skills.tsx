import React from 'react';
import icons from '@/assets/icons/index';
import { portfolioData } from '../data/data';

const Skills: React.FC = () => {
  const skills = portfolioData.skills;

  // Normalizamos los nombres para que coincidan con las claves de icons
  const normalizeSkillName = (skill: string) =>
    skill.toLowerCase().replace('.', '').replace(' ', '');

  return (
    <section
      id="Skills"
      className="h-fit overflow-hidden background py-30 grid place-items-center w-full"
    >
      <h2 className="text-6xl font-bold text-center w-full mb-10">Skills</h2>

      <div className="flex flex-wrap justify-center gap-6 w-full lg:w-11/12 md:w-9/12">
        {skills.map((skill, index) => {
          const normalizedKey = normalizeSkillName(skill) as keyof typeof icons;
          const IconComponent = icons[normalizedKey];

          return (
            <div
              key={index}
              className="w-fit h-fit !box-border relative group text-center"
            >
              {/* Fondo que se revela al hacer hover */}
              <div className="absolute inset-0 rounded-md bg-[var(--tint)] opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-300 z-0"></div>

              {/* Contenedor del ícono */}
              <div className="relative z-10 bg-neutral-800 text-white p-5 rounded-md border-2 border-neutral-700 hover:border-[var(--tint)] flex justify-center items-center transition-all duration-300">
                {IconComponent ? (
                  <IconComponent className="w-16 h-16" />
                ) : (
                  <span className="text-sm text-gray-400">{skill}</span>
                )}
              </div>

              {/* Nombre debajo del ícono */}
              <span className="block mt-3 text-sm font-medium">{skill}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
