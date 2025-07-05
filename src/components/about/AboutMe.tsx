import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <section className="w-full h-screen flex justify-center">
      {' '}
      <div className="w-fit h-fit !box-border relative group">
        {/* Glow de fondo que aparece al hacer hover, con blur solo en el fondo */}
        <div className="absolute inset-0 rounded-md bg-[#00ffea] opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-300 z-0"></div>

        <div className="relative z-10 bg-neutral-800 text-white p-5 rounded-md border-2 border-neutral-700 hover:border-[#00ffea] grid grid-cols-2">
          <div className="flex flex-col gap-1">
            <p>
              <span className="font-bold">Location: </span>Argentina
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
