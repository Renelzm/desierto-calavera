import { useEffect, useRef, useState } from "react";

export const VideoSection = () => {
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
      className="relative min-h-screen bg-gradient-to-b from-desert-dark to-background py-24 px-4"
    >
      <div className="container mx-auto max-w-6xl">
        <div className={`mb-16 text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <h2 className="mb-4 font-serif text-5xl font-bold tracking-wider text-gradient-gold md:text-6xl">
            Nuestra Historia en Video
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-sans text-lg text-muted-foreground md:text-xl">
            Descubre el proceso artesanal detrás de cada botella
          </p>
          <div className="mx-auto mt-6 h-1 w-24 bg-gradient-to-r from-transparent via-desert-gold to-transparent" />
        </div>

        <div className={`relative overflow-hidden rounded-2xl border border-desert-stone transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
          <div className="relative aspect-video w-full">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/sGjNMIv3P7E"
              title="Desierto Calavera - Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 h-32 w-32 rounded-full bg-desert-gold/5 blur-3xl" />
      <div className="absolute bottom-1/4 left-10 h-40 w-40 rounded-full bg-desert-sand/5 blur-3xl" />
    </section>
  );
};