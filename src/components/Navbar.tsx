const Navbar = () => {
  return (
    <nav className="w-full bg-black flex justify-center">
      <ul className="flex justify-center w-full text-2xl font-medium text-white w-10/12">
        {['Inicio', 'Quién soy', 'Proyectos', 'Habilidades', 'Contacto'].map(
          (item, idx) => (
            <li key={idx} className="flex-1 text-center">
              <button className="w-full py-6 hover:bg-sky-500 hover:text-black transition duration-300">
                {item}
              </button>
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
