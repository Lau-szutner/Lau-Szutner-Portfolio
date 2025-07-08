import React from 'react';

interface Props {
  title: string;
  dates: string;
  description: string;
  icon: React.ReactNode; // 👈 Nuevo!
}

const Experience: React.FC<Props> = ({ title, dates, description, icon }) => {
  return (
    <div className="h-fit !box-border relative group">
      {/* Glow de fondo */}
      <div className="absolute inset-0 rounded-md bg-[#00ffea] opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-300 z-0"></div>

      <div className="relative z-10 bg-neutral-800 text-white p-5 rounded-md border-2 hover:border-[#00ffea]">
        <div className="flex gap-10 items-start">
          <div className="w-12 h-12 flex-shrink-0">{icon}</div>
          <div className="flex-1">
            <h3 className="font-bold text-2xl">{title}</h3>
            <p className="text-xl">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

// <div>
//   {icon}
//   <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-center w-full ">
//     Jobs:
//   </h1>

//   <div>
//     <p>{title}</p>
//     <p>{dates}</p>
//     <p>{description}</p>
//   </div>
// </div>
