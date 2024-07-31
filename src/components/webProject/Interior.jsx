import interior from "../../assets/images/interior.png"
const Interior=()=>{
    return (
<section className="pt-20">
<div className="relative md:w-[80%] mx-auto sm:w-full">
        <div>
            <img className="w-full mx-auto sm:h-screen" src={interior} alt="" />
        </div>
        <div className="absolute top-6 right-5 text-purple sm:text-2xl text-lg">
            <h2>THE INTERIORS STRUCTURE</h2>
        </div>
        <div className="flex items-center justify-between h-full absolute top-0 w-full px-2">
              <button className="bg-purple text-white sm:h-10 sm:w-10 w-7 h-7 rounded-full sm:text-2xl md:text-3xl">&#10094;</button>
              <button className="bg-purple text-white sm:h-10 sm:w-10 w-7 h-7 rounded-full sm:text-2xl md:text-3xl">&#10095;</button>
            </div>
        </div>
        <div className="text-purple pt-16 text-center"> 
            <h2 className="pb-8 text-2xl">THE INTERIORS</h2>
            <p className="sm:w-[90%] mx-auto">Ample space within each apartment helps guarantee cool interior and a home good for your health. The headroom is high enough to keep the building ventilated, increased perception of space and more natural light. The interior design is flexible, adaptable and caters to your desired lifestyle.</p>
        </div>
</section>
    )
}
export default Interior