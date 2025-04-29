import Button from './Button';

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
          <div className="sm:text-6xl md:text-7xl font-bold">
            <p>Lautaro</p>
            <p>Fernandez</p>
            <p>Szutner</p>
          </div>
          <div className="flex gap-4">
            <Button link={'https://github.com/Lau-szutner/portfolio'}>
              Github
            </Button>
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
        </div>
      </div>
    </header>
  );
}

export default Header;
