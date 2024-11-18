// project="Landing Page Patricia Pambianchi" file="src/components/ImageGallery.tsx" type="react"
import React, { useState } from 'react';

const ImageGallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full md:w-1/2">
      <img
        src={images[currentIndex]}
        alt={`Producto ${currentIndex + 1}`}
        className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
      />
      <button
        onClick={prevImage}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-white to-gray-200 bg-opacity-50 rounded-full p-2 shadow-md"
        aria-label="Imagen anterior"
      >
        &#10094;
      </button>
      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-white to-gray-200 bg-opacity-50 rounded-full p-2 shadow-md"
        aria-label="Siguiente imagen"
      >
        &#10095;
      </button>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full ${index === currentIndex ? 'bg-white shadow-md' : 'bg-gray-300'}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;