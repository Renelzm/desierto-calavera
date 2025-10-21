"use client";
import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import logoBlanco from "@/assets/logo-transparente-blanco.png";
import Image from "next/image";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Inicio", href: "/" },
    { name: "Productos", href: "/productos" },
    { name: "Sobre Nosotros", href: "/nosotros" },
    { name: "Contacto", href: "/contacto" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-desert-gold">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center hidden md:flex">
            <Image 
              src={logoBlanco} 
              alt="Desierto Calavera" 
              className=" h-12 w-auto object-contain hover:scale-150 transition-transform "
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-20 ">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-desert-gold  duration-300 font-sans text-base tracking-wide
                hover:animate-pulse hover:scale-125 transition-transform
                "
              >
                {item.name}
              </a>
            ))}
            {/* <a
              href="#compras"
              className="flex items-center gap-2 text-bone hover:text-desert transition-all duration-300 group"
              aria-label="Carrito de compras"
            >
              <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gold hover:text-desert transition-color color-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6 text-white" /> : 
            // <Menu className="w-6 h-6 text-white" />
           <span>
             <p className="text-desert-gold">MENU</p>
             <Image 
              src={logoBlanco} 
              alt="Desierto Calavera" 
              className="h-12 w-auto object-contain hover:scale-150 transition-transform "
            />

           </span>
            
            }
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-6 animate-fade-in border-t border-bone/10">
            <div className="flex flex-col items-center space-y-6">
              {/* Logo en menu móvil */}
              <Image 
                src={logoBlanco} 
                alt="Desierto Calavera" 
                className="h-20 w-auto object-contain mb-2"
              />
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-desert transition-colors duration-300 font-sans text-base tracking-wide py-2"
                >
                  {item.name}
                </a>
              ))}
              {/* <a
                href="#compras"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 text-bone hover:text-desert transition-all duration-300 pt-2"
                aria-label="Carrito de compras"
              >
                <ShoppingCart className="w-5 h-5" />
                <span className="font-sans text-base tracking-wide">Compras</span>
              </a> */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
