function Header() {
  return (
    <header className="h-screen overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center h-full ">
        <div className="text-start flex flex-col gap-5">
          <div className="text-5xl sm:text-6xl md:text-7xl text-primary extrabold-italic  leading-tight">
            <p>Lautaro</p>
            <p>Fernandez</p>
            <p>Szutner</p>
          </div>
          <div className="text-2xl sm:text-3xl md:text-4xl text-secondary bold-italic leading-snug">
            <p>Diseñador</p>
            <p>& Programador web</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
