interface Props {
  titleBold: string;
  body: string;
  width: string;
  icon: React.ReactNode; // 👈 Nuevo!
}

const AboutMeCard: React.FC<Props> = ({ titleBold, body, width, icon }) => {
  return (
    <div className={`${width} h-fit !box-border relative group`}>
      {/* Glow de fondo que aparece al hacer hover, con blur solo en el fondo */}
      <div className="absolute inset-0 rounded-md bg-[#00ffea] opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-300 z-0"></div>

      <div
        className={`relative z-10 bg-neutral-800 text-white p-5 rounded-md border-2 hover:border-[#00ffea] ${
          titleBold === 'Home' ? 'border-green-500' : 'border-neutral-700'
        }`}
      >
        <div className="flex gap-10">
          {icon}
          <div className="w-fit">
            <span className="font-bold text-2xl">{titleBold} </span>
            <p className="text-2xl inline">{body}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeCard;
