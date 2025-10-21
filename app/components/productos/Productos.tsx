'use client'
import viboraImg from "@/assets/vivora-1.png";
import bebidasImg from "@/assets/bebidas.jpg";
import cocteleriaImg from "@/assets/cocteleria.jpg";
import { Producto } from "./Producto";
// Importa ProductoItem aquí si lo pusiste en otro archivo
// import { ProductoItem } from './ProductoItem'; 

// Ya no necesitas 'useState' en este componente
// import { useState } from "react"; 

export const Productos = () => {
    // REMOVIDO: El estado `selectedImage` se movió al `ProductoItem`

    const productos = [
        {
            id: 1,
            nombre: "Víbora que Vuela (Premiado)",
            descripcion: "Nuestra bebida insignia, destilada con métodos ancestrales del desierto de Coahuila.",
            precio: "$1,200 MXN",
            ml: "750ml",
            alcohol: "45% Alc. Vol.",
            imagenes: ["/vivora-1.png", "/vivora-sirviendo.png", "/compas-vivora.png"], // Usé las importaciones aquí
        },
        {
            id: 2,
            nombre: "sotol brujo",
            descripcion: "Una versión .....",
            precio: "$700 MXN",
            ml: "750ml",
            alcohol: "42% Alc. Vol.",
            imagenes: ['/galeria.png','/sotol-brujo.png', '/sotol-brujo2.png'], // Orden de imágenes diferente para probar
        },
            {
            id: 3,
            nombre: "sotol artesanal",
            descripcion: "Una versión .....",
            precio: "$700 MXN",
            ml: "750ml",
            alcohol: "42% Alc. Vol.",
            imagenes: ['/sotol-artesanal.png','/sotol-calavera.png',  '/sotol-artesanal3.png'], // Orden de imágenes diferente para probar
        },
    ];

    return (
        <section id="productos" className="relative min-h-screen bg-background py-24 px-4 text-center mt-20">
            <div className="container mx-auto max-w-7xl">
                {/* Header */}
                <div className="text-center mb-24 animate-fade-in">
                    <h2 className="font-serif text-5xl font-bold tracking-wider text-bone-white md:text-6xl lg:text-7xl">
                        Nuestros Productos
                    </h2>
                    <div className="mx-auto mt-6 h-1 w-24 bg-gradient-to-r from-transparent via-desert-gold to-transparent " />
                </div>

                {/* Mapeo del nuevo componente individual */}
                {productos.map((producto) => (
                    
                    <Producto key={producto.id} producto={producto} />
                    
                
                ))}

            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/3 right-10 h-40 w-40 rounded-full bg-desert-gold/5 blur-3xl" />
            <div className="absolute bottom-1/3 left-10 h-32 w-32 rounded-full bg-desert-sand/5 blur-3xl" />
        </section>
    );
};