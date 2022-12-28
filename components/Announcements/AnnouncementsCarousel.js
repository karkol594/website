import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import AnnouncementCard from "./AnnouncementCard";
import { ANNOUNCEMENTS } from "../../constants/announcements";

const AnnouncementsCarousel = () => (
  <Swiper
    slidesPerView="auto"
    slidesPerGroupAuto
    spaceBetween={50}
    style={{
      paddingTop: "16px",
      paddingBottom: "16px",
    }}
  >
    {ANNOUNCEMENTS.map((announcement, index) => (
      <SwiperSlide
        key={index}
        style={{
          width: "auto",
        }}
      >
        <AnnouncementCard {...announcement} />
      </SwiperSlide>
    ))}
  </Swiper>
);

export default AnnouncementsCarousel;
