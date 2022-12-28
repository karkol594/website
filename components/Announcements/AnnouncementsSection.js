import AnnouncementsCarousel from "./AnnouncementsCarousel";

const AnnouncementsSection = () => (
  <section class="w-full bg-gray-50 py-5 px-4" id="offer">
    <div class="container mx-auto">
      <h1 class="text-3xl font-bold mt-0 mb-6">Najnowsze ogłoszenia</h1>
      <AnnouncementsCarousel />
    </div>
  </section>
);

export default AnnouncementsSection;
