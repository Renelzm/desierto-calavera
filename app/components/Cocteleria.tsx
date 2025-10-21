'use client'
import { useEffect, useRef, useState } from "react";
import cocteleriaImg from "@/assets/cocteleria.jpg";
import Image from "next/image";

export const Cocteleria = () => {
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

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-b from-background to-desert-dark py-24 px-4"
    >
      <div className="container mx-auto max-w-6xl">
        <div className={`mb-16 text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <h2 className="mb-4 font-serif text-5xl font-bold tracking-wider text-desert-gold md:text-6xl">
            Arte en Coctelería
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-sans text-lg text-muted-foreground md:text-xl">
            Nuestro sotol es la base perfecta para creaciones artesanales que despiertan los sentidos
          </p>
        </div>

        <div className={`relative overflow-hidden rounded-2xl transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
          
          <Image
            src={cocteleriaImg}
            alt="Arte en Coctelería - Desierto Calavera"
            className="w-full h-auto"
          />

          <div className="absolute bottom-0 left-0 right-0 z-20 p-8 md:p-12">
            <h3 className="mb-4 font-serif text-3xl font-bold text-bone-white md:text-4xl">
              Mixología del Desierto
            </h3>
            <p className="max-w-2xl font-sans text-lg text-bone-white/90 md:text-xl">
              Cada coctel es una ceremonia, cada trago una historia. Nuestros bartenders artesanales 
              honran la tradición mientras crean experiencias únicas e inolvidables.
            </p>
          </div>
        </div>

        <div className={`mt-16 grid gap-8 md:grid-cols-3 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <div className="rounded-lg border border-desert-stone bg-card p-6">
            <div className="mb-4 inline-block rounded-full bg-desert-gold/10 p-3">
              <svg className="h-6 w-6 text-desert-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h4 className="mb-3 font-serif text-xl font-semibold text-bone-white">Artesanal</h4>
            <p className="font-sans text-muted-foreground">
              Cada coctel preparado con técnicas tradicionales y un toque contemporáneo
            </p>
          </div>

          <div className="rounded-lg border border-desert-stone bg-card p-6">
            <div className="mb-4 inline-block rounded-full bg-desert-gold/10 p-3">
              <svg className="h-6 w-6 text-desert-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h4 className="mb-3 font-serif text-xl font-semibold text-bone-white">Creativo</h4>
            <p className="font-sans text-muted-foreground">
              Innovación constante para sorprender tu paladar con nuevas experiencias
            </p>
          </div>

          <div className="rounded-lg border border-desert-stone bg-card p-6">
            <div className="mb-4 inline-block rounded-full bg-desert-gold/10 p-3">
              <svg className="h-6 w-6 text-desert-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h4 className="mb-3 font-serif text-xl font-semibold text-bone-white">Memorable</h4>
            <p className="font-sans text-muted-foreground">
              Momentos únicos que quedan grabados en la memoria de quien los prueba
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
