'use client';

import { useEffect, useRef, useState } from "react";
import { User } from "lucide-react";

export const Asociados = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const asociados = [
    {
      nombre: "Julio ...",
      cargo: "Maestro Destilador",
      descripcion: "20 años de experiencia en destilación artesanal",
    },
    {
      nombre: "Sandra Q",
      cargo: "Experta en Mixología",
      descripcion: "Creadora de cocteles innovadores con tradición",
    },
    {
      nombre: "German Q..",
      cargo: "Productor Artesanal",
      descripcion: "Guardián de técnicas ancestrales del desierto",
    },
    {
      nombre: "Ana.....",
      cargo: "Sommelier",
      descripcion: "Especialista en maridajes y catas exclusivas",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative  bg-gradient-to-b from-background to-desert-dark py-24 px-4"
    >
      <div className="container mx-auto max-w-6xl">
        <div className={`mb-16 text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <h2 className="mb-4 font-serif text-5xl font-bold tracking-wider text-desert-gold md:text-6xl">
            Nuestros Asociados
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-sans text-lg text-muted-foreground md:text-xl">
            Maestros del gremio que hacen posible cada creación artesanal
          </p>
          <div className="mx-auto mt-6 h-1 w-24 bg-gradient-to-r from-transparent via-desert-gold to-transparent" />
        </div>

        <div className={`grid gap-8 md:grid-cols-2 lg:grid-cols-4 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          {asociados.map((asociado, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg border border-desert-stone bg-card p-6 transition-all duration-300 hover:border-desert-gold hover:shadow-[0_0_30px_rgba(218,165,32,0.2)]"
            >
              <div className="mb-6 flex justify-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-desert-gold/10 transition-all duration-300 group-hover:bg-desert-gold/20">
                  <User className="h-12 w-12 text-desert-gold" />
                </div>
              </div>

              <div className="text-center">
                <h3 className="mb-2 font-serif text-xl font-semibold text-bone-white">
                  {asociado.nombre}
                </h3>
                <p className="mb-3 font-sans text-sm font-medium text-desert-gold">
                  {asociado.cargo}
                </p>
                <p className="font-sans text-sm text-muted-foreground">
                  {asociado.descripcion}
                </p>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 h-20 w-20 -translate-y-10 translate-x-10 rounded-full bg-desert-gold/5 blur-2xl transition-all duration-300 group-hover:bg-desert-gold/10" />
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/3 left-10 h-40 w-40 rounded-full bg-desert-sand/5 blur-3xl" />
      <div className="absolute bottom-1/3 right-10 h-32 w-32 rounded-full bg-desert-gold/5 blur-3xl" />
    </section>
  );
};