import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faDownload, faTimes } from '@fortawesome/free-solid-svg-icons';

// Import images with error handling
const images = {
  hero: require("../assets/images/LWH PLOT2.jpg"),
  guide: require("../assets/images/Guide.jpg"),
  allocation: require("../assets/images/LWH ALLOCATION.jpg"),
  plot: require("../assets/images/LWH PLOT.jpg")
};

// PDF file path
const PDF_FILE = "../assets/images/dontgetscammed.pdf";

function PdfLandingPage() {
    const [isVisible, setIsVisible] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        // Simulate images loading
        setTimeout(() => setImagesLoaded(true), 500);
    }, []);

    const features = [
        "The 5 warning signs every land buyer in Lagos and Ogun must know",
        "The smart buyer's checklist for real estate verification",
        "How to tell if an estate or agent is legit",
        "Expert-recommended steps to secure your land investment",
    ];

    const ebookFeatures = [
        "Verify land titles and documents before paying",
        "Identify fake 'developers' and dubious agents",
        "Avoid emotional traps and too-good-to-be-true offers",
        "Work with verified real estate companies only",
        "Protect your money before you sign anything",
    ];

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

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(e.target);
        const data = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            phone: formData.get('phone')
        };

        try {
            // Submit to FormSubmit
            const formSubmitResponse = await fetch("https://formsubmit.co/ajax/info.lightwayhomesltd@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    ...data,
                    _subject: "New eBook Download Request",
                    _template: "table",
                    _autoresponse: `Thank you for downloading our eBook! You can also access it directly here: ${window.location.origin}/assets/images/dontgetscammed.pdf`
                })
            });

            if (formSubmitResponse.ok) {
                // Show success message
                toast.success("Thank you! Your eBook is downloading...");
                
                // Download the PDF
                const link = document.createElement('a');
                link.href = PDF_FILE;
                link.download = 'dontgetscammed.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                
                // Close modal
                setShowModal(false);
                
                // Redirect to homepage after 3 seconds
                setTimeout(() => {
                    window.location.href = "/";
                }, 5000);
                
            } else {
                throw new Error('Form submission failed');
            }
            
        } catch (error) {
            console.error('Error:', error);
            // Fallback: direct download even if form submission fails
            toast.success("Thank you! Downloading your eBook now...");
            
            const link = document.createElement('a');
            link.href = PDF_FILE;
            link.download = 'dontgetscammed.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            setShowModal(false);
            
            setTimeout(() => {
                window.location.href = "/";
            }, 3000);
        }
    };

    const DownloadButton = ({ size = "medium" }) => {
        const sizes = {
            small: "px-6 py-3 text-base",
            medium: "px-8 py-4 text-lg",
            large: "px-12 py-6 text-xl"
        };

        return (
            <button
                onClick={openModal}
                className={`inline-flex items-center ${sizes[size]} font-semibold text-purple bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-white/30 hover:border-white/50`}
            >
                <FontAwesomeIcon icon={faDownload} className="mr-3" />
                Download the Free eBook Now
            </button>
        );
    };

    const Modal = () => {
        if (!showModal) return null;

        return (
            <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-2xl max-w-md w-full p-8 relative transform transition-all duration-300 scale-100">
                    <button 
                        onClick={closeModal}
                        className="absolute top-4 right-4 text-gray-500 hover:text-purple-600 transition-colors"
                    >
                        <FontAwesomeIcon icon={faTimes} size="lg" />
                    </button>
                    
                    <h3 className="text-2xl font-bold text-purple-800 mb-2 text-center">
                        Get Your Free eBook
                    </h3>
                    <p className="text-gray-600 text-center mb-6">
                        Fill in your details to download instantly
                    </p>

                    <form 
                        onSubmit={handleFormSubmit}
                        className="space-y-4"
                    >
                        <input type="hidden" name="_subject" value="New eBook Download Request" />
                        <input type="hidden" name="_captcha" value="false" />
                        
                        <div className="flex space-x-4">
                            <div className="flex-1">
                                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                                    First Name *
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    required
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    placeholder="First Name"
                                />
                            </div>
                            <div className="flex-1">
                                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                                    Last Name *
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    required
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    placeholder="Last Name"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email Address *
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                placeholder="your@email.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                Phone Number (Optional)
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                placeholder="Your phone number"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-purple-700 text-purple py-4 rounded-lg font-semibold hover:bg-purple-800 transition-colors duration-300"
                        >
                            Download My Free Copy
                        </button>
                    </form>
                </div>
            </div>
        );
    };

    return (
        <>
            <Helmet>
                <title>Free eBook: Avoid Land Scams in Nigeria | Light Way Homes</title>
                <meta name="description" content="Download our free guide to avoid real estate scams in Lagos and Ogun. Learn how to verify land, spot fake agents, and invest safely." />
            </Helmet>

            {/* Hero Section */}
            <section className="relative w-full h-screen min-h-[600px] overflow-hidden bg-purple-900">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-purple-700/60 z-10"></div>
                <div className="absolute inset-0 bg-purple-800 flex items-center justify-center z-0">
                    <div className="text-white text-center">
                        <p>Loading...</p>
                    </div>
                </div>
                <img 
                    src={images.hero}
                    alt="Secure Land Investment in Nigeria" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        e.target.style.display = 'none';
                    }}
                />
                <div className="absolute inset-0 z-20 flex items-center justify-center px-6">
                    <div className={`text-center text-white max-w-4xl transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Don't Lose Your Money to Fake Land Deals
                        </h1>
                        <p className="text-xl md:text-2xl mb-8">
                            Get our free guide and learn how to spot scams before you buy land in Nigeria
                        </p>
                        <DownloadButton size="large" />
                    </div>
                </div>
            </section>

            {/* Problem Section */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-purple-800 mb-6">
                            Real Estate Scams Are Rising in Nigeria
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Every year, thousands of Nigerians lose millions to fake agents, double sales, and illegal developers. 
                            One mistake can cost you everything.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative group min-h-[300px] bg-purple-100 rounded-2xl flex items-center justify-center">
                            <img 
                                src={images.guide}
                                alt="Land Verification Guide" 
                                className="rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500 max-w-full"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.parentElement.innerHTML = '<div class="text-purple-600 text-center p-8"><p class="text-xl font-semibold">Land Verification Guide</p><p class="text-lg mt-2">Essential tips for safe land investment</p></div>';
                                }}
                            />
                        </div>
                        
                        <div>
                            <h3 className="text-3xl font-bold text-purple-700 mb-6">
                                What You'll Learn in This Free Guide:
                            </h3>
                            <div className="space-y-4">
                                {ebookFeatures.map((feature, index) => (
                                    <div key={index} className="flex items-start space-x-4 p-4 bg-purple-50 rounded-xl">
                                        <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                                            <span className="text-white text-sm font-bold">✓</span>
                                        </div>
                                        <span className="text-gray-800 font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8">
                                <DownloadButton size="medium" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-purple-50">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-purple-800 mb-6">
                            Inside Your Free eBook
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-purple-100 transform hover:scale-105 transition-transform duration-300">
                                <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full flex items-center justify-center">
                                        <span className="text-white font-bold">{index + 1}</span>
                                    </div>
                                    <p className="text-lg font-medium text-gray-800">{feature}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <DownloadButton size="large" />
                    </div>
                </div>
            </section>

            {/* Trust Section */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-purple-800 mb-6">
                        Trusted Real Estate Experts
                    </h2>
                    <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
                        At Light Way Homes, we've helped dozens of clients secure verified properties without falling into common traps. 
                        This guide contains the same insider knowledge we use to protect our clients.
                    </p>
                    
                    <div className="relative max-w-4xl mx-auto mb-12 min-h-[400px] bg-purple-100 rounded-2xl flex items-center justify-center">
                        <img
                            src={images.allocation}
                            alt="Successful Land Owners"
                            className="rounded-2xl shadow-2xl max-w-full"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.parentElement.innerHTML = '<div class="text-purple-600 p-8"><p class="text-2xl font-semibold">Our Happy Clients</p><p class="text-lg mt-2">Dozens of successful land acquisitions</p></div>';
                            }}
                        />
                    </div>

                    <DownloadButton size="medium" />
                </div>
            </section>
            
            {/* WhatsApp CTA */}
            <section className="py-16 bg-white border-t border-purple-100">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <div className="bg-purple-50 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-purple-800 mb-4">
                            Need Immediate Assistance?
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Chat with our real estate experts on WhatsApp
                        </p>
                        <a 
                            href="https://wa.me/2348075161213"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-600 transition-colors duration-300"
                        >
                            <FontAwesomeIcon icon={faWhatsapp} className="mr-3 text-2xl" />
                            Chat on WhatsApp
                        </a>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-20 bg-gradient-to-br from-purple-600 to-purple-800 text-Purple">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Ready to Invest With Confidence?
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                        Download your free guide now and avoid costly mistakes in your land investment journey.
                    </p>
                    <DownloadButton size="large" />
                </div>
            </section>

            {/* Modal */}
            <Modal />

            {/* Floating WhatsApp Button */}
            <a 
                href="https://wa.me/2348075161213"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-8 right-8 z-40 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-colors duration-300"
            >
                <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            </a>
        </>
    );
}

export default PdfLandingPage;