import AnnouncementsCarousel from "./AnnouncementsCarousel";

const AnnouncementsSection = () => (
  <section class="w-full bg-gray-100" id="offer">
    <div class="container mx-auto py-8 px-4">
      <h1 class="text-3xl font-bold mt-0 mb-6">Najnowsze ogłoszenia</h1>
      <AnnouncementsCarousel />
    </div>
  </section>
);

export default AnnouncementsSection;
