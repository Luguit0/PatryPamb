// project="Landing Page Patricia Pambianchi" file="src/components/WhatsAppButton.tsx" type="react"
import React from 'react';

const WhatsAppButton = () => {
  return (
    <button
      onClick={() => window.open('https://wa.me/5491121820677', '_blank')}
      className="fixed bottom-4 right-4 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-300"
      aria-label="Chatear por WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path d="M16.57 14.09c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.46-.16 0-.34-.02-.52-.02-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27 0 1.34.98 2.63 1.12 2.81.14.18 1.93 2.95 4.68 4.14.65.28 1.16.45 1.56.57.65.21 1.24.18 1.7.11.52-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32zM12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.08L2 22l4.92-1.29C8.42 21.5 10.16 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
      </svg>
    </button>
  );
};

export default WhatsAppButton;

