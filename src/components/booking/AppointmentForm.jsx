import React, { useState } from "react";

function AppointmentForm(){
    // 1. State to manage all form fields
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

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

    // 2. Generic change handler to update state for any input
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [id]: value
        }));
    };

    // 3. The submission handler function
    const handleSubmit = async (e) => {
        e.preventDefault(); // Stop the default form submission (page reload)
        setIsSubmitting(true);
        setSubmitStatus(null);
        
        console.log("Form Data to be sent:", formData);

        // --- BACKEND INTEGRATION POINT ---
        // 4. This is where you would connect to your backend API.
        try {
            const response = await fetch('https://postman-echo.com/post')
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            setSubmitStatus('success');
            console.log("Appointment successfully submitted (simulated).");
            
            // Clear form after successful submission
            setFormData({
                fullName: '', email: '', phoneNumber: '', estate: 'Select Estate', 
                category: 'Select Category', date: '', pickupLocation: 'Office', 
                time: '09:00', message: ''
            });

        } catch (error) {
            console.error("Submission Error:", error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return(
        <>
          <section className="bg-gray-50 py-10 px-6 md:px-16 rounded-xl shadow-lg m-4 max-w-7xl mx-auto">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-purple">Book An Inspection</h2>
                    <p className="text-purple text-lg">
                        Our friendly team would love to hear from you.
                    </p>
                </div>

                {/* Submission Status Message */}
                {submitStatus === 'success' && (
                    <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6 rounded-lg font-medium" role="alert">
                        <p>Success! Your inspection request has been sent. We will contact you shortly.</p>
                    </div>
                )}
                {submitStatus === 'error' && (
                    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-lg font-medium" role="alert">
                        <p>Error! Something went wrong during submission. Please try again later.</p>
                    </div>
                )}


                {/* Form element attached to the handleSubmit function */}
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="fullName" className="block text-gray-800 font-semibold mb-2">
                            Full Name <span className="text-red-500">*</span>
                        </label>
                        <input 
                        id="fullName"
                        type="text" 
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
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg p-3 bg-white focus:outline-none focus:ring-2 focus:ring-purple"
                        />
                    </div>
                    
                    {/* The message field spans two columns on medium screens and up */}
                    <div className="md:col-span-2">
                       <label htmlFor="message" className="block text-gray-800 font-semibold mb-2">
                            Message
                        </label>
                        <textarea 
                        id="message"
                        rows="5"
                        placeholder="Your message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple"
                        ></textarea>
                    </div>
                    
                    {/* The submit button is now tied to the parent form's onSubmit event */}
                    <div className="text-center mt-4 md:col-span-2">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-purple text-white font-semibold py-3 px-12 rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 disabled:opacity-50 flex items-center justify-center mx-auto"
                        >
                            {isSubmitting ? (
                                <svg className="animate-spin h-5 w-5 text-white mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            ) : (
                                'Book Inspection'
                            )}
                        </button>
                    </div>
                </form>
            </div>
          </section>
        </>
    )
}
export default AppointmentForm
