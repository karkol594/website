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
        <Section color="bg-green-100" title="Section 2" id="about" />
        <AnnouncementsSection />
        <Section color="bg-rose-100" title="Section 4" id="contact" />
      </main>
    </>
  );
}
