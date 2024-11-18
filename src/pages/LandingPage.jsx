// project="Landing Page Patricia Pambianchi" file="src/pages/LandingPage.tsx" type="react"
import React from 'react';
import { ShoppingBag, Coffee, PenTool } from 'lucide-react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductSection from '../components/ProductSection';
import LocationSection from '../components/LocationSection';
import WhatsAppButton from '../components/WhatsAppButton';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-pink-50 text-pink-900">
      <Navbar />
      <Hero />
      <ProductSection
        id="jeans"
        title="Colección de Jeans"
        icon={<ShoppingBag className="w-12 h-12 text-pink-600" />}
        images={[
          "https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
          "https://acdn.mitiendanube.com/stores/001/661/615/products/56218a23-e188-42d2-ad78-865e6bb2ed2e-b48b15b46322cf073d17178144351310-640-0.jpg",
          "https://http2.mlstatic.com/D_NQ_NP_808614-MLA72302021438_102023-O.webp",
        ]}
        description="Descubre nuestra cómoda y elegante colección de jeans, perfecta para cualquier ocasión."
      />
      <ProductSection
        id="mate"
        title="Selección de Mate"
        icon={<Coffee className="w-12 h-12 text-pink-600" />}
        images={[
          "https://pinturaseterna.com.ar/blanco/wp-content/uploads/2022/04/mates-vidriera-00.jpg",
          "https://noticiasdelmate.com/wp-content/uploads/2022/03/mate_pampa_chico-.jpg",
          "https://d22fxaf9t8d39k.cloudfront.net/fcceaea1c4502ce1b44cf1fb9108d7de4988698fab7792b3b440e5c79575d497130080.jpg",
        ]}
        description="Explora nuestra amplia gama de opciones de mate tradicionales y modernas para tu disfrute."
      />
      <ProductSection
        id="equipos"
        title="Equipos de Mate"
        icon={<PenTool className="w-12 h-12 text-pink-600" />}
        images={[
          "https://estiloaustral.com/wp-content/uploads/2023/03/MATERA001-CANASTA-TERMERA-ENTRERRIANA-CUERO1.png",
          "https://stanley1913store.com/cdn/shop/files/Vitrina_Mas_elegidos_Mobile.png?v=1681852143&width=2400",
          "https://bunny-cdn.ventasxmayor.com/6060d74cd1d2d2d24cd1d2d2d26363/public/56550082086923161/1690307276951-6490.jpg"
        ]}
        description="Encuentra los accesorios y equipos de mate perfectos para mejorar tu experiencia con el mate."
      />
      <LocationSection />
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default LandingPage;


