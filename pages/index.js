import AboutSection from "../components/AboutSection/AboutSection";
import AnnouncementsSection from "../components/Announcements/AnnouncementsSection";
import ContactSection from "../components/ContactSection/ContactSection";
import HeroSection from "../components/HeroSection/HeroSection";
import Footer from "../components/Layout/Footer";
import Navbar from "../components/Layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <AnnouncementsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
