import { useEffect, useRef } from "react";
import Typed from "typed.js";
import {scrollDown} from "./scroll";

export default function Hero() {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Your Skills",
        "Web Development",
        "Blockchain",
        "New Technology",
      ],
      typeSpeed: 100,
      loop: true,
      loopCount: Infinity,
      backDelay: 1500,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section
      id="home"
      className="px-2 sm:px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-24 lg:flex items-center justify-between mb-20 overflow-hidden"
    >
      <div className="lg:w-1/2 p-4 bim" data-aos="fade-right">
        <h1 className="md:text-6xl text-4xl font-bold my-4">
          Hello,
          <br /> I&apos;m Interested <span className="text-blue-600"> in</span>
          <br />
          <span className="text-blue-600" ref={el} />
        </h1>
        <p className="text-xl my-8">
          My passion for learning and unquenchable curiosity fuels my drive to
          explore the ever-evolving world of technology.
        </p>
        <span
          onClick={scrollDown}
          className="cursor-pointer sm:py-4 py-2 sm:px-12 px-4 bg-yellow-400 transition-all text-black text-lg font-bold font-mono hover:bg-transparent border border-yellow-400 hover:text-white duration-300"
        >
          Projects
        </span>
        <a href="https://github.com/Imtiaz-Zahir" target="_blank">
          <span className="sm:py-4 py-2 sm:px-12 px-4 hover:bg-yellow-400 hover:text-black text-lg font-bold font-mono ml-4 transition-all border border-yellow-400 duration-300">
            <svg
            className="mr-2 h-6 inline-block"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="#FFF"
                d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"
              ></path>
            </svg>
            GitHub
          </span>
        </a>
      </div>
      <div className="lg:w-1/2 hidden lg:block" data-aos="fade-left">
        <img
          className="w-full lg:pl-32"
          src="/image.png"
          alt=""
          draggable="false"
        />
      </div>
    </section>
  );
}
