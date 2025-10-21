'use client'
import { useEffect, useRef, useState } from "react";

export const Historia = () => {
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
      id="historia"
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-b from-background via-desert-dark to-background py-24 px-4"
    >
      <div className="container mx-auto max-w-5xl">
        <div className={`text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <h2 className="mb-4 font-serif text-5xl font-bold tracking-wider text-desert-gold  md:text-6xl lg:text-7xl">
            El Espíritu del Desierto
          </h2>
          <div className="mx-auto mt-6 h-1 w-24 bg-gradient-to-r from-transparent via-desert-gold to-transparent" />
        </div>

        <div className={`mt-16 grid gap-12 md:grid-cols-2 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <div className="space-y-6">
            <p className="font-sans text-lg leading-relaxed text-muted-foreground md:text-xl">
              En las vastas planicies del desierto de Coahuila, donde el sol abrasa la tierra 
              y las sombras cuentan historias ancestrales, nace <span className="font-semibold text-desert-gold">Desierto Calavera</span>.
            </p>
            <p className="font-sans text-lg leading-relaxed text-muted-foreground md:text-xl">
              Nuestras bebidas artesanales son el resultado de una tradición que se remonta a siglos, 
              cuando los habitantes del desierto descubrieron en las plantas del árido territorio un regalo 
              de la tierra.
            </p>
          </div>

          <div className="space-y-6">
            <p className="font-sans text-lg leading-relaxed text-muted-foreground md:text-xl">
              Cada botella captura la esencia del desierto: tierra, sol, misterio y el espíritu 
              indomable de quienes habitan estas tierras. La calavera que nos representa no es 
              solo un símbolo, es el guardián de nuestra herencia.
            </p>
            <p className="font-sans text-lg leading-relaxed text-muted-foreground md:text-xl">
              Destilado con métodos ancestrales y perfeccionado con pasión artesanal, 
              <span className="font-semibold text-desert-gold"> Desierto Calavera</span> es más 
              que una bebida: es una experiencia mística.
            </p>
          </div>
        </div>

        <div className={`mt-20 text-center transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <blockquote className="font-serif text-2xl italic text-desert-sand md:text-3xl">
            "Del polvo del desierto, un espíritu renace"
          </blockquote>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 h-32 w-32 rounded-full bg-desert-gold/5 blur-3xl" />
      <div className="absolute bottom-1/4 right-10 h-40 w-40 rounded-full bg-desert-sand/5 blur-3xl" />
    </section>
  );
};
