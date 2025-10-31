import React, { useState, useEffect } from "react";
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
        "Flexible payment plan from 3 to 24 months + instant allocation to begin building when you're ready",
        "Build your home near Lagos",
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
            <div className="relative flex items-center justify-center gap-6 py-10 md:py-20 px-4 md:px-6 bg-gradient-to-br from-green-50 via-white to-blue-50 min-h-[300px] md:min-h-[500px] overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute top-10 left-10 w-40 h-40 md:w-80 md:h-80 bg-gradient-to-r from-green-200 to-blue-200 rounded-full mix-blend-multiply filter blur-xl md:blur-3xl opacity-60 animate-float-slow"></div>
                <div className="absolute top-20 right-20 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full mix-blend-multiply filter blur-xl md:blur-3xl opacity-50 animate-float-medium"></div>
                <div className="absolute bottom-20 left-1/4 w-36 h-36 md:w-72 md:h-72 bg-gradient-to-r from-purple-200 to-green-200 rounded-full mix-blend-multiply filter blur-xl md:blur-3xl opacity-60 animate-float-fast"></div>
                
                {/* Floating emojis */}
                <div className="absolute top-1/4 left-1/4 text-4xl md:text-6xl opacity-30 animate-bounce-slow">🏡</div>
                <div className="absolute top-1/3 right-1/4 text-3xl md:text-4xl opacity-30 animate-bounce-medium">📈</div>
                <div className="absolute bottom-1/4 left-1/3 text-4xl md:text-5xl opacity-30 animate-bounce-fast">💰</div>
                
                <Link
                    to="/inspection"
                    className="relative group inline-flex items-center justify-center px-6 py-4 md:px-20 md:py-12 text-lg md:text-5xl font-bold md:font-extrabold text-white bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 rounded-2xl md:rounded-4xl shadow-xl md:shadow-2xl hover:shadow-2xl md:hover:shadow-4xl transform hover:scale-105 transition-all duration-500 ease-out hover:from-green-700 hover:via-blue-700 hover:to-purple-700 overflow-hidden border-2 md:border-4 border-white/30 w-full max-w-xs md:max-w-none mx-4"
                >
                    {/* Animated background shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1500 ease-out"></div>
                    
                    {/* Main button content */}
                    <span className="relative z-10 flex items-center gap-3 md:gap-8 tracking-normal md:tracking-wider text-center justify-center w-full">
                        <span className="text-shadow md:text-shadow-lg bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent text-base md:text-5xl leading-tight">
                            Book Inspection Now!!
                        </span>
                        <svg 
                            className="w-5 h-5 md:w-12 md:h-12 group-hover:translate-x-1 md:group-hover:translate-x-3 group-hover:scale-110 md:group-hover:scale-125 transition-all duration-300 ease-out flex-shrink-0" 
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
                    <div className="absolute inset-0 rounded-2xl md:rounded-4xl bg-gradient-to-r from-green-400/50 via-blue-400/50 to-purple-400/50 blur-lg md:blur-2xl group-hover:blur-xl md:group-hover:blur-3xl transition-all duration-700 opacity-0 group-hover:opacity-100 -z-10"></div>
                    
                    {/* Pulse ring effect */}
                    <div className="absolute inset-0 rounded-2xl md:rounded-4xl border-2 md:border-4 border-white/40 group-hover:border-white/60 transition-all duration-500 animate-pulse-fast"></div>
                </Link>
            </div>
        );
    };

    return(
        <>
            <Helmet>
                <title>Novara Court - Own Your Land Near Lagos | Prime Plots in Orilemo, Mowe</title>
                <meta name="description" content="Secure your plot at Novara Court, Orilemo, Mowe. All-inclusive pricing, flexible payment plans, and immediate allocation near Lagos." />
            </Helmet>

            {/* Enhanced Hero Section */}
<section className="relative w-full h-screen min-h-[600px] overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-purple-900/50 z-10"></div>
    <img 
        src={LWH} 
        alt="Novara Court Land Development - Prime Plots Near Lagos" 
        className="w-full h-full object-cover transform scale-105 hover:scale-100 transition-transform duration-7000 ease-out"
    />
    <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className={`text-center text-white px-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-green-100 to-blue-100 bg-clip-text text-transparent">
                NOVARA COURT
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-light mb-8 italic">
                Own Your Land Near Lagos
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mb-8 md:mb-12">
                Immediate allocation | All-inclusive pricing | 300-600 SQM plots in Orilemo, Mowe
            </p>
            
            <Link
                to="/inspection" 
                className="inline-flex items-center px-6 py-3 md:px-12 md:py-6 text-base md:text-xl lg:text-2xl font-semibold text-white bg-gradient-to-r from-green-600 to-blue-600 rounded-xl md:rounded-2xl shadow-lg md:shadow-2xl hover:shadow-xl md:hover:shadow-3xl transform hover:scale-105 transition-all duration-300 border-2 border-white/30 hover:border-white/50 mx-4 md:mx-0"
            >
                Book Inspection Now!!
                <svg className="w-4 h-4 md:w-6 md:h-6 ml-2 md:ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
            </Link>
        </div>
    </div>
    
    {/* Scroll indicator */}
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
    </div>
</section>

            {/* Why Location Matters Section */}
            <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-green-50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-50"></div>
                
                <div className="max-w-7xl mx-auto px-6">
                    <div className={`text-center mb-16 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text mb-8">
                            Why This Location Matters
                        </h2>
                        <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto rounded-full mb-12"></div>
                    </div>

                    <div className="relative mb-16">
                        <Slider {...settings}>
                            {[LWH2, LWH, LWH3, LWH4].map((image, index) => (
                                <div key={index} className="relative group">
                                    <div className="relative h-96 md:h-[600px] lg:h-[700px] overflow-hidden rounded-3xl shadow-2xl">
                                        <img 
                                            src={image} 
                                            alt={`Novara Court location feature ${index + 1}`} 
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>

                    <div className={`max-w-4xl mx-auto text-center transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200">
                            Lagos is expanding fast and apartments are getting more expensive. More families and investors are looking for affordable serviced land near Lagos. 
                            Novara Court sits in Orilemo, Mowe, a strategic land-investment zone with easy access to Lagos-Ibadan Expressway, notable landmarks like RCCG Camp, 
                            Nestlé, Olam Group and more. This location offers value, accessibility and strong future appreciation!
                        </p>
                    </div>
                </div>
            </section>

            {/* WhatsApp CTA Section - Enhanced */}
            <section className="py-16 bg-gradient-to-r from-green-50 via-white to-blue-50 relative overflow-hidden">
                <div className="absolute inset-0 bg-pattern opacity-5"></div>
                
                <div className="max-w-4xl mx-auto px-6">
                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-green-200 p-12 transform hover:scale-[1.02] transition-transform duration-500">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                            <div className="text-center lg:text-left">
                                <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                                    <span className="text-green-600">Prime Plots Available.</span> Limited Units.
                                </h3>
                                <p className="text-xl text-gray-600 mb-2">
                                    Book a free site inspection now
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

            {/* Available Plots Section */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow"></div>
                
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                                <img 
                                    src={LWH3} 
                                    alt="Novara Court Available Plots" 
                                    className="relative w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>

                        <div className="lg:w-1/2">
                            <div className={`transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text mb-8 text-center lg:text-left">
                                    Available Plots
                                </h2>
                                
                                <div className="space-y-6">
                                    {features.map((feature, index) => (
                                        <div 
                                            key={index}
                                            className="flex items-start space-x-4 p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
                                        >
                                            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
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

            {/* Development Features Section */}
            <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50 relative overflow-hidden">
                <div className="absolute -left-20 -top-20 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float-slow"></div>
                
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <div className={`transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-gradient-to-r from-blue-600 via-green-600 to-purple-600 bg-clip-text mb-8">
                            Development Features & Value
                        </h2>

                        <div className="relative group max-w-4xl mx-auto mb-12">
                            <div className="absolute -inset-6 bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                            <img
                                src={House4}
                                alt="Novara Court Development Features"
                                className="relative w-full h-96 object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        
                        <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200">
                            This estate features good road networks, perimeter fencing, effective drainage systems, and more. 
                            Ideal for those who want to buy now and build immediately or later. Enjoy the benefits of land ownership in a fast-growing 
                            area without waiting for years.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why It's Smart Move Section */}
            <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50 relative overflow-hidden">
                <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse-medium"></div>
                
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <div className={`transform transition-all duration-1000 delay-1100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 bg-clip-text mb-8">
                            Why It's the Smart Move
                        </h2>

                        <div className="relative group max-w-4xl mx-auto mb-12">
                            <div className="absolute -inset-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                            <img
                                src={LWH4}
                                alt="Smart Investment Opportunity"
                                className="relative w-full h-96 object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        
                        <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200">
                            With demand for housing near Lagos increasing and supply in core Lagos areas limited, smart investors are moving ahead of the curve. 
                            Land in Mowe/Orilemo is now becoming one of the highest potential growth zones around Lagos. Novara Court gives you an opportunity to secure a high-value asset 
                            at an affordable price before the market catches up.
                        </p>
                    </div>
                </div>
            </section>

            {/* Join Community Section */}
            <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50 relative overflow-hidden">
                <div className="absolute -left-20 -top-20 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float-medium"></div>
                
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <div className={`transform transition-all duration-1000 delay-1300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text mb-8">
                            Ready to Join Our Community?
                        </h2>
                        <p className="text-2xl md:text-3xl text-gray-600 mb-12 max-w-4xl mx-auto">
                            Become a landowner at Novara Court today!
                        </p>

                        <div className="relative group max-w-4xl mx-auto mb-12">
                            <div className="absolute -inset-6 bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                            <img
                                src={LWH5}
                                alt="Join Novara Court Community"
                                className="relative w-full h-96 object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        
                        <p className="text-xl md:text-2xl text-gray-700 mb-8 font-medium">
                            Send in your enquiries to our dedicated Customer Service team on WhatsApp
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