import { User } from "tabler-icons-react";

const AboutSection = () => (
  <section color="w-full bg-green-100" id="about">
    <div class="container mx-auto py-8 px-4">
      <div class="grid grid-cols-1 lg:grid-cols-2">
        <div class="py-4 flex items-center justify-center">
          <div class="overflow-hidden relative bg-gray-100 rounded-full p-8">
            <User size={250} />
          </div>
        </div>
        <div class="py-4 flex flex-col justify-center">
          <h1 class="text-3xl font-bold mb-6 border-b-2 border-emerald-800 w-fit">Karolina Kołatek</h1>
          <p class="font-light text-gray-500 mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
            lacus turpis. Sed massa diam, hendrerit eget mollis eget, porttitor
            eu libero. Sed dolor massa, volutpat nec erat sit amet, efficitur
            faucibus orci. Vestibulum venenatis metus ut tincidunt auctor.
            Maecenas volutpat enim sed neque malesuada malesuada quis vel
            tortor. Integer tincidunt, dui a varius maximus, libero erat cursus
            nulla, convallis finibus dolor diam id mauris. Ut molestie eros eget
            elementum gravida.
          </p>
          <p class="font-light text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
            lacus turpis. Sed massa diam, hendrerit eget mollis eget, porttitor
            eu libero. Sed dolor massa, volutpat nec erat sit amet, efficitur
            faucibus orci. Vestibulum venenatis metus ut tincidunt auctor.
            Maecenas volutpat enim sed neque malesuada malesuada quis vel
            tortor. Integer tincidunt, dui a varius maximus, libero erat cursus
            nulla, convallis finibus dolor diam id mauris. Ut molestie eros eget
            elementum gravida.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
