// project="Landing Page Patricia Pambianchi" file="src/components/ProductSection.tsx" type="react"
import React from 'react';
import ImageGallery from './ImageGallery';

const ProductSection = ({ id, title, icon, images, description }) => {
  return (
    <div id={id} className="bg-gradient-to-r from-pink-50 to-pink-100 py-12 relative">
      <div className="hidden md:block absolute left-0 top-0 h-full w-[200px] bg-pink-50">
        {/* Left Space */}
      </div>
      <div className="hidden md:block absolute right-0 top-0 h-full w-[200px] bg-pink-100">
        {/* Right Space */}
      </div>
      <div className="container mx-auto px-4 md:pl-[220px] md:pr-[220px]">
        <div className="flex items-center justify-center mb-6">
          {icon}
          <h3 className="text-3xl font-bold text-pink-800 ml-4">{title}</h3>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <ImageGallery images={images} />
          <p className="text-lg text-pink-600 md:w-1/2 mt-6 md:mt-0 md:ml-6 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;