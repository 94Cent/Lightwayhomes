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
import Guide from "../assets/images/Guide.jpg"
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
function PdfLandingPage() {

    const features = [
        "The 5 warning signs every land buyer in Lagos and Ogun must know",
        "The smart buyer’s checklist for real estate verification",
        "How to tell if an estate or agent is legit",
        "Expert-recommended steps to secure your land investment",
    ];

    const ebookFeatures = [
        "Verify land titles and documents before paying",
        "Identify fake “developers” and dubious agents",
        "Avoid emotional traps and too-good-to-be-true offers",
        "Work with verified real estate companies only",
        "Protect your money before you sign anything",
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

        const scrollToForm = () => {
            const formSection = document.getElementById("form-section");
            if(formSection) {
                formSection.scrollIntoView({behavior: "smooth"})
            }
        }

    return(
        <>
          <section className="w-full h-[700px] relative sm:h-[400px]">
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
      text-5xl              
      sm:text-3xl           
      md:text-5xl          
      text-white mb-4
    ">
      Don’t Lose Your Money to Fake Land Deals. Learn How to Spot the Scams Before You Buy.

    </h2>
    
    <p className="
      text-center 
      font-light 
      mb-10
      text-white 
      max-w-md 
      text-xl               
      sm:text-lg            
      md:text-xl            
    ">
      Download our free guide “Before You Buy Land: 5 Signs of a Scam and How to Avoid Them” — your step-by-step manual to buying land safely in Nigeria.

    </p>

    <button
  onClick={() => {
    const formSection = document.getElementById('form-section');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  }}
  className="
    text-lg sm:text-xl md:text-2xl font-light 
    hover:opacity-90 transition py-3 px-6 sm:px-8 sm:py-4
    border border-solid border-gray-800 rounded-lg 
    bg-purple text-white hover:bg-purple-800
    hover:border-purple-800 hover:shadow-lg
  "
>
  Get Our Free Guide
</button>

  </div>
</section>

       <section className="flex flex-col items-center justify-center px-8 py-12 bg-white rounded-t-xl shadow-lg">
  <div className="w-full justify-center">
    <h2 className="text-purple text-4xl md:text-5xl text-center italic font-light leading-tight">
    The Truth Is: Real Estate Scams Are on the Rise!

    </h2>
  </div>

  <div className="w-full md:w-3/4 lg:w-2/3 mt-8">
    <Slider {...settings}>
      {/** Example of one slide; repeat for other images **/}
      <div className="relative w-full h-80 md:h-96 lg:h-[500px] overflow-hidden">
        <img src={Guide} alt="" className="w-full h-full object-cover" />
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
        Every year, thousands of Nigerians lose millions of naira to fake land agents, double sales, and illegal estate developers. <br />Whether you’re a first-time buyer or a returning investor, one mistake can cost you everything.

    </p>

    <ul className="space-y-2 text-gray-700 text-lg md:text-xl py-5">
                    {ebookFeatures.map((feature, index) =>(
                        <li key={index} className="flex items-start">
                            <span className="mr-3 mt-3 inline-block w-2 h-2 bg-black flex-shrink-0"></span>
                            {feature}
                        </li>
                    ))}
                  </ul>
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
                     What’s Inside the eBook

                  </h2>

                  <ul className="space-y-2 text-gray-700 text-lg md:text-xl mb-10">
                    {features.map((feature, index) =>(
                        <li key={index} className="flex items-start">
                            <span className="mr-3 mt-3 inline-block w-2 h-2 bg-black flex-shrink-0"></span>
                            {feature}
                        </li>
                    ))}
                  </ul>

                   <button
  onClick={() => {
    const formSection = document.getElementById('form-section');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  }}
  className="
    text-lg sm:text-xl md:text-2xl font-light 
    hover:opacity-90 transition py-3 px-6 sm:px-8 sm:py-4
    border border-solid border-gray-800 rounded-lg 
    bg-purple text-white hover:bg-purple-800
    hover:border-purple-800 hover:shadow-lg
  "
>
  Download the Free eBook Now
</button>
                </div>
            </div>
</section>

<section className="bg-white py-20">
    <div className="text-center">
        <h2 className="text-2xl md:text-3xl lg:text-6xl font-light text-purple">Trusted Real Estate Experts Helping Nigerians Invest Safely

</h2>
    </div>

     <div className="flex justify-center py-8">
    <img
      src={House4}
      alt=""
      className="w-[800px] h-[450px] object-cover"
    />
  </div>
  <p className="text-center">At Light Way Homes, we’ve helped dozens of clients secure verified properties in Nigeria without falling into common traps. Our mission is to make land ownership safe, transparent and rewarding for every buyer.  <br /> 
  We created this guide to empower you with the same insider knowledge we use to protect our clients every day.


</p>
</section>

<hr className="border-t-2 border-gray-400 w-4/5 mx-auto" />

<section className="bg-white py-20">
    <div className="text-center">
        <h2 className="text-2xl md:text-3xl lg:text-6xl font-light text-purple"> Join Our Community of Property Owners Who Have Invested Safely

 </h2>
    </div>

     <div className="flex justify-center py-8">
    <img
      src={LWH5}
      alt=""
      className="w-[800px] h-[450px] object-cover"
    />
  </div>
  <p className="text-center mb-3">Equipped with knowledge and guidance from us, they learned the truth about fake land deals. Now, they’re proud landowners with peace of mind.

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

<section
  id="form-section"
  className="py-20 bg-white flex flex-col items-center justify-center"
>
  <h2 className="text-3xl font-semibold mb-6 text-gray-800 text-center">
    Download the Free Guide
  </h2>
  <p className="text-gray-600 text-center mb-8 max-w-md">
    Fill in your details below to get instant access to our free guide on safe
    land buying.
  </p>

  <form className="w-full max-w-lg space-y-6 px-4">
    {/* FIRST + LAST NAME (same line on desktop/tablet) */}
    <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
      <div className="flex-1">
        <label
          htmlFor="firstName"
          className="block text-gray-700 text-sm font-medium mb-1"
        >
          First Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          required
          placeholder="Enter your first name"
          className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div className="flex-1">
        <label
          htmlFor="lastName"
          className="block text-gray-700 text-sm font-medium mb-1"
        >
          Last Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          required
          placeholder="Enter your last name"
          className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
    </div>

    {/* EMAIL ADDRESS */}
    <div>
      <label
        htmlFor="email"
        className="block text-gray-700 text-sm font-medium mb-1"
      >
        Email Address <span className="text-red-500">*</span>
      </label>
      <input
        type="email"
        id="email"
        name="email"
        required
        placeholder="Enter your email address"
        className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
    </div>

    {/* PHONE NUMBER */}
    <div>
      <label
        htmlFor="phone"
        className="block text-gray-700 text-sm font-medium mb-1"
      >
        Phone Number (optional)
      </label>
      <input
        type="tel"
        id="phone"
        name="phone"
        placeholder="Enter your phone number"
        className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
    </div>

    {/* BUTTON */}
    <button
      type="submit"
      className="w-full bg-purple-700 text-white py-3 rounded-md text-lg font-medium hover:bg-purple-800 transition"
    >
      Send My Copy
    </button>
  </form>
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
export default PdfLandingPage
