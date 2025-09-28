import { ReactNode } from 'react';

type StatCardProps = {
  icon: string | ReactNode;
  value: number | string;
  label: string;
};

export default function StatCard({ icon, value, label }: StatCardProps) {
  return (
    <div className={`w-full h-fit !box-border relative group`}>
      <div className="absolute inset-0 rounded-md bg-[var(--tint)] opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-300 z-0"></div>

      <div className="relative z-10 bg-neutral-800 text-white p-5 rounded-md border-2 border-neutral-700 hover:border-[var(--tint)]">
        <div className="flex items-center justify-center mb-2 text-2xl">
          {icon}
        </div>
        <p className="text-3xl font-bold">{value}</p>
        <p className="text-sm text-gray-400">{label}</p>
      </div>
    </div>
  );
}
