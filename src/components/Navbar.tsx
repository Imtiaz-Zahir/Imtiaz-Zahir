import { useState } from "react";
import scrollDown from "./scroll";

const links = ["About", "Skills", "Projects", "Experience", "Contact Now"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      id="nav"
      className="flex px-0 xs:px-2 sm:px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-24 items-center justify-between mb-5 md:mb-0"
      data-aos="fade-down"
    >
      <a
        style={{ fontFamily: "Monsieur La Doulaise" }}
        className="text-5xl whitespace-nowrap"
        href="/"
      >
        Imtiaz Zahir
      </a>

      <i
        onClick={() => {
          setOpen((prv) => !prv);
        }}
        id="bar"
        className={`uil ${
          open ? "uil-times" : "uil-bars"
        } lg:hidden text-4xl ml-auto px-2 my-5`}
      ></i>
      <ul
        onClick={() => {
          setOpen(false);
        }}
        id="ul"
        className={`items-center lg:justify-center lg:text-2xl text-3xl lg:flex absolute lg:sticky bg-white lg:bg-transparent lg:w-full lg:h-full w-screen h-screen right-0 top-12 lg:top-0 text-black lg:text-white ${
          open ? null : "hidden"
        }`}
      >
        {links.map((data, index) => {
          if (data !== "Contact Now") {
            return (
              <li
                key={index}
                onClick={scrollDown}
                className="mx-4 hover:text-yellow-400 transition-all cursor-pointer"
              >
                {data}
              </li>
            );
          }
        })}
      </ul>
      <div
        onClick={scrollDown}
        className="lg:flex hidden bg-blue-600 text-2xl p-4 uppercase font-mono whitespace-nowrap cursor-pointer"
      >
        {links[links.length - 1]}
      </div>
    </nav>
  );
}
