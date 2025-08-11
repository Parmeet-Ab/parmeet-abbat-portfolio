import { ThemeToggle } from "../components/ThemeToggle";
import { SnowFlakes } from "../components/SnowFlakes";
import { NavBar } from "../components/NavBar";
import { HomeSection } from "../components/HomeSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
  
    <div className = 'min-h-screen bg-background text-foreground overflow-x-hidden transition-color duration-300'>
        {/* Theme Toggle Button */}
        <ThemeToggle />
        {/* Background Effects */}
          {/* */}
          < SnowFlakes />
        {/* Nav Bar */}
          <NavBar />

        {/* Main Content */}
        <main>
          <HomeSection />
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

    </div>
  );

}