import React from 'react';
import Welcome from '../../assets/images/welcome.png'; 

function WelcomeSection() {
  return (
    <section className="py-12">
      <div className="md:w-[80%] w-[90%] mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 md:p-4">
          <img src={Welcome} alt="Staircase" className="shadow-lg md:w-[420px] w-full h-96 object-cover" />
        </div>
        <div className="w-full md:w-1/2 p-4 text-center">
          <h2 className="md:text-3xl text-xl font-normal text-purple mb-2 md:mt-0 mt-6">Welcome to Lightway Homes</h2>
          <hr className="border-purple border-[2px] mb-4 md:w-44 w-28 mx-auto text-center rounded-xl"/>
          <p className="text-lg text-purple mb-6">
            <span className="text-4xl text-purple font-normal">W</span>
            e are a real estate company providing marketing, advisory and developmental services across the entire real estate value chain in Nigeria and across Africa.
          </p>
          <button className="px-6 py-3 border border-purple text-purple font-semibold rounded hover:bg-purple hover:text-white transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default WelcomeSection;
