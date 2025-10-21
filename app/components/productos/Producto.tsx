'use client'
import { useState } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image"; // Importa StaticImageData para las imágenes importadas

// Definición de la interfaz para el producto (mejor tipado)
interface IProducto {
    id: number;
    nombre: string;
    descripcion: string;
    precio: string;
    ml: string;
    alcohol: string;
    // Las imágenes pueden ser string (rutas) o StaticImageData (importaciones)
    imagenes: (string | StaticImageData)[]; 
}

// Nuevo componente para manejar la lógica de un solo producto
export const Producto = ({ producto }: { producto: IProducto }) => {
    // ESTADO LOCAL: Ahora cada producto tiene su propio estado
    const [selectedImage, setSelectedImage] = useState(0); 

    return (
        <>
        
            <div className="grid md:grid-cols-2 gap-12 items-center w-4/5 mx-auto">
     
            {/* Imagen */}
            <div className="animate-fade-up">
          
                <div className="relative aspect-[4/4] overflow-hidden rounded-lg">
                    <Image
                        // Usa la imagen seleccionada por el estado local de este componente
                        src={producto.imagenes[selectedImage]} 
                        width={1000} // Ajusta un tamaño más razonable para la imagen principal
                        height={1000} // Ajusta un tamaño más razonable para la imagen principal
                        alt={producto.nombre}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                </div>
                {/* Thumbnails */}
                <div className="flex gap-4 mt-4 justify-center">
                    {producto.imagenes.map((img, idx) => (
                        <button
                            key={idx}
                            // El onClick ahora solo afecta al estado local de este producto
                            onClick={() => setSelectedImage(idx)} 
                            className={`w-20 h-20 rounded-md overflow-hidden border-2 transition-all ${
                                selectedImage === idx ? "border-desert-gold scale-110" : "border-transparent opacity-60 hover:opacity-100"
                            }`}
                        >
                            <Image 
                                src={img} 
                                width={1000} 
                                height={1000} 
                                alt={`Vista ${idx + 1}`} 
                                className="w-full h-full object-cover" 
                            />
                        </button>
                    ))}
                </div>
            </div>

            {/* Información */}
            <div className="space-y-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
                <h3 className="font-serif text-4xl font-bold text-desert-gold md:text-5xl">
                    {producto.nombre}
                </h3>
                
                <p className="font-sans text-lg leading-relaxed text-muted-foreground">
                    {producto.descripcion}
                </p>
                   {/* TIPO */}
                <div className="flex flex-p gap-10 text-center items-center justify-center mt-6">
                <div className="rounded-lg border border-desert-stone bg-desert-dark/50 px-6 py-4 ">
                  <div className="font-sans text-sm text-muted-foreground">Origen</div>
                  <div className="font-serif text-lg font-semibold text-desert-gold">Coahuila</div>
                </div>
                <div className="rounded-lg border border-desert-stone bg-desert-dark/50 px-6 py-4">
                  <div className="font-sans text-sm text-muted-foreground">Tipo</div>
                  <div className="font-serif text-lg font-semibold text-desert-gold">Sotol Artesanal</div>
                </div>
              </div>
                 {/* TIPO FIN */}
                <div className="space-y-3 pt-4 ">
                    <div className="flex items-center gap-4 text-bone-white">
                        <span className="font-sans text-sm tracking-wider text-desert-sand">Contenido:</span>
                        <span className="font-serif text-xl">{producto.ml}</span>
                    </div>
                    <div className="flex items-center gap-4 text-bone-white">
                        <span className="font-sans text-sm tracking-wider text-desert-sand">Alcohol:</span>
                        <span className="font-serif text-xl">{producto.alcohol}</span>
                    </div>
                    <div className="flex items-center gap-4 text-bone-white">
                        <span className="font-sans text-sm tracking-wider text-desert-sand">Precio:</span>
                        <span className="font-serif text-3xl text-desert-gold">{producto.precio}</span>
                    </div>
                    
   
                </div>
                              

           


            </div>
        </div>
        <div className="mx-auto mt-6 h-1 w-80 bg-gradient-to-r from-transparent via-desert-gold to-transparent mb-24" ></div> 
        </>
    
    );
};