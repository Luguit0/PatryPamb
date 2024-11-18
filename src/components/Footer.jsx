// project="Landing Page Patricia Pambianchi" file="src/components/Footer.tsx" type="react"
import React from 'react';
import { MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-800 to-pink-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-xl font-bold mb-4">Patricia Pambianchi</h4>
            <p>Tu tienda única para jeans, mate y equipos de mate</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-xl font-bold mb-4">Enlaces Rápidos</h4>
            <ul>
              <li><a href="#jeans" className="hover:text-pink-300 transition-colors duration-300">Jeans</a></li>
              <li><a href="#mate" className="hover:text-pink-300 transition-colors duration-300">Mate</a></li>
              <li><a href="#equipos" className="hover:text-pink-300 transition-colors duration-300">Equipos de Mate</a></li>
              <li><a href="#ubicacion" className="hover:text-pink-300 transition-colors duration-300">Ubicación</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-xl font-bold mb-4">Contáctanos</h4>
            <p className="flex items-center"><MapPin className="w-4 h-4 mr-2" /> Calle de la Moda 123, Ciudad Estilosa, Argentina</p>
            <p className="flex items-center"><Phone className="w-4 h-4 mr-2" /> +54 123 456 7890</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;