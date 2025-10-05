import { navBarLinks } from "../data/data";

const Navbar = () => {
      
  return (
    <nav className="w-full flex justify-center fixed top-0 bg-[#171717] z-50">
      <ul className="flex justify-center w-full text-1xl font-medium text-white ">
        {navBarLinks.map((link) => (
          <li key={link.id} className="flex-1 text-center">
            <a
              href={`#${link.id}`}
              className={`block w-full py-3 border-b-2 border-b-transparent hover:border-b-[var(--tint)] transition-all duration-500`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
