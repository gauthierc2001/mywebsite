import { Experience } from "@/components/Experience";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <Hero />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
}
