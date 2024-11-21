import Hero from "@/components/HERO/Hero";
import About from "@/components/About/About";
import Focus from "@/components/Focus/Focus";
import Proj from "@/components/Project/Proj";
import Ph from "./phone/page";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Focus />
      <Proj />
      <Ph />
    </div>
  );
}
