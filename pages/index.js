import AboutSection from "../components/AboutSection/AboutSection";
import AnnouncementsSection from "../components/Announcements/AnnouncementsSection";
import HeroSection from "../components/HeroSection/HeroSection";
import Navbar from "../components/Layout/Navbar";

const Section = ({ color, title, id }) => (
  <div class={`w-full h-screen ${color}`} id={id}>
    {title}
  </div>
);

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <AnnouncementsSection />
        <Section color="bg-rose-100" title="Section 4" id="contact" />
      </main>
    </>
  );
}
