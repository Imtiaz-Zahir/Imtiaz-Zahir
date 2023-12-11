import {scrollDown} from "./scroll";

export default function About() {
  return (
    <section
      id="about"
      className="px-0 xs:px-2 sm:px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-24 lg:flex my-20"
    >
      <div className="w-2/5 hidden lg:block px-12">
        <img
          className="w-full"
          src="/man.jpg"
          alt=""
          loading="lazy"
          draggable="false"
        />
      </div>
      <div className="lg:w-3/5 xs:px-3 md:px-6 lg:px-10 xl:px-12 py-4">
        <h1 className="uppercase text-5xl font-semibold font-mono my-8">
          About me
        </h1>
        <h2 className="text-2xl my-2">
          Hello there, I am Imtiaz Zahir. I love to learn new technologies and I
          want to learn as much as possible.
        </h2>
        <p className="my-4">
          My insatiable appetite for learning is what propels me forward. From
          delving into the intricacies of artificial intelligence to unraveling
          the mysteries of cutting-edge software, I find joy in the process of
          acquiring new skills. I firmly believe that in the fast-paced realm of
          technology, the key to success lies in embracing continuous growth and
          development.
        </p>
        <p className="my-4">
          With an open mind and a thirst for knowledge, I aspire to become a
          well-rounded technologist who can adapt to the dynamic challenges of
          the digital age. By constantly expanding my horizons, I equip myself
          with the tools to navigate emerging trends and innovate in an
          ever-changing landscape. Join me on this exhilarating journey of
          exploration and let's harness the transformative power of technology
          together.
        </p>
        <div className="my-12 text-center md:text-start">
          <span
            onClick={scrollDown}
            className="py-4 px-8 bg-yellow-400 mx-6 my-2 text-black font-bold cursor-pointer"
          >
            HIRE ME NOW
          </span>
          <a href="">
            <span className="py-4 px-8 bg-yellow-400 mx-6 my-2 text-black font-bold">
              VIEW RESUME
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
