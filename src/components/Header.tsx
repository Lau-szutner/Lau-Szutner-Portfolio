import Card from './Card';

function Header() {
  return (
    <header className="h-screen overflow-hidden background">
      <div className="grid grid-cols-2 md:grid-cols-2 place-items-center h-full ">
        <div className="text-start flex flex-col gap-5">
          <div className="text-5xl sm:text-6xl md:text-7xl mb-10">
            <p>
              <span className="text-accent"> Hey there!, </span>
              I'm
            </p>
          </div>
          <div className="sm:text-6xl md:text-7xl ">
            <p>Lautaro</p>
            <p>Fernandez</p>
            <p>Szutner</p>
          </div>
          <div className="flex gap-4">
            <button className="bg-gray-500 w-fit px-5 py-3 rounded-md">
              Github
            </button>
            <button className="bg-gray-500 w-fit px-5 py-3 rounded-md">
              Github
            </button>
            <button className="bg-blue-500 p-4">Github</button>
          </div>
        </div>

        <div className="flex flex-col items-center gap-5 ">
          <div className="line">
            <img
              src="/photo-perfil.png"
              alt="Foto de perfil"
              className="rounded-lg"
            />
          </div>

          {/* <p className="text-xl w-9/12 ">
            Full Stack Developer Turning ideas into responsive, scalable, and
            user-friendly digital experiences.
          </p> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
