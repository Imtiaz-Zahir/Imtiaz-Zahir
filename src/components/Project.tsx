const projects = [
  {
    src: "/projects/Sohoz-Learning.jpeg",
    alt: "Sohoz Learning",
    dis: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores quia nostrum qui iusto quasi earum quidem doloremque quis culpa cum!",
    view: "",
    code: "https://github.com/Imtiaz-Zahir/Sohoz-Learning",
    used: ["JavaScript", "Next.js", "TailwindCSS"],
  },
  {
    src: "/projects/Slot-Game.png",
    alt: "Slot Game",
    dis: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores quia nostrum qui iusto quasi earum quidem doloremque quis culpa cum!",
    view: "https://solt-game.rf.gd",
    code: "https://github.com/Imtiaz-Zahir/Slot-Game",
    used: ["JavaScript", "React"],
  },
];

export default function Project() {
  return (
    <section
      id="projects"
      className="px-0 xs:px-2 sm:px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-24 my-20"
    >
      <h1 className="text-center uppercase text-5xl font-semibold after:contents-[''] after:w-60 after:h-1 after:bg-gray-500 after:lg:block after:m-auto after:rounded-full after:hidden">
        Projects
      </h1>
      <div className="flex flex-col items-center relative">
        <span className="absolute w-1 h-full bg-gray-500 hidden lg:block"></span>
        {projects.map(({ src, alt, dis, view, code, used }, index) => {
          return (
            <div
              key={index}
              data-aos="fade-up"
              className={`max-w-[360px] mt-28 w-full rounded-2xl overflow-hidden backdrop-blur-sm prShadow lg:sticky ${
                index % 2 === 0 ? "lg:left-[53%]" : "lg:right-[53%]"
              }`}
            >
              <div className=" overflow-hidden">
                <img src={src} alt={alt} className="w-full" draggable="false" />
              </div>
              <div className="p-4">
                <div className="mb-8">
                  <h2 className="text-3xl font-semibold">{alt}</h2>
                  <p className="mt-2 mb-4 text-lg text-justify">{dis}</p>
                  <div className="flex gap-2 flex-wrap">
                    {used.map((name, index) => (
                      <span
                        key={index}
                        className="bg-slate-900 py-1 font-mono px-4 font-semibold text-sm"
                      >
                        {name}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between px-2">
                  <a
                    href={view}
                    target="_blank"
                    className="py-2 px-6 bg-blue-700 hover:bg-blue-800 font-bold rounded flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="mr-2 h-6 inline-block"
                    >
                      <path
                        fill="#FFF"
                        d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z"
                      ></path>
                    </svg>{" "}
                    VIEW
                  </a>
                  <a
                    href={code}
                    target="_blank"
                    className="py-2 px-6 bg-blue-700 hover:bg-blue-800 font-bold rounded flex items-center"
                  >
                    <svg
                      className="mr-2 h-6 inline-block"
                      xmlns="http://www.w3.org/2000/svg"
                      data-name="Layer 1"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#FFF"
                        d="M17 6.06a3 3 0 0 0-1.15 5.77A2 2 0 0 1 14 13.06h-4a3.91 3.91 0 0 0-2 .56V7.88a3 3 0 1 0-2 0v8.36a3 3 0 1 0 2.16.05A2 2 0 0 1 10 15.06h4a4 4 0 0 0 3.91-3.16A3 3 0 0 0 17 6.06Zm-10-2a1 1 0 1 1-1 1 1 1 0 0 1 1-1Zm0 16a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm10-10a1 1 0 1 1 1-1 1 1 0 0 1-1 1Z"
                      ></path>
                    </svg>
                    CODE
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
