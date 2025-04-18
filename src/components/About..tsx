import Experience from './Experience';

const About = () => {
  return (
    <div className="w-full bg-blue-500 py-10">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <div className="flex flex-col gap-5 w-11/12 max-w-3xl">
          <div>
            <h3 className="font-bold text-2xl mb-3">Work experience</h3>
            <Experience title="hola" subject="dlsllss" />
            <Experience title="hola" subject="dlsllss" />
          </div>
          <div>
            <h3 className="font-bold text-2xl mb-3">Education</h3>
            <p className="text-white">[Agregar contenido educativo aquí]</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
