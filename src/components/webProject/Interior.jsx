import ProjectSlider from "../ProjectSlider"
// import interior from "../../assets/images/interior.png"
const Interior=({project})=>{
    return (
<section className="pt-20">
<div className="relative md:w-[70%] mx-auto sm:w-[80%] w-[90%]">
        <div>
            <ProjectSlider images={project.interiorImage}  />
        </div>
        <div className="absolute top-6 right-5 text-purple sm:text-2xl text-lg">
            <h2>THE INTERIORS STRUCTURE</h2>
        </div>
        {/* <div className="flex items-center justify-between h-full absolute top-0 w-full px-2">
              <button className="bg-purple text-white sm:h-10 sm:w-10 w-7 h-7 rounded-full sm:text-2xl md:text-3xl">&#10094;</button>
              <button className="bg-purple text-white sm:h-10 sm:w-10 w-7 h-7 rounded-full sm:text-2xl md:text-3xl">&#10095;</button>
            </div> */}
        </div>
        <div className="text-purple pt-16 font-medium"> 
            <h2 className="pb-8 text-center text-2xl">THE INTERIORS</h2>
            <p className="sm:w-[70%] w-[90%] mx-auto">{project.interiorDescription}</p>
        </div>
</section>
    )
}
export default Interior