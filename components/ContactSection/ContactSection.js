import dynamic from "next/dynamic";
import { Phone, Mail, MapPin } from "tabler-icons-react";
const Map = dynamic(() => import("./Map"), { ssr: false });

const ContactSection = () => (
  <section color="w-full bg-green-100" id="contact">
    <div class="container mx-auto py-8 px-4">
      <div class="grid grid-cols-1 lg:grid-cols-2">
        <div class="p-4">
          <h1 class="text-3xl font-bold mb-6 border-b-2 border-emerald-800 w-fit">
            Kontakt
          </h1>
          <div class="flex flex-col	gap-4">
            <p class="text-sm text-gray-600 flex items-center gap-2">
              <Phone />
              000-000-000
            </p>
            <p class="text-sm text-gray-600 flex items-center gap-2">
              <Mail />
              lorem@ipsum.com
            </p>
            <p class="text-sm text-gray-600 flex items-center gap-2">
              <MapPin />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
        </div>
        <div class="py-4">
          <Map />
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
