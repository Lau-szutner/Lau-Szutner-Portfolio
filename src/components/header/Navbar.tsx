'use client';
import { useState } from 'react';
import { navBarLinks } from '../data/data';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 bg-[#171717] z-50 border-b border-neutral-800">
      <div className="flex flex-end justify-end md:justify-between items-center px-5  md:px-10">
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>

        <ul className="hidden md:flex justify-center w-full text-1xl font-medium text-white">
          {navBarLinks.map((link) => (
            <li key={link.id} className="flex-1 text-center">
              <a
                href={`#${link.id}`}
                className="block w-full py-3 border-b-2 border-b-transparent hover:border-b-[var(--tint)] transition-all duration-500"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div
        className={`md:hidden bg-[#171717] text-white text-center font-medium overflow-hidden transition-all duration-500 ${
          isOpen ? 'max-h-96 border-t border-neutral-800' : 'max-h-0'
        }`}
      >
        {navBarLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className="block py-3 border-b border-neutral-800 hover:text-[var(--tint)] transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
