import React from "react";
import HomeLg from "../assets/icons/house-lg.svg";
import MailLg from "../assets/icons/mail-lg.svg";
import PhoneLg from "../assets/icons/phone-lg.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Helmet } from "react-helmet";
// import { Checkbox } from "../component/ui/checkbox";

function Contact() {
  return (
    <div className="">
      <Helmet>
        <title>Contact Us - Light Way Homes</title>
        <meta
          name="description"
          content="Get in touch with us through our contact page."
        />
      </Helmet>
      <section className="relative lg:h-[80vh] md:h-[65vh] h-80 bg-contact-hero bg-cover bg-center">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white lg:w-[65%] md:w-[75%] w-90%">
            <h1 className="md:text-5xl text-4xl font-semibold">Contact Us</h1>
          </div>
        </div>
      </section>

      {/* <div className="bg-white md:p-8 p-4 mb-8 lg:mt-12 md:mt-8 mt-4">
        <h3 className="md:text-4xl text-3xl text-center mb-4 text-purple">
          Let's get in touch
        </h3>
        <form className="space-y-8 md:w-[70%] w-[100%] mx-auto">
          <div>
            <label
              htmlFor="fullName"
              className="block text-xl text-purple mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              className="w-full py-4 px-6 border border-purple placeholder:text-purple outline-none"
              placeholder="Enter Your Full Name"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-purple text-xl mb-2">
              Let’s know your mind
            </label>
            <textarea
              id="message"
              className="w-full py-4 px-6 border border-purple placeholder:text-purple outline-none h-44"
              placeholder="Enter Your message......."
            ></textarea>
          </div>
          <div className="grid md:grid-cols-4 grid-cols-2 gap-y-3 justify-between mx-auto place-items-center">
            <div className="flex items-center gap-x-3">
              <Checkbox id="facebook" className="border-purple rounded" />
              <label
                htmlFor="facebook"
                className="text-base font-normal text-purple leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Facebook
              </label>
            </div>
            <div className="flex items-center gap-x-3">
              <Checkbox id="Twitter" className="border-purple rounded" />
              <label
                htmlFor="twitter"
                className="text-base font-normal text-purple leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Twitter
              </label>
            </div>
            <div className="flex items-center space-x-3">
              <Checkbox id="instagram" className="border-purple rounded" />
              <label
                htmlFor="instagram"
                className="text-base font-normal text-purple leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Instagram
              </label>
            </div>
            <div className="flex items-center gap-x-3">
              <Checkbox id="friend" className="border-purple rounded" />
              <label
                htmlFor="friend"
                className="text-base font-normal text-purple leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                A friend
              </label>
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-purple text-white px-6 py-5 text-xl w-full"
            >
              Submit
            </button>
          </div>
        </form>
      </div> */}

      <div className="mb-8 lg:w-[55%] md:w-[65%] w-[90%] mx-auto">
        <h3 className="md:text-4xl text-3xl text-center my-4 text-purple">
          You can reach us via
        </h3>
        <div className="flex flex-col space-y-4 md:mt-16 mt-8">
          <div className="flex items-center md:py-4 space-x-4 md:gap-x-4 gap-x-1 border-b border-purple">
            <img
              src={HomeLg}
              alt="homelg"
              className="lg:w-16 lg:h-16 md:w-12 md:h-12 h-8 w-8"
            />
            <div className="text-left md:w-[80%] w-[100%]">
              <p className="lg:text-lg md:text-base text-sm text-purple">
                No. 4, Oyewo close, Clay Busstop, Juli Estate, off Kudirat
                Abiola way, Oregun, Ikeja Lagos
              </p>
            </div>
          </div>
          <div className="flex items-center py-5 space-x-4 md:gap-x-6 gap-x-1 border-b border-purple">
            <div className="text-left w-[100%]">
              <p className="lg:text-lg md:text-base text-sm text-purple">
                info@lightwayhomesltd.com lwh.investment@gmail.com
              </p>
            </div>
            <img
              src={MailLg}
              alt="homelg"
              className="lg:w-16 lg:h-16 md:w-12 md:h-12 w-8 h-8"
            />
          </div>
          <div className="flex w-full items-center space-x-4 py-4 md:gap-x-4 gap-x-2 border-b border-purple">
            <img
              src={PhoneLg}
              alt="phonelg"
              className="lg:h-16 lg:w-16 md:w-12 md:h-12 w-8 h-8"
            />
            <div className="text-purple">
              <p>+2348075161213</p>
              <p>+2348038034077</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex mx-auto items-center justify-center space-x-6 md:mb-2 mb-8 mt-12">
              <a
                href="https://www.youtube.com/@LightWay_Homes"
                className="text-purple"
              >
                <FontAwesomeIcon
                  icon={faYoutube}
                  size="2x"
                  className="size-7"
                />
              </a>
              <a
                href="https://web.facebook.com/investproperty.int"
                className="text-purple"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  size="1x"
                  className="size-7"
                />
              </a>
              <a href="/" className="text-purple">
                <FontAwesomeIcon
                  icon={faTwitter}
                  size="1x"
                  className="size-7"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/light-way-homes-and-investment/"
                className="text-purple"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="1x"
                  className="size-7"
                />
              </a>
              <a
                href="https://www.instagram.com/lightway_homes/"
                className="text-purple"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="1x"
                  className="size-7"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 text-center">
        <h3 className="md:text-4xl text-3xl text-center md:mb-4 mb-8 text-purple">
          You can find us on the map too
        </h3>
        <div className="h-96 mt-10 text-2xl font-medium w-full mx-auto">
          <iframe
            className="h-full w-full"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3963.358648198447!2d3.3588741736503676!3d6.602274922245651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sNo.%204%2C%20Oyewo%20close%2C%20Clay%20Busstop%2C%20Juli%20Estate%2C%20off%20Kudirat%20Abiola%20way%2C%20Oregun%2C%20Ikeja%20Lagos!5e0!3m2!1sen!2sng!4v1722947283803!5m2!1sen!2sng"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen="true"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Our location"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
