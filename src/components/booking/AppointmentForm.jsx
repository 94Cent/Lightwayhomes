import React from "react";

function AppointmentForm(){
    return(
        <>
          <section className="bg-white py-2 px-6 md:px-16">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2 text-purple">Book An Inspection</h2>
                    <p className="text-purple text-lg">
                        Our friendly team would love to hear from you
                    </p>
                </div>

                <form action="" className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="fullname" className="block text-gray-800 font-semibold mb-2">
                            Full Name <span className="text-red-500">*</span>
                        </label>
                        <input 
                        type="text" 
                        placeholder="Full Name"
                        className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-gray-800 font-semibold mb-2">
                            Realto Email Address <span className="text-red-500">*</span>
                        </label>
                        <input 
                        type="email" 
                        placeholder="Realtor Email Address"
                        className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple"/>
                    </div>

                    <div>
                        <label htmlFor="phonenumber" className="block text-gray-800 font-semibold mb-2">
                            Realtor Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input 
                        type="tel" 
                        placeholder="Realtor Phone Number"
                        className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple"
                        />
                    </div>

                    <div>
                        <label htmlFor="estate" className="block text-gray-800 font-semibold mb-2">
                            Estate to visit <span className="text-red-500">*</span>
                        </label>
                        <select className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple">
                            <option>Select Estate</option>
                            <option>Select Estate</option>
                            <option>Select Estate</option>
                        </select>
                    </div>

                    <div>
            <label className="block text-gray-800 font-semibold mb-2">
              Category <span className="text-red-500">*</span>
            </label>
            <select className="w-full border border-gray-300 rounded-md p-3 bg-white focus:outline-none focus:ring-2 focus:ring-purple">
              <option>Select Category</option>
              <option>Luxury</option>
              <option>Affordable</option>
            </select>
          </div>

               <div>
                <label htmlFor="date" className="block text-gray-800 font-semibold mb-2">
                    Inspection Date <span className="text-red-500">*</span>
                </label>
                <input 
                type="date" 
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple"/>
               </div>

               <div>
                <label htmlFor="pickuplocation" className="block text-gray-800 font-semibold mb-2">
                    Pick Up Loacation <span className="text-red-500">*</span>
                </label>
                <select className="w-full border border-gray-300 rounded-md p-3 bg-white focus:outline-none focus:ring-2 focus:ring-purple">
                    <option>Select Category</option>
                    <option>Main Office</option>
                    <option>Branch</option>
                </select>
               </div>

               <div>
                <label htmlFor="time" className="block text-gray-800 font-semibold mb-2">
                    Inspection Time
                </label>
                <input 
                type="time" 
                defaultValue="09:00"
                className="w-full border border-gray-300 rounded-md p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple"
                />
               </div>

                </form>

                <div lassName="md:col-span-2 mt-5">
                 <label htmlFor="message" className="block text-gray-800 font-semibold mb-2">
                    Message
                 </label>
                 <textarea 
                 rows="5"
                 placeholder="Your message"
                 className="w-full md:w-[90%] lg:w-[95%] xl:w-full  border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple"

                 ></textarea>
               </div>

                <div className="text-center mt-10">
          <button
            type="submit"
            className="bg-purple text-white font-semibold py-3 px-8 rounded-md hover:bg-gray-500 transition"
          >
            Send Message
          </button>
        </div>
            </div>
          </section>
        </>
    )
}
export default AppointmentForm