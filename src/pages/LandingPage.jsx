import React from "react";
import NovaraHero from "../assets/images/novara-hero-home.jpg";
import NaplesHero from "../assets/images/naples-hero-home.jpg";
import RomanHero from "../assets/images/roman-height-home-hero.jpg";
import { Helmet } from "react-helmet";
const LandingPage = () => {
  const projectDetails = [
    {
      name: "The Naples Estate",
      image: NaplesHero,
      description:
        "Situated at the heart of urban development, this property is positioned for remarkable, exponential growth! Don’t miss out on the opportunity to invest in The Naples Estate, Arepo.",
      brochure:
        "https://drive.google.com/uc?export=download&id=1NtaVSxyfRdPtAKjBNY2lKkgokhUXj0UA",
    },
    {
      name: "Novara Court",
      image: NovaraHero,
      description:
        "Novara Court is a property surrounded by notable landmarks such as: RCCG Camp, Nestlé, Olam Group, International Breweries, and Christopher University. et your slice of durable Real Estate Investment in Novara Court.",
      brochure:
        "https://drive.google.com/uc?export=download&id=1NuDXFSE4F6oUYPLM7umzXMCceCsAzbxN",
    },
    {
      name: "Roman Heights",
      image: RomanHero,
      description:
        "Roman Heights is a project of Light Way Homes comprising just apartment buildings. Download this property brochure to find out more about the building plan.",
      brochure:
        "https://drive.google.com/uc?export=download&id=17D1th1yfBVSK6j7XxsABek-04OevB-Qo",
    },
  ];
  return (
    <div>
      <Helmet>
        <title>Light Way Homes</title>
        <meta
          name="description"
          content="Discover the amazing projects we have worked on."
        />
      </Helmet>
      <section className="mx-24 md:w-9/10 w-4/5 flex flex-col justify-center items-center text-purple">
        <div className="md:w-8/10 flex flex-col justify-center items-center text-center my-12">
          <h2 className="font-semibold text-4xl">Property Brochures</h2>
          <p className="my-4 mx-auto md:w-[600px] w-9/10 text-center">
            At Light Way Homes, we have multiple real estate investment options
            for you. Download any of the brochures for all the information you
            need about our properties.
          </p>
        </div>
        <div className="w-full text-center">
          {projectDetails.map((detail, index) => (
            <div key={index} className="w-9/10 my-16 border-purple border-t-2">
              <div className="flex gap-x-12 justify-center items-center py-6">
                <div className="w-1/2">
                  <img src={detail.image} alt="landing details" />
                </div>
                <div className="w-1/2 text-purple text-start">
                  <h4 className="font-bold text-2xl">{detail.name}</h4>
                  <p className="my-3.5">{detail.description}</p>
                  <button className="text-white bg-purple rounded py-3 bg-gradient-to-r from-purple to-pink-900 font-bold px-4">
                    Download Brochure
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
