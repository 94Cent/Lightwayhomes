import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WelcomeSection from "../components/home/WelcomeSection";
import Projects from "../components/home/Project";
import Channels from "../components/home/Channels";
import HeroCarousel from "components/home/HeroSection";
import Header from "components/header/Header";
import SaveProject from "components/SaveProject";

function Home() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch(
          "https://backend.lightway.com.ng/controller/quote.php?action=getquote"
        );
        const data = await response.json();
        if (response.ok) {
          setQuote(data.quote);
        } else {
          // toast.error(`Failed to fetch quote: ${data.message}`, {
          //   position: "top-right",
          //   autoClose: 5000,
          //   hideProgressBar: false,
          //   closeOnClick: true,
          //   pauseOnHover: true,
          //   draggable: true,
          //   progress: undefined,
          // });
        }
      } catch (error) {
        // toast.error("Error during fetching quote!", {
        //   position: "top-right",
        //   autoClose: 5000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        // });
      }
    };

    fetchQuote();

    const intervalId = setInterval(fetchQuote, 10000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div>
      <ToastContainer />
      <HeroCarousel />
      <section className="py-8 bg-white">
        <div className="container px-0 mx-auto">
          <p className="text-2xl font-semibold text-purple my-2 text-center">
            Today's Take away
          </p>
          <blockquote className="text-center italic text-purple text-xl md:w-3/4 w-[90%] mx-auto">
            "{quote}"
          </blockquote>
        </div>
      </section>
      <WelcomeSection />
      <Projects />
      <Channels />
    </div>
  );
}

export default Home;
