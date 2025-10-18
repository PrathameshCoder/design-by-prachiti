import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Hero from "./components/Hero";
import HeroBackground from "./components/HeroBackground";

export default function Home() {
  return (
<>
      {/* Background image & overlay visible on HOME only */}
      <HeroBackground />

      <main>
        <Hero />
        <About />
      </main>
    </>


  );

}
