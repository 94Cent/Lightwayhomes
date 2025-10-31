import React, { useState, useEffect, useRef } from "react";
import NovaraHero from "../assets/images/novara-hero-home.jpg";
import NaplesHero from "../assets/images/naples-hero-home.jpg";
import RomanHero from "../assets/images/roman-height-home-hero.jpg";
import LWH from "../assets/images/LWH PORTRAITS.jpg";
import LWH2 from "../assets/images/LWH location.jpg";
import LWH3 from "../assets/images/LWH PLOT.jpg";
import LWH4 from "../assets/images/LWH REASONS.jpg";
import LWH5 from "../assets/images/LWH ALLOCATION.jpg";
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
        "600 SQM: N7,500,000",
        "500 SQM: N6,500,000",
        "300 SQM: N4,500,000",
        "All inclusive price – you pay the quoted amount and nothing hidden",
        "Flexible payment plan from 3 to 24 months + instant allocation to begin building when you’re ready",
        "Build your home near Lagos",
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
          <section className="w-full h-[400px] relative">
  <img 
    src={LWH} 
    alt="4-Bedroom Terrace Duplex" 
    className="w-full h-full object-cover" 
  />
  <div className="absolute inset-0 bg-black opacity-50"></div>

  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 z-10">
    
    <h2 className="
      text-center 
      italic 
      font-light 
      leading-tight
      text-2xl              
      sm:text-3xl           
      md:text-5xl          
      text-white mb-4
    ">
      Own Your Land Near Lagos – Novara Court, Orilemo, Mowe
    </h2>
    
    <p className="
      text-center 
      font-light 
      mb-10
      text-white 
      max-w-md 
      text-4xl               
      sm:text-lg            
      md:text-xl            
    ">
      Immediate allocation | All-inclusive pricing | 300-600 SQM plots in a prime growing location
    </p>

    <Link
  to="/inspection" 
  className="
    text-lg             
    sm:text-xl          
    md:text-2xl         
    font-light 
    hover:opacity-90 
    transition 
    py-3 
    px-6                
    sm:px-8 
    sm:py-4
    border border-solid border-gray-800 rounded-lg 
    bg-purple 
    text-white 
    hover:bg-purple-800
    hover:border-purple-800
    hover:shadow-lg
  "
>
  Book Inspection Now!!
</Link>
  </div>
</section>

       <section className="flex flex-col items-center justify-center px-8 py-12 bg-white rounded-t-xl shadow-lg">
  <div className="w-full justify-center">
    <h2 className="text-purple text-4xl md:text-5xl text-center italic font-light leading-tight">
     Why This Location Matters
    </h2>
  </div>

  <div className="w-full md:w-3/4 lg:w-2/3 mt-8">
    <Slider {...settings}>
      {/** Example of one slide; repeat for other images **/}
      <div className="relative w-full h-80 md:h-96 lg:h-[500px] overflow-hidden">
        <img src={LWH2} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      <div className="relative w-full h-80 md:h-96 lg:h-[500px] overflow-hidden">
        <img src={LWH} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      <div className="relative w-full h-80 md:h-96 lg:h-[500px] overflow-hidden">
        <img src={LWH3} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      <div className="relative w-full h-80 md:h-96 lg:h-[500px] overflow-hidden">
        <img src={LWH4} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
    </Slider>
  </div>
  <p>
        Lagos is expanding fast and apartments are getting more expensive. More families and investors are looking for <br />affordable serviced land near Lagos.
         Novara Court sits in Orilemo, Mowe, a strategic land-investment zone with <br />easy access to Lagos-Ibadan Expressway,notable landmarks like RCCG Camp, 
         Nestlé, Olam Group and more. <br />This location offers value, accessibility and strong future appreciation!

    </p>
</section>

<section className="py-4 lg:py-10 bg-white">
    <hr className="border-t-2 border-gray-300 my-6" />

    <div className="flex flex-col md:flex-row justify-between items-center py-10 max-w-3xl mx-auto">

        <div className="text-4xl sm:text-2xl mb-8 px-6 lg:px-0 md:mb-0">
            <span className="text-purple font-bold">Few units left.</span> Fully -finished. Book <br className="hidden sm:inline"/> 
            a free inspection now or send in <br /> your enquries
        </div>

        <a 
          href="http://wa.me/2348075161213"
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
                        src={LWH3} 
                        alt="The Naples Estate Building" 
                        className="w-full h-96 object-cover rounded-lg shadow-xl" 
                    />
                </div>

                <div className="w-full lg:w-7/12">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 text-purple text-center">
                     Available Plots
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
        <h2 className="text-2xl md:text-3xl lg:text-6xl font-light text-purple">Development Features & Value
</h2>
    </div>

     <div className="flex justify-center py-8">
    <img
      src={House4}
      alt=""
      className="w-[800px] h-[450px] object-cover"
    />
  </div>
  <p className="text-center">This estate features good road networks, perimeter fencing, effective drainage systems,<br /> and more. 
    Ideal for those who want to buy now and build immediately or later. Enjoy the benefits of land ownership in a <br />fast-growing 
    area without waiting for years.
</p>
</section>

<hr className="border-t-2 border-gray-400 w-4/5 mx-auto" />

<section className="bg-white py-20">
    <div className="text-center">
        <h2 className="text-2xl md:text-3xl lg:text-6xl font-light text-purple"> Why It’s the Smart Move
 </h2>
    </div>

     <div className="flex justify-center py-8">
    <img
      src={LWH4}
      alt=""
      className="w-[800px] h-[450px] object-cover"
    />
  </div>
  <p className="text-center">With demand for housing near Lagos increasing and supply in core Lagos areas limited, smart investors are moving <br />ahead of the curve. 
    Land in Mowe/Orilemo is now becoming one of the highest potential growth zones around Lagos. Novara Court gives you an <br />opportunity to secure a high-value asset 
    at an affordable price before the market catches up.
</p>
</section>

<section className="bg-white py-20">
    <div className="text-center">
        <h2 className="text-2xl md:text-3xl lg:text-6xl font-light text-purple">Ready to join our community of landowners at Novara Court?
</h2>
    </div>

     <div className="flex justify-center py-8">
    <img
      src={LWH5}
      alt=""
      className="w-[800px] h-[450px] object-cover"
    />
  </div>
  <p className="text-center">Send in your enquiries to our dedicated Customer Service team on WhatsApp
</p>
</section>

<a 
  href="http://wa.me/2348075161213"
  target="_blank" // Opens the chat in a new tab
  rel="noopener noreferrer"
  className="
    fixed 
    bottom-6 
    right-6 
    bg-white 
    rounded-full 
    p-2 
    shadow-2xl 
    z-50 
    transition-transform 
    duration-300 
    hover:scale-110
  "
  aria-label="Chat with us on WhatsApp"
>
  <FontAwesomeIcon 
    icon={faWhatsapp} 
    className="text-6xl" // Large size for visibility
    style={{ color: WHATSAPP_GREEN }}
  />
</a>


        </>
        
    )
}
export default LandingPage
