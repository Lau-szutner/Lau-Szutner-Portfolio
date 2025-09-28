import { ReactNode } from 'react';

export const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className="relative flex items-center justify-center group">
        {/* Glow de fondo que aparece al hacer hover, con blur solo en el fondo */}
        <div className="absolute inset-0 rounded-md bg-[var(--tint)] opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-300 z-0"></div>

        {/* Botón encima */}

        <div className="w-full relative z-10 bg-neutral-800 text-white p-5 rounded-md border-2 border-neutral-700 hover:border-[var(--tint)]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Container;
