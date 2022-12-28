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
        <Section color="bg-lime-100" title="Section 1" id="home" />
        <Section color="bg-green-100" title="Section 2" id="about" />
        <Section color="bg-sky-100" title="Section 3" id="offer" />
        <Section color="bg-rose-100" title="Section 4" id="contact" />
      </main>
    </>
  );
}
