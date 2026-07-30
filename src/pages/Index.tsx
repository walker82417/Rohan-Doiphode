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
      {/* SEO: semantic, screen-reader-only context for crawlers & accessibility */}
      <h1 className="sr-only">
        Rohan Doiphode — Electrical Engineer, IoT & AI Developer Portfolio
      </h1>
      <p className="sr-only">
        Welcome to the official portfolio of Rohan Doiphode, a B.Tech Electrical
        Engineering graduate and developer specializing in Internet of Things
        (IoT), Artificial Intelligence (AI), embedded systems, robotics, power
        electronics, renewable energy and automation. Explore projects built
        with Arduino, ESP32, Raspberry Pi, Python, C++ and MATLAB, alongside
        academic certifications, achievements, gallery and contact details.
      </p>
      <ul className="sr-only" aria-hidden="true">
        <li>Rohan Doiphode portfolio</li>
        <li>Electrical Engineering projects</li>
        <li>IoT developer India</li>
        <li>AI and Machine Learning student projects</li>
        <li>Embedded systems and microcontroller projects</li>
        <li>Power electronics and renewable energy</li>
        <li>Robotics and automation</li>
        <li>Arduino, ESP32, Raspberry Pi projects</li>
        <li>Engineering student portfolio website</li>
      </ul>

      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <GallerySection />
        <YouTubeSection />
        <AchievementsSection />
        <AcademicDocsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
