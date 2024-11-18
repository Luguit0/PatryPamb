// project="Landing Page Patricia Pambianchi" file="src/components/LocationSection.tsx" type="react"
import React from 'react';
import { MapPin } from 'lucide-react';

const LocationSection = () => {
  return (
    <div id="ubicacion" className="bg-gradient-to-r from-pink-100 to-pink-200 py-12">
      <div className="container mx-auto text-center px-4">
        <h3 className="text-3xl font-bold text-pink-800 mb-6">Ven a Conocernos</h3>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <MapPin className="w-12 h-12 text-pink-600 mb-4 md:mb-0 md:mr-4" />
          <div>
            <p className="text-xl text-pink-600 mb-2 leading-relaxed">Visita nuestra tienda en:</p>
            <p className="text-lg text-pink-700 mb-4 leading-relaxed">Blvd. Buenos Aires 1326, Luis Guillon, Argentina</p>
          </div>
        </div>
        <div className="mt-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0168878893792!2d-58.449406772429874!3d-34.81046845408861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd3c4900210c1:0xf037878b9ab12832!2sBlvd.+Buenos+Aires+1326,+Luis+Guillon,+Argentina!5e0!3m2!1sen!2sar!4v1653!5m2!1sen!2sar"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default LocationSection;