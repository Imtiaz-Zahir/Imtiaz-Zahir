export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full px-0 xs:px-2 sm:px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-24 py-20"
    >
      <div
        className="w-3/4 grid grid-cols-1 md:grid-cols-3 gap-12 mx-auto justify-between items-center text-center"
      >
        <div className="flex flex-col justify-center items-center">
          <h4 className="text-7xl text-blue-700 font-bold">1+</h4>
          <p className="text-2xl font-semibold my-2">Year Experience</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h4 className="text-7xl text-blue-700 font-bold">10+</h4>
          <p className="text-2xl font-semibold my-2">Complete Project</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h4 className="text-7xl text-blue-700 font-bold">99%</h4>
          <p className="text-2xl font-semibold my-2">Happy Client</p>
        </div>
      </div>
    </section>
  )
}
