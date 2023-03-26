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
          <h1 class="text-3xl font-bold mb-6 border-b-2 border-emerald-800 w-fit">
            Karolina Kołatek
          </h1>
          <p class="font-light text-gray-500 mb-3">
            Jestem doświadczonym agentem nieruchomości z pasją i determinacją do
            pomagania. Moje podejście opiera się na pełnym profesjonalizmie,
            skrupulatności i dokładności. Stawiam na pierwszym miejscu potrzeby
            i oczekiwania moich klientów, a moim celem jest zapewnienie im
            najlepszej jakości usług nieruchomościowych.
          </p>
          <p class="font-light text-gray-500 mb-3">
            Dzięki mojej wiedzy i doświadczeniu w branży, jestem w stanie
            oferować swoim klientom pełne wsparcie na każdym etapie procesu
            kupna lub sprzedaży nieruchomości. Oferuję indywidualne podejście do
            każdego klienta, słuchając i analizując ich potrzeby, a następnie
            proponując rozwiązania, które spełnią ich wymagania.
          </p>
          <p class="font-light text-gray-500">
            Jako agentka nieruchomości, wiem, jak ważna jest jasność,
            transparentność i etyka w mojej pracy. Dlatego zawsze stawiam na
            pierwszym miejscu uczciwość, rzetelność i zaangażowanie w każdą
            transakcję. Jestem zawsze gotowa odpowiedzieć na wszelkie pytania i
            udzielić porady, aby moi klienci mogli dokonać najlepszego wyboru
            dla siebie.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
