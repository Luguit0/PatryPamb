// project="Landing Page Patricia Pambianchi" file="src/components/Navbar.tsx" type="react"
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-pink-100 to-pink-200 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 
          className="text-2xl font-bold text-pink-800 cursor-pointer" 
          onClick={() => scrollToSection('hero')}
        >
          Patry Pambianchi
        </h1>
        <div className="hidden md:flex space-x-4">
          <a onClick={() => scrollToSection('jeans')} className="hover:text-pink-600 cursor-pointer transition-colors duration-300">Jeans</a>
          <a onClick={() => scrollToSection('mate')} className="hover:text-pink-600 cursor-pointer transition-colors duration-300">Mate</a>
          <a onClick={() => scrollToSection('equipos')} className="hover:text-pink-600 cursor-pointer transition-colors duration-300">Equipos</a>
          <a onClick={() => scrollToSection('ubicacion')} className="hover:text-pink-600 cursor-pointer transition-colors duration-300">Local</a>
        </div>
        <button className="md:hidden" onClick={toggleMenu} aria-label="Alternar menú">
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-pink-100 p-4">
          <a onClick={() => scrollToSection('jeans')} className="block py-2 hover:text-pink-600 cursor-pointer">Jeans</a>
          <a onClick={() => scrollToSection('mate')} className="block py-2 hover:text-pink-600 cursor-pointer">Mate</a>
          <a onClick={() => scrollToSection('equipos')} className="block py-2 hover:text-pink-600 cursor-pointer">Equipos</a>
          <a onClick={() => scrollToSection('ubicacion')} className="block py-2 hover:text-pink-600 cursor-pointer">Local</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;