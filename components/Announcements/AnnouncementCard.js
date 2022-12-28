import { Dimensions } from "tabler-icons-react";

const AnnouncementCard = ({ title, description, image, size, link }) => (
  <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white cursor-default">
    <img class="w-full" src={image} alt={title} />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{title}</div>
      <p class="text-gray-700 text-base mb-2">{description}</p>
      <p class="text-sm text-gray-600 flex items-center gap-2">
        <Dimensions />
        {size.toFixed(2)}&#13217;
      </p>
    </div>
    <div class="px-6 pt-2 pb-4">
      <a href={link} rel="noreferrer" target="_blank">
        <button class="bg-emerald-800 hover:bg-emerald-900 text-white font-bold py-2 px-4 rounded w-full">
          Szczegóły
        </button>
      </a>
    </div>
  </div>
);

export default AnnouncementCard;
