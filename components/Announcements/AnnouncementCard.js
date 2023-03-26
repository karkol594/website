/* eslint-disable @next/next/no-img-element */
import { Dimensions } from "tabler-icons-react";

const AnnouncementCard = ({ title, description, image, size }) => (
  <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white cursor-default h-full flex flex-col justify-between">
    <div>
      <img class="w-full h-60" src={image} alt={title} />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{title}</div>
        <p class="text-gray-700 text-base mb-2">{description}</p>
        <p class="text-sm text-gray-600 flex items-center gap-2">
          <Dimensions />
          {size.toFixed(2)}&#13217;
        </p>
      </div>
    </div>
    <div class="px-6 pt-2 pb-4">
      <button
        class="bg-emerald-800 hover:bg-emerald-900 text-white font-bold py-2 px-4 rounded w-full"
        onClick={() => {
          const contactSection = document.getElementById("contact");
          if (contactSection) {
            window.scrollTo({
              top: contactSection.offsetTop - 64,
              behavior: "smooth",
            });
          }
        }}
        data-to-scrollspy-id="contact"
      >
        Szczegóły
      </button>
    </div>
  </div>
);

export default AnnouncementCard;
