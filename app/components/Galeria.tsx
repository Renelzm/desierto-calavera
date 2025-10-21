'use client'
import { useState } from "react";
import viboraImg from "@/assets/vibora.jpg";
import bebidasImg from "@/assets/bebidas.jpg";
import cocteleriaImg from "@/assets/cocteleria.jpg";
import loreImg from "@/assets/lore.png";
import Image from "next/image";

export const Galeria = () => {
  const [selectedImage, setSelectedImage] = useState(0);

 
  const galleryImages = [
    '/galeria.png',
    '/galeria2.png',
    '/galeria3.png',
    '/galeria4.png',
    '/galeria5.png',
    '/galeria6.png',
    '/galeria7.png',
    '/galeria8.png',
    '/galeria9.png',
    '/galeria10.png',
    '/galeria11.png',
    '/galeria12.png',
  ];

  return (
    <section id="productos" className="relative bg-background py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
     
        {/* Galería de Imágenes */}
        <div className="">
          <h3 className="text-center font-serif text-3xl font-bold text-bone-white mb-12 md:text-4xl">
            Galería
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, idx) => (
              <div
                key={idx}
                className="aspect-square overflow-hidden rounded-lg group cursor-pointer"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <Image
                  src={image}
                  alt={image}
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/3 right-10 h-40 w-40 rounded-full bg-desert-gold/5 blur-3xl" />
      <div className="absolute bottom-1/3 left-10 h-32 w-32 rounded-full bg-desert-sand/5 blur-3xl" />
    </section>
  );
};
