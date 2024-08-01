// import floorStructure from "../../assets/images/floor-plan.png"
import ProjectSlider from "../ProjectSlider";
const FloorStructure = ({ project }) => {
  return (
    <section className="pt-20">
      <div className="relative md:w-[70%] mx-auto sm:w-[80%] w-[90%]">
        <div>
          <ProjectSlider images={project.floorImage} />
        </div>
        <div className="absolute top-6 right-5 text-purple sm:text-2xl">
          <h2>THE FLOOR STRUCTURE</h2>
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
      <div className="text-purple pt-16 font-medium">
        <h2 className="pb-8 text-2xl text-center">THE FLOOR PLAN</h2>
        <p className="sm:w-[70%] w-[90%] mx-auto">
        {project.floorDescription}
        </p>
      </div>
    </section>
  );
};
export default FloorStructure;
