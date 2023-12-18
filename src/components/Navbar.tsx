import { useState } from "react";
import { scrollDown } from "./scroll";

const links = ["About", "Skills", "Projects", "Experience", "Contact Now"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      id="nav"
      className="flex px-2 sm:px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-24 items-center justify-between mb-5 md:mb-0"
      data-aos="fade-down"
    >
      <a
        style={{ fontFamily: "Monsieur La Doulaise" }}
        className="text-5xl whitespace-nowrap"
        href="/"
      >
        Imtiaz Zahir
      </a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="lg:hidden text-4xl ml-auto px-2 my-5 h-11 cursor-pointer"
        onClick={() => {
          setOpen((prv) => !prv);
        }}
      >
        <path
          fill="#FFF"
          d={open?"M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z":"M3,8H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,8Zm18,8H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0-5H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z"}
        ></path>
      </svg>
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
