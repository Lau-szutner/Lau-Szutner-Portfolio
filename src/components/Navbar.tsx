const Navbar = () => {
  return (
    <nav className="w-full z-50 flex justify-center bg-black">
      <ul className="flex justify-center w-full text-2xl font-medium text-white w-10/12">
        {['Home', 'Projects', 'About'].map((item, idx) => (
          <li key={idx} className="flex-1 text-center">
            <button className="w-full py-3 hover:bg-sky-500 hover:text-black transition duration-300">
              <a href={`#${item}`}>{item}</a>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
