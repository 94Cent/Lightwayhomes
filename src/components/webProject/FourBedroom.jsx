import fourBedroom from "../../assets/images/4-bedroom.png"
const FourBedroomMansionatte=()=>{
    return(
            <section className="pt-24">
              <div className="pb-5">
                <h2 className="text-purple text-2xl border-b border-b-purple py-6 text-center font-bold">
                Price and Payment Plan
                </h2>
              </div>
              <div className="relative mt-12 md:w-[70%] mx-auto sm:w-[80%] w-[90%]">
                <div>
                  <img className="w-full mx-auto md:h-[80vh] h-[60vh]" src={fourBedroom} alt="" />
                </div>
                <div className="absolute top-6 w-full text-center font-bold text-purple md:text-2xl text-xl">
                  <h2>4-BEDROOM MANSIONATTE</h2>
                </div>
                <div className="flex items-center justify-between absolute bottom-10 w-full px-2">
                  <button className="bg-purple text-white sm:h-10 sm:w-10 w-7 h-7 rounded-full sm:text-2xl md:text-3xl">
                    &#10094;
                  </button>
                  <button className="bg-purple text-white sm:h-10 sm:w-10 w-7 h-7 rounded-full sm:text-2xl md:text-3xl">
                    &#10095;
                  </button>
                </div>
              </div>
              <div className="text-purple border-b border-x md:w-[70%] mx-auto sm:w-[80%] w-[90%] text-center border-purple pt-10">
                <h2 className="py-6 text-2xl">4-BEDROOM MANSIONATTE</h2>
                <p className="pb-6 pt-4 text-lg">While you spread the balance over 6 months
                </p>
                <p  className="font-bold text-lg mb-6"><i>From </i>#3,600,000</p>
                <button className="py-3 bg-purple text-white font-medium w-full text-lg">Reserve your spot</button>
              </div>
            </section>
        
    )
}
export default FourBedroomMansionatte