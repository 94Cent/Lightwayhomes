import floorStructure from "../../assets/images/floor-plan.png"
const FloorStructure=()=>{
    return (
<section className="pt-20">
<div className="relative md:w-[80%] mx-auto sm:w-full">
        <div>
            <img className="w-full mx-auto sm:h-screen" src={floorStructure} alt="" />
        </div>
        <div className="absolute top-6 right-5 text-purple sm:text-2xl">
            <h2>THE FLOOR STRUCTURE</h2>
        </div>
        <div className="flex items-center justify-between h-full absolute top-0 w-full px-2">
              <button className="bg-purple text-white sm:h-10 sm:w-10 w-7 h-7 rounded-full sm:text-2xl md:text-3xl">&#10094;</button>
              <button className="bg-purple text-white sm:h-10 sm:w-10 w-7 h-7 rounded-full sm:text-2xl md:text-3xl">&#10095;</button>
            </div>
        </div>
        <div className="text-purple pt-16"> 
            <h2 className="pb-8 text-2xl text-center">THE FLOOR PLAN</h2>
            <p className="sm:w-[90%] mx-auto">The floor plan has been designed to enhance the life of occupants by maximizing space, light and airflow while simultaneously creating a natural flow between rooms. Moving through the space within each unit is seamless and fitting to your lifestyle.</p>
        </div>
</section>
    )
}
export default FloorStructure