import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  link: string;
}

const Button: React.FC<ButtonProps> = ({ children, link }) => {
  return (
    <div className="relative flex items-center justify-center group">
      {/* Glow de fondo que aparece al hacer hover, con blur solo en el fondo */}
      <div className="absolute inset-0 rounded-md bg-[#00ffea] opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-300 z-0"></div>

      {/* Botón encima */}
      <button className="relative z-10 bg-slate-700 text-white px-5 py-3 rounded-md border-2 border-slate-500 hover:border-[#00ffea]">
        <a href={link}>{children}</a>
      </button>
    </div>
  );
};

export default Button;
