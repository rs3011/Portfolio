import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Portfolio() {
  useEffect(() => {
    // Force dark mode for cyberpunk aesthetic
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Fixed navigation */}
      <Navigation />
      
      {/* Main content */}
      <main>
        {/* Hero section with particles */}
        <section id="home" className="relative">
          <HeroSection />
        </section>

        {/* About section */}
        <AboutSection />

        {/* Projects section */}
        <ProjectsSection />

        {/* Contact section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}