import React from 'react';

interface Props {
  icon: React.ReactNode;
  children: React.ReactNode;
}

const ExperienceList: React.FC<Props> = ({ icon, children }) => {
  return (
    <div className="h-fit !box-border relative group">
      {/* Glow de fondo */}
      <div className="absolute inset-0 rounded-md bg-[var(--tint)] opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-300 z-0"></div>

      <div className="relative z-10 bg-neutral-800 text-white p-5 rounded-md border-2 border-neutral-700 hover:border-[var(--tint)] grid gap-5 lg:grid-cols-[0.1fr_1fr]">
        <div className="mb-4">{icon}</div>
        <div className="grid gap-4">{children}</div>
      </div>
    </div>
  );
};

export default ExperienceList;
