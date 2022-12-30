import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper";
import { SLIDES } from "../../constants/hero";

const HeroCarousel = () => (
  <Swiper
    modules={[Autoplay, Pagination, Navigation]}
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
    }}
    loop
  >
    {SLIDES.map((slide, index) => (
      <SwiperSlide key={index}>
        <div class="relative bg-[url('https://i.pinimg.com/originals/d2/39/2d/d2392dccbed4b92762b57ca45657b3b3.jpg')] bg-no-repeat bg-cover bg-center bg-fixed h-[50vh]">
          <div class="absolute bottom-3 left-0 py-4 pl-4 min-w-[25%] pr-8 bg-emerald-800 text-white drop-shadow-md rounded-r-3xl">
            <h1 class="text-xl font-bold"> {slide.title}</h1>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);

export default HeroCarousel;
