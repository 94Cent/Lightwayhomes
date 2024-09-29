import React, { useState, useEffect, useRef } from "react";
import NovaraHero from "../assets/images/novara-hero-home.jpg";
import NaplesHero from "../assets/images/naples-hero-home.jpg";
import RomanHero from "../assets/images/roman-height-home-hero.jpg";
import { Helmet } from "react-helmet";
import { Card, CardContent, CardHeader, CardTitle } from "../component/ui/card";
import { Button } from "../component/ui/button";
import { Input } from "../component/ui/input";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// DetailsForm Component
const DetailsForm = ({ project, setIsSubmitted, brochureLink }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef(null);

  // Close form if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setIsSubmitted(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsSubmitted]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone_number", formData.phone);
    data.append("brochure", project);

    try {
      const response = await fetch(
        "https://lightwayhomesltd.com/backend/controller/subscriber.php?action=saveDownloaders",
        {
          method: "POST",
          body: data,
        }
      );

      const result = await response.json();
      if (response.ok) {
        toast.success("Download in progress");
        // Automatically download the brochure after form submission
        window.location.href = brochureLink;
        setIsSubmitted(false); // Close the form on success
      } else {
        toast.error("Error: " + result.message);
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <Card
        ref={formRef}
        className="lg:w-[500px] relative shadow-md md:w-[400px] w-[90vw] text-purple mx-auto py-4 px-0 border-0 rounded-none bg-white"
      >
        <CardHeader>
          <CardTitle className="text-center">Download Brochure</CardTitle>
          <p className="text-center">
            You can download and view the brochure after submission
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-left font-medium mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <Input
                type="text"
                id="name"
                placeholder="Enter Your Name"
                className="w-full border-customLightPurple outline-none py-6"
                value={formData.name}
                onChange={handleChange}
                disabled={isLoading}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-left font-medium mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <Input
                type="email"
                id="email"
                placeholder="Enter Your Email"
                className="w-full border-customLightPurple outline-none py-6"
                value={formData.email}
                onChange={handleChange}
                disabled={isLoading}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-left font-medium mb-2"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <Input
                type="tel"
                id="phone"
                placeholder="Enter Your Phone Number"
                className="w-full border-customLightPurple outline-none py-6"
                value={formData.phone}
                onChange={handleChange}
                disabled={isLoading}
                required
              />
            </div>
            <div className="text-center">
              <Button
                type="submit"
                className="w-full bg-purple text-white py-6"
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Submit"}
              </Button>
            </div>
          </form>
          <button
            className="absolute top-4 right-4 text-gray-600 text-xl"
            onClick={() => setIsSubmitted(false)}
          >
            &times; {/* Close button (X) */}
          </button>
        </CardContent>
      </Card>
    </div>
  );
};

// LandingPage Component
const LandingPage = () => {
  const [activeProject, setActiveProject] = useState(null);

  const handleToggleForm = (projectName) => {
    setActiveProject(projectName === activeProject ? null : projectName);
  };

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
        "Novara Court is a property surrounded by notable landmarks such as: RCCG Camp, Nestlé, Olam Group, International Breweries, and Christopher University. Get your slice of durable Real Estate Investment in Novara Court.",
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

      <section className="mx-auto md:w-9/10 w-4/5 flex flex-col justify-center items-center text-purple">
        <div className="md:w-8/10 w-full flex flex-col justify-center items-center text-center my-12">
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
              <div className="flex md:flex-row flex-col gap-x-12 justify-center items-center py-6">
                <div className="lg:w-1/2 md:w-2/3 w-full md:my-0 my-8">
                  <img src={detail.image} alt="landing details" />
                </div>
                <div className="lg:w-1/2 md:w-2/3 w-full text-purple text-start">
                  <h4 className="font-bold text-2xl">{detail.name}</h4>
                  <p className="my-3.5">{detail.description}</p>
                  <button
                    onClick={() => handleToggleForm(detail.name)}
                    className="text-white bg-purple rounded py-3 bg-gradient-to-r from-purple to-pink-900 font-bold px-4"
                  >
                    {activeProject === detail.name
                      ? "Close Form"
                      : "Download Brochure"}
                  </button>
                </div>
              </div>
              {activeProject === detail.name && (
                <DetailsForm
                  project={detail.name}
                  setIsSubmitted={() => setActiveProject(null)}
                  brochureLink={detail.brochure} // Pass the brochure link to the form
                />
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
