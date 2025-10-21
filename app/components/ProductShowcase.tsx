'use client'
import { useEffect, useRef, useState } from "react";
import viboraImg from "@/assets/vibora.jpg";
import bebidasImg from "@/assets/bebidas.jpg";
import Image from "next/image";

export const ProductShowcase = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-background py-24 px-4"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Main Product - Víbora que Vuela */}
        <div className={`mb-32 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <div className="inline-block rounded-full bg-desert-gold/10 px-4 py-2 mb-6">
                <span className="font-sans text-sm tracking-widest text-desert-gold">EDICIÓN PREMIADA</span>
              </div>
              
              <h2 className="mb-6 font-serif text-5xl font-bold leading-tight text-bone-white md:text-6xl lg:text-7xl">
                Víbora que Vuela
              </h2>
              
              <div className="mb-8 h-1 w-20 bg-desert-gold" />
              
              <p className="mb-6 font-sans text-lg leading-relaxed text-muted-foreground md:text-xl">
                Nuestro sotol insignia, galardonado con la medalla <span className="font-semibold text-desert-gold">Grand Gold Medal</span> en 
                el prestigioso concurso Spirits Selection 2025.
              </p>
              
              <p className="mb-8 font-sans text-lg leading-relaxed text-muted-foreground md:text-xl">
                Destilado artesanalmente en Coahuila, México, con sotol silvestre de las montañas del desierto. 
                Notas terrosas, ahumadas y un final suave que evoca la brisa del atardecer desértico.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="rounded-lg border border-desert-stone bg-desert-dark/50 px-6 py-4">
                  <div className="font-sans text-sm text-muted-foreground">Origen</div>
                  <div className="font-serif text-lg font-semibold text-desert-gold">Coahuila</div>
                </div>
                <div className="rounded-lg border border-desert-stone bg-desert-dark/50 px-6 py-4">
                  <div className="font-sans text-sm text-muted-foreground">Tipo</div>
                  <div className="font-serif text-lg font-semibold text-desert-gold">Sotol Artesanal</div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-4 rounded-lg bg-gradient-to-r from-desert-gold/20 to-desert-sand/20 blur-2xl" />
                <Image
                  src={viboraImg}
                  alt="Víbora que Vuela - Sotol Artesanal"
                  className="relative z-10 w-full rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Section - Experience */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="relative">
                <div className="absolute -inset-4 rounded-lg bg-gradient-to-l from-desert-gold/20 to-desert-sand/20 blur-2xl" />
                <Image
                  src={bebidasImg}
                  alt="Desierto Calavera Experience"
                  className="relative z-10 w-full rounded-lg shadow-2xl"
                />
              </div>
            </div>

            <div>
              <h3 className="mb-6 font-serif text-4xl font-bold leading-tight text-bone-white md:text-5xl">
                La Experiencia del Desierto
              </h3>
              
              <div className="mb-8 h-1 w-20 bg-desert-gold" />
              
              <p className="mb-6 font-sans text-lg leading-relaxed text-muted-foreground md:text-xl">
                Cada sorbo de Desierto Calavera te transporta a los vastos horizontes del desierto mexicano. 
                Perfecto para disfrutar solo, en las rocas, o como base para cocteles artesanales.
              </p>
              
              <p className="font-sans text-lg leading-relaxed text-muted-foreground md:text-xl">
                Descubre sabores que solo la tierra árida puede ofrecer: agave silvestre, madera ahumada, 
                y el toque mineral característico del sotol de altura.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
