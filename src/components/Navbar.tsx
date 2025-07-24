const Navbar = () => {
  return (
    <nav className="w-full flex justify-center ">
      <ul className="flex justify-center w-full text-1xl font-medium text-white w-10/12">
        {['Home', 'Projects', 'About', 'Github', 'Contact'].map((item, idx) => (
          <li key={idx} className="flex-1 text-center">
            <button className="w-full py-3 hover:bg-zinc-500  transition duration-300">
              <a href={`#${item}`}>{item}</a>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
