const Navbar = () => {
  return (
    <nav className="w-full flex justify-center fixed top-0 bg-[#171717] z-50">
      <ul className="flex justify-center w-full text-1xl font-medium text-white ">
        {['Home', 'Projects', 'About', 'Github', 'Contact'].map((item, idx) => (
          <li key={idx} className="flex-1 text-center">
            <a
              href={`#${item}`}
              className={`block w-full py-3 border-b-2 border-b-transparent hover:border-b-[var(--tint)] transition-all duration-500`}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
