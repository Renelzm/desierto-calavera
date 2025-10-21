import { Cocteleria } from "./components/Cocteleria";
import { Galeria } from "./components/Galeria";
import { Hero } from "./components/Hero";
import { Historia } from "./components/Historia";
import { ProductShowcase } from "./components/ProductShowcase";

export default function Home() {
  return (
   <div>
      <Hero />
      <Historia />
      <ProductShowcase />
      <Cocteleria />
      <Galeria />
   </div>
      

    
  );
}
