import icons from "@/assets/icons/index";

const Skills = () => {
  return (
    <section
      id="Skills"
      className="h-fit overflow-hidden background py-30 grid place-items-center w-full"
    >
      <h2 className="text-6xl font-bold text-center w-full mb-10">Skills</h2>

      <div className="flex flex-wrap justify-center gap-6 w-full lg:w-11/12 md:w-9/12 ">
        {Object.entries(icons).map(([key, IconComponent]) => (
          <div key={key} className="w-fit h-fit !box-border relative group">
            {/* Fondo que se revela al hacer hover */}
            <div className="absolute inset-0 rounded-md bg-[var(--tint)] opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-300 z-0"></div>

            <div className="relative z-10 bg-neutral-800 text-white p-5 rounded-md border-2 border-neutral-700 hover:border-[var(--tint)] flex justify-center items-center">
              <IconComponent className="w-16 h-16" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
