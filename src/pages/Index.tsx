import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import GallerySection from "@/components/GallerySection";
import YouTubeSection from "@/components/YouTubeSection";
import AchievementsSection from "@/components/AchievementsSection";
import AcademicDocsSection from "@/components/AcademicDocsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <GallerySection />
      <YouTubeSection />
      <AchievementsSection />
      <AcademicDocsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
