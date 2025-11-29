import React from "react";
import { Link } from "react-router-dom";

function SuccessPage() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-8"
             style={{
                 background: "white",
                 color: 'white',
                 textAlign: 'center',
                 fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
             }}>
            <div className="thank-you-box bg-black/60 p-8 md:p-10 rounded-2xl max-w-2xl w-full shadow-2xl">
                <div className="flex justify-center mb-6">
                    <i className="fas fa-check-circle text-5xl" style={{ color: '#28a745' }}></i>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-purple-400">
                    Thank You!
                </h1>
                <p className="text-lg md:text-xl mb-8 leading-relaxed">
                    Your inspection request has been successfully submitted. <br />
                    We'll get back to you as soon as possible to confirm your appointment.
                </p>
                <Link 
                    to="/"
                    className="inline-block bg-purple-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
}

export default SuccessPage;