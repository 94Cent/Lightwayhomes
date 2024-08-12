import ProjectSlider from "../ProjectSlider";
const Exterior = ({project}) => {
  return (
    <section className="md:pt-8 pt-2">
      <div className="relative lg:w-[70%] mx-auto sm:w-[80%] w-[90%] mt-12">
        <div>
          <ProjectSlider images={project.exteriorImage} texts={project?.text} />
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
        <h2 className="pb-8 text-2xl text-center font-medium">PROJECT SUMMARY</h2>
        <p className="sm:w-[70%] w-[90%] mx-auto text-purple font-medium">
          {project.projectSummary}
        </p>
      </div>
    </section>
  );
};
export default Exterior;