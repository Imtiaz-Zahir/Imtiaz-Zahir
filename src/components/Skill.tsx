export default function Skill() {
  return (
    <section
      id="skills"
      className="px-2 sm:px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-24 my-20"
    >
      <h1 className="text-center uppercase text-5xl font-semibold my-10">
        Skills
      </h1>
      <div className="flex flex-wrap gap-10 my-28">
        {["next.png", "mongo.png", "mysql.png", "solidity.png"].map(
          (data, index) => (
            <div
              key={index}
              className="skillCase mx-auto flex items-center justify-center"
            >
              <img
                className="max-h-28"
                loading="lazy"
                draggable="false"
                src={`/skills/${data}`}
                alt=""
              />
            </div>
          )
        )}
      </div>
    </section>
  );
}
