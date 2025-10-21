'use client'

import { useEffect, useState } from "react";
import logoBlanco from "@/assets/logo-transparente-blanco.png";
import loreBg from "@/assets/lore.png";
import Image from 'next/image'


export const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden mt-10">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 bg-cover bg-center parallax"
      
      style={{ backgroundImage: `url(${loreBg.src})`, transform: `translateY(${scrollY * .5}px)`,
}} >

  
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
        <div className="animate-fade-in">
          <Image
            src={logoBlanco}
            alt="Desierto Calavera Logo"
            className="mx-auto h-48 w-48 object-contain drop-shadow-2xl md:h-64 md:w-64 hover:scale-125 transition-transform duration-500"
          />
        </div>
        
        <h1 className="mt-8 animate-fade-up font-serif text-4xl text-center font-bold tracking-wider text-bone-white glow-gold md:text-6xl lg:text-7xl">
          BEBIDAS ESPIRITUOSAS
        </h1>
        
        <p className="mt-4 animate-fade-up font-sans text-lg tracking-widest text-desert-gold md:text-xl" style={{ animationDelay: "0.2s" }}>
          Coahuila, México
        </p>

        <div className="mt-12 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <a href="/productos">
               <button 
            className="group relative overflow-hidden border-2 border-desert-gold px-8 py-3 font-sans text-lg font-bold tracking-widest text-desert-gold transition-all duration-300 hover:text-background"
          >
            <span className="relative z-10">Productos</span>
            <div className="absolute inset-0 bg-desert-gold transition-transform duration-300 translate-y-full group-hover:translate-y-0" />
          </button>
          </a>
     
        </div>
      </div>

    </section>
  );
};
