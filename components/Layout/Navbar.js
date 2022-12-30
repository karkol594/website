import { useState } from "react";
import { Menu2, HomeSearch } from "tabler-icons-react";
import Scrollspy from "react-scrollspy";
import { NAVIGATION_ITEMS } from "../../constants/navbar";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <nav class="w-full bg-white border-gray-200 px-2 py-3 sm:px-4 fixed md:py-0 z-10">
      <div class="container flex flex-wrap items-center justify-between mx-auto md:h-16">
        <a href="./" class="flex items-center gap-2">
          <HomeSearch color={"#065f46"} />
          <span class="self-center text-xl font-semibold whitespace-nowrap">
            Karolina Kołatek
          </span>
        </a>
        <button
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          onClick={() => setIsExpanded((prevState) => !prevState)}
        >
          <span class="sr-only">Menu</span>
          <Menu2 />
        </button>
        <div
          class={`${isExpanded ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <Scrollspy
            className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white"
            items={NAVIGATION_ITEMS.map((item) => item.href)}
            currentClassName="is-current"
            offset={-72}
          >
            {NAVIGATION_ITEMS.map((item, index) => (
              <li key={index}>
                <span
                  onClick={() => {
                    const elem = document.getElementById(item.href);
                    if (elem) {
                      window.scrollTo({
                        top: elem.offsetTop - 64,
                        behavior: "smooth",
                      });
                    }
                  }}
                  data-to-scrollspy-id={item.href}
                  class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-emerald-800 md:p-0 cursor-pointer"
                >
                  {item.label}
                </span>
              </li>
            ))}
          </Scrollspy>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
