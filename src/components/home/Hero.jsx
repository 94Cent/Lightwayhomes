import React from 'react';

function Hero() {
  return (
    <section className="relative h-screen bg-custom-hero bg-cover bg-center">
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center text-white lg:w-[65%] md:w-[65%] w-85%">
        <h1 className="md:text-4xl text-2xl font-normal">Welcome to Light Way Homes</h1>
        <p className="mt-6 font-[300] md:text-4xl text-2xl tracking-[5px] leading-relaxed">A Homes that matches your lifestyle and make your dream come through</p>
        <button className="mt-8 md:px-14 px-10 py-3 md:text-xl text-lg bg-transparent border border-white text-white font-semibold">Learn More</button>
      </div>
    </div>
  </section>
  );
}

export default Hero;
