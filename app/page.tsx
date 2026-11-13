import { portfolio } from "@/data/portfolio";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-on-background selection:bg-primary/30">
      <Navbar />
      <Hero />
      <About />
      {portfolio.projects.length > 0 && <SelectedWork />}
      {portfolio.experience.length > 0 && <Experience />}
      {(portfolio.skills.android.length > 0 || portfolio.skills.backend.length > 0) && <Skills />}
      {((portfolio.achievements?.length || 0) > 0 || (portfolio.certifications?.length || 0) > 0 || (portfolio.activities?.length || 0) > 0) && <Achievements />}
      <Contact />
      <Footer />
    </main>
  );
}
