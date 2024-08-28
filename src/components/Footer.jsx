import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import ChatHero from "../assets/images/chat-footer.png";
import ChatHeroSm from "../assets/images/chat-footer-sm.png";
import Logo from "../assets/images/logo-sm.png";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    // Create a FormData object
    const formData = new FormData();
    formData.append("email", email);

    try {
      const response = await fetch(
        "https://lightwayhomesltd.com/backend/controller/subscriber.php?action=save_subscriber",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();
      setLoading(false);
      if (response.ok) {
        toast.success("Subscription successful!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.error(`Subscription failed: ${result.message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      toast.error("Error during subscription process!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log(error, "error");
      setLoading(false);
    }
  };
  const downloadFiles = () => {
    const links = [
        'https://drive.google.com/uc?export=download&id=1NuDXFSE4F6oUYPLM7umzXMCceCsAzbxN',
        'https://drive.google.com/uc?export=download&id=1NtaVSxyfRdPtAKjBNY2lKkgokhUXj0UA',
        'https://drive.google.com/uc?export=download&id=17D1th1yfBVSK6j7XxsABek-04OevB-Qo'
    ];

    const downloadFile = (link) => {
        return new Promise((resolve) => {
            const a = document.createElement('a');
            a.href = link;
            a.download = '';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            setTimeout(() => resolve(), 10000); // Ensure enough time for each download to initiate
        });
    };

    (async () => {
        for (const link of links) {
            await downloadFile(link);
        }
    })();
};

  return (
    <footer className="bg-purple text-white md:py-12 py-4">
      <ToastContainer />
      <div className="mx-auto">
        <div className="mb-8 md:px-6 px-3">
          <h3 className="md:text-xl text-lg font-normal">
            Get Update And Stay Connected - Subscribe To Our Newsletter
          </h3>
          <div className="flex md:flex-row flex-col justify-between">
            <div className="flex md:flex-row flex-col md:gap-x-6 gap-y-4 mt-8">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
                className="py-4 px-6 rounded-l md:w-96 w-full h-14 outline-none bg-transparent border border-white text-white placeholder:text-white"
              />
              <button
                className="px-6 md:w-44 w-full py-4 h-14 bg-white text-purple font-semibold"
                disabled={loading}
                onClick={handleSubmit}
              >
                {loading ? "Loading..." : "Subscribe"}
              </button>
            </div>
            <div className="text-center md:text-left lg:block hidden">
              <img src={Logo} alt="logo" />
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-6 md:mb-2 mb-8 mt-12">
          <a
            href="https://www.youtube.com/@LightWay_Homes"
            className="text-white"
          >
            <FontAwesomeIcon icon={faYoutube} size="1x" className="size-6" />
          </a>
          <a
            href="https://web.facebook.com/investproperty.int"
            className="text-white"
          >
            <FontAwesomeIcon icon={faFacebook} size="1x" className="size-6" />
          </a>
          <a href="/" className="text-white">
            <FontAwesomeIcon icon={faTwitter} size="1x" className="size-6" />
          </a>
          <a
            href="https://www.linkedin.com/company/light-way-homes-and-investment/"
            className="text-white"
          >
            <FontAwesomeIcon icon={faLinkedin} size="1x" className="size-6" />
          </a>
        </div>
        <div className="absolute lg:right-20 md:right-8 right-2 md:-mt-20 mt-[560px] z-50">
          <a href="http://wa.link/a7jepo">
          <img
            src={ChatHero}
            alt="chat"
            className="lg:h-24 lg:max-w-96 h-16 max-w-64 md:block hidden"
          />
          <img
            src={ChatHeroSm}
            alt="chat"
            className="h-12 max-w-64 md:hidden block"
          />
          </a>
        </div>
        <div className="w-full flex flex-wrap justify-between gap-8 text-left border-white border-t md:px-6 px-3 py-8">
          <div>
            <h4 className="md:text-xl text-lg font-normal md:mb-4 mb-2">
              Our Office
            </h4>
            <p className="md:w-96">
              No. 4, Oyewo close, Clay Busstop, Juli Estate, off Kudirat Abiola
              way, Oregun, Ikeja Lagos
            </p>
            <h4 className="md:text-xl text-lg font-normal mt-4 md:mb-3 mb-2">
              Our Email
            </h4>
            <p>info@lightwayhomesltd.com </p>
            <p>lwh.investment@gmail.com</p>
            <h4 className="md:text-xl text-lg font-normal mt-4 md:mb-3 mb-2">
              Our Phone Numbers
            </h4>
            <p>+2348038034077</p>
            <p>+2348075161213</p>
          </div>
          <div className="md:w-1/2 w-full flex md:justify-between gap-x-12 text-left">
            <div>
              <h4 className="md:text-xl text-lg font-normal md:mb-4 mb-2">
                Quick Links
              </h4>
              <ul className="space-y-2 text-[15px]">
                <li>
                  <Link to="/about" className="hover:text-gray-300">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-gray-300">
                    Contacts
                  </Link>
                </li>
                <li>
                  <Link to="/projects/The-Novara-Courts" className="hover:text-gray-300">
                    Serviced Plot
                  </Link>
                </li>
                <li>
                  <Link to="/projects/The-Naples" className="hover:text-gray-300">
                    Serviced Apartment
                  </Link>
                </li>
                <li>
                  <Link to="/career" className="hover:text-gray-300">
                    Become A Realtor
                  </Link>
                </li>
                <li>
                  <p onClick={downloadFiles} className="hover:text-gray-300 cursor-pointer">
                    Download Brochure
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-normal md:mb-4 mb-2">
                Some Projects
              </h4>
              <ul className="space-y-2 text-[15px]">
                <li>
                  <Link
                    to="/projects/The-Naples"
                    className="hover:text-gray-300"
                  >
                    The Naples
                  </Link>
                </li>
                <li>
                  <Link
                    to="/projects/The-Roman-Heights"
                    className="hover:text-gray-300"
                  >
                    Roman Height
                  </Link>
                </li>
                <li>
                  <Link
                    to="/projects/The-Novara-Courts"
                    className="hover:text-gray-300"
                  >
                    Novara Court
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center text-center mt-8">
          <div className="text-white text-sm text-center">
            &copy; Copyright & Lightway Homes 2024
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
