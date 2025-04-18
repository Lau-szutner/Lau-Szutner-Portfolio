const About = () => {
  return (
    <div className="w-full bg-blue-500">
      <div className="flex flex-col place-items-center">
        <h2>About Me</h2>
        <div className="flex flex-col gap-5">
          <div>
            <h3 className="font-bold text-2xl">Work experience</h3>
            <div>
              <div className="flex gap-5">
                <p>X</p>
                <div className="flex flex-col">
                  <p className="font-bold">Desarrollo y administracion</p>
                  <p className="font-italic">Metamind 2022-presente</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p>education</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
