import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { Loader2 } from 'tabler-icons-react';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef();

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        "service_5zkvvat",
        "template_1ga7l5n",
        form.current,
        "9vfRgSQP6OyRjEvX0"
      )
      .then(
        (success) => {
          toast.success("Wiadomość została wysłana!");
        },
        (error) => {
          toast.error("Wystąpił błąd!");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <form ref={form} onSubmit={onSubmit}>
      <div class="flex flex-col gap-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <input
            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Imię"
            required
          />
          <input
            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="E-mail"
            required
          />
        </div>
        <input
          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="topic"
          type="text"
          placeholder="Temat"
          required
        />
        <textarea
          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none h-40"
          id="message"
          type="text"
          placeholder="Wiadomość"
          required
        />
        <button
          class="bg-emerald-800 hover:bg-emerald-900 text-white font-bold py-2 px-4 rounded w-full disabled:bg-gray-400 flex justify-center"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? <Loader2 class="animate-spin" /> : 'Wyślij'}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
