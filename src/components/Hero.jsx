// project="Landing Page Patricia Pambianchi" file="src/components/Hero.tsx" type="react"
import React from 'react';

const Hero = () => {
  return (
    <div id="hero" className="bg-gradient-to-r from-pink-100 to-pink-200 py-20">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-pink-800 mb-4">Explora la Elegancia de mis productos</h2>
        <p className="text-xl md:text-2xl text-pink-600">Sumérgete en nuestra exclusiva colección de jeans y accesorios de mate</p>
        <a 
          onClick={() => window.open('https://wa.me/5491121820677', '_blank')}
          className="mt-6 inline-block bg-pink-600 text-white text-lg font-semibold py-2 px-4 rounded-full hover:bg-pink-700 transition duration-300"
        >
          ¡Hablemos por WhatsApp!
        </a>
      </div>
    </div>
  );
};

export default Hero;