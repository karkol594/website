import HeroCarousel from "./HeroCarousel";

const HeroSection = () => (
  <section class="w-full bg-gray-100" id="home">
    <div class="grid grid-cols-1 lg:grid-cols-2">
      <div class="px-8 mx-auto flex items-center">
        <div class="py-8">
          <h1 class="text-5xl font-bold mb-5">
            Nieruchomości dla <span class="text-emerald-800">Ciebie</span>
          </h1>
          <a
            href="https://www.olx.pl/"
            rel="noreferrer"
            target="_blank"
            class="bg-emerald-800 hover:bg-emerald-900 text-white font-bold p-3 rounded"
          >
            Sprawdź ofertę
          </a>
        </div>
      </div>
      <div>
        <HeroCarousel />
      </div>
    </div>
  </section>
);

export default HeroSection;
