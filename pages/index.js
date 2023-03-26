import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AboutSection from "../components/AboutSection/AboutSection";
import AnnouncementsSection from "../components/Announcements/AnnouncementsSection";
import ContactSection from "../components/ContactSection/ContactSection";
import HeroSection from "../components/HeroSection/HeroSection";
import Footer from "../components/Layout/Footer";
import Navbar from "../components/Layout/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>notabene - nieruchomości</title>
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta name="title" content="notabene - nieruchomości" />
        <meta
          name="description"
          content="notabene - pośrednictwo w obrocie nieruchomościami"
        />
        <meta
          name="keywords"
          content="notabene, nieruchomości, dom, mieszkanie, apartament, loft, działka"
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <AnnouncementsSection />
        <ContactSection />
      </main>
      <Footer />
      <ToastContainer />
    </>
  );
}
