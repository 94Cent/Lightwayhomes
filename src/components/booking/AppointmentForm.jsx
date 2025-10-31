import React, { useState } from "react";

function AppointmentForm(){
    // 1. State only needed to manage form field values
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        estate: 'Select Estate',
        category: 'Select Category',
        date: '',
        pickupLocation: 'Office',
        time: '09:00',
        message: ''
    });

    // We no longer need isSubmitting or submitStatus!

    // 2. Generic change handler to update state for any input
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [id]: value
        }));
    };
    
    // We no longer need the complex handleSubmit function!

    return(
        <>
          <section className="py-10 px-6 md:px-16 rounded-xl shadow-lg m-4 max-w-7xl mx-auto">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-purple">Book An Inspection</h2>
                    <p className="text-purple text-lg">
                        Our friendly team would love to hear from you.
                    </p>
                </div>

                <form 
                    action="https://formsubmit.co/lwh.investment@gmail.com" 
                    method="POST" 
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    
                    <input type="hidden" name="_subject" value="New Inspection Booking Request" />
                    

                    <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" /> 


                    <div>
                        <label htmlFor="fullName" className="block text-gray-800 font-semibold mb-2">
                            Full Name <span className="text-red-500">*</span>
                        </label>
                        <input 
                        id="fullName"
                        type="text" 
                        name="Full Name"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-gray-800 font-semibold mb-2">
                            Email Address <span className="text-red-500">*</span>
                        </label>
                        <input 
                        id="email"
                        type="email" 
                        name="Email"
                        placeholder="Your Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple"/>
                    </div>
                    
                    <div>
                        <label htmlFor="phoneNumber" className="block text-gray-800 font-semibold mb-2">
                              Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input 
                        id="phoneNumber"
                        type="tel" 
                        name="Phone Number"
                        placeholder="Your Phone Number"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple"
                        />
                    </div>

                    <div>
                        <label htmlFor="estate" className="block text-gray-800 font-semibold mb-2">
                            Estate to visit <span className="text-red-500">*</span>
                        </label>
                        <select 
                        id="estate"
                        name="Estate"
                        value={formData.estate}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-lg p-3 bg-white focus:outline-none focus:ring-2 focus:ring-purple">
                            <option disabled value="Select Estate">Select Estate</option>
                            <option>Pineville</option>
                            <option>Palm Meadows</option>
                            <option>Golden Gates</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="category" className="block text-gray-800 font-semibold mb-2">
                              Category <span className="text-red-500">*</span>
                        </label>
                        <select 
                        id="category"
                        name="Category"
                        value={formData.category}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-lg p-3 bg-white focus:outline-none focus:ring-2 focus:ring-purple">
                            <option disabled value="Select Category">Select Category</option>
                            <option>Luxury</option>
                            <option>Affordable</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="date" className="block text-gray-800 font-semibold mb-2">
                            Inspection Date <span className="text-red-500">*</span>
                        </label>
                        <input 
                        id="date"
                        type="date" 
                        name="Date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple"/>
                    </div>

                    <div>
                        <label htmlFor="pickupLocation" className="block text-gray-800 font-semibold mb-2">
                            Pick Up Location <span className="text-red-500">*</span>
                        </label>
                        <select 
                        id="pickupLocation"
                        name="Pickup Location"
                        value={formData.pickupLocation}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-lg p-3 bg-white focus:outline-none focus:ring-2 focus:ring-purple">
                            <option>Office</option>
                            <option>Arepo</option>
                            <option>Berger</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="time" className="block text-gray-800 font-semibold mb-2">
                            Inspection Time
                        </label>
                        <input 
                        id="time"
                        type="time" 
                        name="Time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg p-3 bg-white focus:outline-none focus:ring-2 focus:ring-purple"
                        />
                    </div>
                    
                    <div className="md:col-span-2">
                       <label htmlFor="message" className="block text-gray-800 font-semibold mb-2">
                            Message
                        </label>
                        <textarea 
                        id="message"
                        rows="5"
                        name="Message"
                        placeholder="Your message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple"
                        ></textarea>
                    </div>
                    
                    <div className="text-center mt-4 md:col-span-2">
                        <button
                            type="submit"
                            className="bg-purple text-white font-semibold py-3 px-12 rounded-lg shadow-lghover:bg-purple-800 hover:border-purple-800 hover:shadow-lg transition duration-300 flex items-center justify-center mx-auto"
                        >
                            Book Inspection
                        </button>
                    </div>
                </form>
            </div>
          </section>
        </>
    )
}
export default AppointmentForm