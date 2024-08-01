import ProjectSlider from "../ProjectSlider";
const Exterior = ({project}) => {
  return (
    <section className="pt-8">
      <div className="pb-5">
        <h2 className="text-purple text-2xl border-b-2 border-b-purple py-3 text-center font-bold">
          Building Structure
        </h2>
      </div>
      <div className="relative lg:w-[70%] mx-auto sm:w-[80%] w-[90%] mt-12">
        <div>
          <ProjectSlider images={project.exteriorImage} />
        </div>
        <div className="absolute top-6 right-5 text-purple sm:text-2xl text-lg">
          <h2>THE EXTERIORS STRUCTURE</h2>
        </div>
        {/* <div className="flex items-center justify-between h-full absolute top-0 w-full px-2">
          <button className="bg-purple text-white sm:h-10 sm:w-10 w-7 h-7 rounded-full sm:text-2xl md:text-3xl">
            &#10094;
          </button>
          <button className="bg-purple text-white sm:h-10 sm:w-10 w-7 h-7 rounded-full sm:text-2xl md:text-3xl">
            &#10095;
          </button>
        </div> */}
      </div>
      <div className="text-purple pt-16">
        <h2 className="pb-8 text-2xl text-center font-medium">THE EXTERIORS</h2>
        <p className="sm:w-[70%] w-[90%] mx-auto text-purple font-medium">
          {project.exteriorDescription}
        </p>
      </div>
    </section>
  );
};
export default Exterior;