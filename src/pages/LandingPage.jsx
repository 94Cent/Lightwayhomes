import React, { useState, useEffect, useRef } from "react";
import NovaraHero from "../assets/images/novara-hero-home.jpg";
import NaplesHero from "../assets/images/naples-hero-home.jpg";
import RomanHero from "../assets/images/roman-height-home-hero.jpg";
import TneDupelex from "../assets/images/TNE 4 BED DUPLEX2.jpeg"
import House1 from "../assets/images/House1.jpeg"
import House2 from "../assets/images/House2.jpeg"
import House3 from "../assets/images/House3.jpeg"
import House4 from "../assets/images/House4.jpeg"
import { Helmet } from "react-helmet";
import { Card, CardContent, CardHeader, CardTitle } from "../component/ui/card";
import { Button } from "../component/ui/button";
import { Input } from "../component/ui/input";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";
function LandingPage() {

    const features = [
        "Spacious 4 Bedroom Terrace + BQ",
        "Gated Community at Arepo",
        "Spacious Parking & Living Areas",
        "Title: C of O",
        "Price: ₦150 Million (Building) all inclusive price",
        "Serviced Plots: ₦30 Million (500 SQM), ₦25 Million (300 SQM) all inclusive plot price.",
        "Few Units Left -- Fully Finished",
        "Flexible payment plan available",
    ];

    
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
        };

        const WHATSAPP_GREEN = '#25D366';

    return(
        <>
          <section className="w-full h-[400px]" >
  <img 
    src={TneDupelex} 
    alt="4-Bedroom Terrace Duplex" 
    className="w-full h-full object-cover"
  />
</section>


       <section className="flex flex-col items-center justify-center px-8 py-12 bg-white rounded-t-xl shadow-lg">
  <div className="w-full flex justify-center">
    <h2 className="text-purple text-4xl md:text-5xl text-center italic font-light leading-tight">
      Own a 4-Bedroom Terrace Duplex <br /> + BQ in Arepo Today!
    </h2>
  </div>

  <div className="w-full md:w-3/4 lg:w-2/3 mt-8">
    <Slider {...settings}>
      {/** Example of one slide; repeat for other images **/}
      <div className="relative w-full h-80 md:h-96 lg:h-[500px] overflow-hidden">
        <img src={House1} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      <div className="relative w-full h-80 md:h-96 lg:h-[500px] overflow-hidden">
        <img src={House2} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      <div className="relative w-full h-80 md:h-96 lg:h-[500px] overflow-hidden">
        <img src={House3} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      <div className="relative w-full h-80 md:h-96 lg:h-[500px] overflow-hidden">
        <img src={House4} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
    </Slider>
  </div>
</section>

<section className="py-4 lg:py-10 bg-white">
    <hr className="border-t-2 border-gray-300 my-6" />

    <div className="flex flex-col md:flex-row justify-between items-center py-10 max-w-3xl mx-auto">

        <div className="text-4xl sm:text-2xl mb-8 px-6 lg:px-0 md:mb-0">
            <span className="text-purple font-bold">Few units left.</span> Fully -finished. Book <br className="hidden sm:inline"/> 
            a free inspection now or send in <br /> your enquries
        </div>

        <a 
          href=""
          target="_blank" 
          rel=""
          className="flex items-center space-x-4 cursor-pointer hover:opacity-80 transition duration-300 py-20 lg:py-0"
        >

        <div className="w-16 h-16 rounded-full flex items-center justify-center border-4">
            <span className="text-4xl">
                <FontAwesomeIcon 
              icon={faWhatsapp} // Specify the imported icon
              className="text-9xl" // Tailwind class to set the icon size
              style={{ color: WHATSAPP_GREEN }} // Inline style for the green color
            />
            </span>
        </div>

        <div className="text-4xl sm:text-3xl text-black px-5">
            Chat on
            <div className="font-semibold">WhatsApp</div>
        </div>
        </a>
    </div>

    <hr class="border-t-2 border-gray-300 my-6" />
</section>

<section className="bg-white px-6"> 
            
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-12 items-center lg:items-start">

                <div className="w-full lg:w-5/12"> 
                    <img 
                        src={House4} 
                        alt="The Naples Estate Building" 
                        className="w-full h-96 object-cover rounded-lg shadow-xl" 
                    />
                </div>

                <div className="w-full lg:w-7/12">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 text-purple text-center">
                     Why Choose The Naples <br className="hidden sm:inline" />Estate?
                  </h2>

                  <ul className="space-y-2 text-gray-700 text-lg md:text-xl">
                    {features.map((feature, index) =>(
                        <li key={index} className="flex items-start">
                            <span className="mr-3 mt-3 inline-block w-2 h-2 bg-black flex-shrink-0"></span>
                            {feature}
                        </li>
                    ))}
                  </ul>
                </div>
            </div>
</section>

<section className="bg-white py-20">
    <div className="text-center">
        <h2 className="text-2xl md:text-3xl lg:text-6xl font-light text-purple">We Have Come A Long way</h2>
    </div>

     <div className="flex justify-center py-8">
    <img
      src={House4}
      alt=""
      className="w-[800px] h-[450px] object-cover"
    />
  </div>
  <p className="text-center">Massive thanks to our investors who believed in their dream unit with Light Way Homes - even before they saw it!</p>
</section>

<hr className="border-t-2 border-gray-400 w-4/5 mx-auto" />

<section className="bg-white py-20">
    <div className="text-center">
        <h2 className="text-2xl md:text-3xl lg:text-6xl font-light text-purple">The Longer You Procrastinate, The <br />Faster You Lose Out </h2>
    </div>

     <div className="flex justify-center py-8">
    <img
      src={House2}
      alt=""
      className="w-[800px] h-[450px] object-cover"
    />
  </div>
  <p className="text-center">Book an inspection today. The few units left won't wait for long. Get started below.</p>
</section>

<section className="relative bg-purple text-white rounded-lg overflow-hidden my-12">
        {/* Background image */}
        <img
          src={House2}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />

        {/* Overlay content */}
         <div className="relative flex items-center justify-center gap-6 py-16 px-6">
        <Link
          to="/inspection"
          className="text-5xl font-light hover:underline hover:opacity-90 transition"
        >
          Book Inspection Now!!
        </Link>
      </div>
      </section>


        </>
        
    )
}
export default LandingPage
