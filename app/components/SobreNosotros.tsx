'use client'
import bebidasImg from "@/assets/bebidas.jpg";
import cocteleriaImg from "@/assets/cocteleria.jpg";
import viboraImg from "@/assets/vibora.jpg";
import loreImg from "@/assets/lore.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Image from "next/image";

const SobreNosotros = () => {
  const communityImages = [
    "/comunidad.png",
    "/comunidad5.png",
    "/comunidad2.png",
    "/comunidad4.png",
    "/comunidad3.png",
    "/comunidad6.png",
   
  ];

  return (
    <main className="min-h-screen bg-background">

      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-desert-gold">
              Sobre Nosotros
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Calabera es más que una marca,contiene tradición de generaciones y celebra la cultura mexicana
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-20 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="bg-card p-8 rounded-lg border border-border">
              <h2 className="text-3xl font-bold mb-4 text-primary">Nuestra Misión</h2>
              <p className="text-muted-foreground leading-relaxed">
                Preservar y compartir la auténtica tradición artesanal, 
                llevando a cada copa la esencia de México y el trabajo de nuestros maestros sotoleros. 
                Nos comprometemos a mantener los más altos estándares de calidad mientras 
                honramos las técnicas ancestrales de producción.
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border">
              <h2 className="text-3xl font-bold mb-4 text-primary">Nuestra Visión</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ser reconocidos como la marca que mejor representa la autenticidad 
                y calidad del espíritu mexicano a nivel nacional e internacional. Aspiramos a 
                crear una comunidad global que aprecien y valoren 
                la riqueza de nuestra cultura.
              </p>
            </div>
          </div>

        
          {/* Community Carousel */}
          <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <h2 className="text-4xl font-bold mb-10 text-center text-desert-gold">
              Nuestra Comunidad
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {communityImages.map((image, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                      <div className="p-2">
                        <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border">
                          <Image
                            src={image}
                            alt={image}
                            width={1000}
                            height={1000}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-0 md:-left-12" />
                <CarouselNext className="right-0 md:-right-12" />
              </Carousel>
            </div>
          </div>
        </div>
      </section>

    
    </main>
  );
};

export default SobreNosotros;
