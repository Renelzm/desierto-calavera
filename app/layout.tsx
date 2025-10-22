import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // 👇 AÑADE ESTA LÍNEA
  metadataBase: new URL("https://desierto-calavera.vercel.app"), 

  title: "Desierto Calavera",
  description: "Pagina de cocteleria y licores artesanales",
  openGraph: { 
    // Ahora Next.js convertirá esto en:
    // "https://tu-dominio.com/logo-transparente-blanco.png"
    images: "/logo-blanco.png",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es"
    >
      <head>  
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`min-h-screen bg-background`}
      >
        <Navbar />
     
            {children}
    
         <Footer />
       
      </body>
     
    </html>
  );
}
