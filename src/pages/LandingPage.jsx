import React, { useState, useEffect, useRef } from "react";
import NovaraHero from "../assets/images/novara-hero-home.jpg";
import NaplesHero from "../assets/images/naples-hero-home.jpg";
import RomanHero from "../assets/images/roman-height-home-hero.jpg";
import TneDupelex from "../assets/images/Lightway Hero.jpg"
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

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        fade: true,
        autoplaySpeed: 5000,
    };

    const WHATSAPP_GREEN = '#25D366';

    const FancyInspectionButton = () => {
        return (
            <div className="relative flex items-center justify-center gap-6 py-10 md:py-20 px-4 md:px-6 bg-gradient-to-br from-purple-50 via-white to-blue-50 min-h-[300px] md:min-h-[500px] overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute top-10 left-10 w-40 h-40 md:w-80 md:h-80 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full mix-blend-multiply filter blur-xl md:blur-3xl opacity-60 animate-float-slow"></div>
                <div className="absolute top-20 right-20 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl md:blur-3xl opacity-50 animate-float-medium"></div>
                <div className="absolute bottom-20 left-1/4 w-36 h-36 md:w-72 md:h-72 bg-gradient-to-r from-pink-200 to-blue-200 rounded-full mix-blend-multiply filter blur-xl md:blur-3xl opacity-60 animate-float-fast"></div>
                
                {/* Floating emojis instead of icons */}
                <div className="absolute top-1/4 left-1/4 text-4xl md:text-6xl opacity-30 animate-bounce-slow">🏠</div>
                <div className="absolute top-1/3 right-1/4 text-3xl md:text-4xl opacity-30 animate-bounce-medium">🔒</div>
                <div className="absolute bottom-1/4 left-1/3 text-4xl md:text-5xl opacity-30 animate-bounce-fast">⭐</div>
                
                <Link
                    to="/inspection"
                    className="relative group inline-flex items-center justify-center px-6 py-4 md:px-20 md:py-12 text-xl md:text-5xl font-bold md:font-extrabold text-white bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl md:rounded-4xl shadow-xl md:shadow-2xl hover:shadow-2xl md:hover:shadow-4xl transform hover:scale-105 transition-all duration-500 ease-out hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 overflow-hidden border-2 md:border-4 border-white/30 w-full max-w-xs md:max-w-none mx-4"
                >
                    {/* Animated background shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1500 ease-out"></div>
                    
                    {/* Main button content */}
                    <span className="relative z-10 flex items-center gap-3 md:gap-8 tracking-normal md:tracking-wider text-center justify-center w-full">
                        <span className="text-shadow md:text-shadow-lg bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent text-sm md:text-5xl leading-tight">
                            Book Inspection Now!!
                        </span>
                        <svg 
                            className="w-6 h-6 md:w-12 md:h-12 group-hover:translate-x-1 md:group-hover:translate-x-3 group-hover:scale-110 md:group-hover:scale-125 transition-all duration-300 ease-out flex-shrink-0" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2.5} 
                                d="M13 7l5 5m0 0l-5 5m5-5H6" 
                            />
                        </svg>
                    </span>
                    
                    {/* Outer glow effect */}
                    <div className="absolute inset-0 rounded-2xl md:rounded-4xl bg-gradient-to-r from-blue-400/50 via-purple-400/50 to-pink-400/50 blur-lg md:blur-2xl group-hover:blur-xl md:group-hover:blur-3xl transition-all duration-700 opacity-0 group-hover:opacity-100 -z-10"></div>
                    
                    {/* Pulse ring effect */}
                    <div className="absolute inset-0 rounded-2xl md:rounded-4xl border-2 md:border-4 border-white/40 group-hover:border-white/60 transition-all duration-500 animate-pulse-fast"></div>
                </Link>
            </div>
        );
    };

    return(
        <>
            <Helmet>
                <title>Luxury 4-Bedroom Terrace Duplex + BQ in Arepo | Premium Living</title>
                <meta name="description" content="Own a luxurious 4-bedroom terrace duplex with BQ in Arepo's gated community. Limited units available with flexible payment plans." />
            </Helmet>

            {/* Hero Section with Enhanced Design */}
            <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-purple-900/40 z-10"></div>
                <img 
                    src={TneDupelex} 
                    alt="Luxury 4-Bedroom Terrace Duplex in Arepo" 
                    className="w-full h-full object-cover transform scale-105 hover:scale-100 transition-transform duration-7000 ease-out"
                />
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                    <div className={`text-center text-white px-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                            THE NAPLES ESTATE
                        </h1>
                        <p className="text-2xl md:text-3xl lg:text-4xl font-light mb-8 italic">
                            Luxury Living in Arepo
                        </p>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8 rounded-full"></div>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
                            Premium 4-Bedroom Terrace Duplex + BQ in Exclusive Gated Community
                        </p>
                    </div>
                </div>
                
                {/* Scroll indicator */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>
            </section>

            {/* Main Heading Section */}
            <section className="relative py-20 bg-gradient-to-br from-white via-blue-50 to-purple-50 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50"></div>
                
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text mb-8">
                            Own Your Dream Home Today!
                        </h2>
                        <p className="text-2xl md:text-3xl text-gray-700 font-light italic mb-12">
                            4-Bedroom Terrace Duplex + BQ in Prestigious Arepo
                        </p>
                        
                        {/* Feature badges */}
                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            {["🏠 Gated Community", "🔒 24/7 Security", "🌳 Serene Environment", "🚗 Spacious Parking"].map((feature, index) => (
                                <span 
                                    key={index}
                                    className="px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-lg text-lg font-semibold text-gray-800 hover:scale-105 transition-transform duration-300"
                                >
                                    {feature}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Enhanced Image Gallery Slider */}
            <section className="py-20 bg-gradient-to-b from-white to-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className={`text-center mb-16 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <h3 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
                            Explore Our Premium Properties
                        </h3>
                        <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
                    </div>

                    <div className="relative">
                        <Slider {...settings}>
                            {[House1, House2, House3, House4].map((house, index) => (
                                <div key={index} className="relative group">
                                    <div className="relative h-96 md:h-[600px] lg:h-[700px] overflow-hidden rounded-3xl shadow-2xl">
                                        <img 
                                            src={house} 
                                            alt={`Luxury property ${index + 1}`} 
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                                            <h4 className="text-2xl md:text-3xl font-bold mb-2">Luxury Unit {index + 1}</h4>
                                            <p className="text-lg opacity-90">Experience premium living at its finest</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>

            {/* WhatsApp CTA Section - Enhanced */}
            <section className="py-16 bg-gradient-to-r from-green-50 via-white to-green-50 relative overflow-hidden">
                <div className="absolute inset-0 bg-pattern opacity-5"></div>
                
                <div className="max-w-4xl mx-auto px-6">
                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-green-200 p-12 transform hover:scale-[1.02] transition-transform duration-500">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                            <div className="text-center lg:text-left">
                                <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                                    <span className="text-green-600">Few Units Left.</span> Fully Finished.
                                </h3>
                                <p className="text-xl text-gray-600 mb-2">
                                    Book a free inspection now
                                </p>
                                <p className="text-lg text-gray-500">
                                    or send in your enquiries
                                </p>
                            </div>

                            <a 
                                href="https://wa.me/2348075161213"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative flex items-center space-x-6 bg-gradient-to-r from-green-500 to-green-600 px-12 py-8 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
                            >
                                <div className="relative">
                                    <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
                                    <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg">
                                        <FontAwesomeIcon 
                                            icon={faWhatsapp}
                                            className="text-4xl"
                                            style={{ color: WHATSAPP_GREEN }}
                                        />
                                    </div>
                                </div>
                                
                                <div className="text-white text-center lg:text-left">
                                    <div className="text-2xl font-semibold">Chat on</div>
                                    <div className="text-3xl font-bold">WhatsApp</div>
                                </div>
                                
                                {/* Hover effect */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* First Fancy Button */}
            <FancyInspectionButton />

            {/* Features Section - Enhanced */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow"></div>
                
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                                <img 
                                    src={House4} 
                                    alt="The Naples Estate Luxury Building" 
                                    className="relative w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>

                        <div className="lg:w-1/2">
                            <div className={`transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text mb-8 text-center lg:text-left">
                                    Why Choose The Naples Estate?
                                </h2>
                                
                                <div className="space-y-6">
                                    {features.map((feature, index) => (
                                        <div 
                                            key={index}
                                            className="flex items-start space-x-4 p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
                                        >
                                            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                                                <span className="text-white text-lg font-bold">✓</span>
                                            </div>
                                            <span className="text-lg md:text-xl text-gray-800 font-medium pt-2">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Progress Section - Enhanced */}
            <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
                <div className="absolute -left-20 -top-20 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float-slow"></div>
                
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <div className={`transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text mb-8">
                            We've Come A Long Way
                        </h2>
                        <p className="text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
                            Building dreams and creating lasting legacies in the heart of Arepo
                        </p>

                        <div className="relative group max-w-4xl mx-auto">
                            <div className="absolute -inset-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                            <img
                                src={House4}
                                alt="Our journey and progress"
                                className="relative w-full h-96 object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        
                        <p className="text-xl md:text-2xl text-gray-700 mt-12 font-light italic max-w-3xl mx-auto">
                            Massive thanks to our visionary investors who believed in their dream unit with Light Way Homes - even before they saw it!
                        </p>
                    </div>
                </div>
            </section>

            {/* Urgency Section - Enhanced */}
            <section className="py-20 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 relative overflow-hidden">
                <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse-medium"></div>
                
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <div className={`transform transition-all duration-1000 delay-1100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text mb-8">
                            Time Is Running Out!
                        </h2>
                        <p className="text-3xl md:text-4xl text-gray-800 mb-12 font-semibold">
                            The Longer You Wait, The More You Miss
                        </p>

                        <div className="relative group max-w-4xl mx-auto mb-12">
                            <div className="absolute -inset-6 bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                            <img
                                src={House2}
                                alt="Don't miss this opportunity"
                                className="relative w-full h-96 object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        
                        <p className="text-2xl md:text-3xl text-gray-700 mb-8 font-medium">
                            ⚡ Limited Units Available ⚡
                        </p>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Book your inspection today. These premium units won't wait for long. Secure your dream home before it's too late!
                        </p>
                    </div>
                </div>
            </section>

            {/* Final Fancy Button */}
            <FancyInspectionButton />

            {/* Floating WhatsApp Button - Enhanced */}
            <a 
                href="https://wa.me/2348075161213"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-8 right-8 z-50 group"
                aria-label="Chat with us on WhatsApp"
            >
                <div className="relative">
                    <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
                    <div className="relative bg-white rounded-full p-4 shadow-2xl transform group-hover:scale-110 transition-all duration-300 border-2 border-green-200">
                        <FontAwesomeIcon 
                            icon={faWhatsapp} 
                            className="text-5xl"
                            style={{ color: WHATSAPP_GREEN }}
                        />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-bounce">
                        LIVE
                    </div>
                </div>
            </a>
        </>
    );
}

export default LandingPage;