import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ChatHero from "../assets/images/chat-footer.png"
import ChatHeroSm from "../assets/images/chat-footer-sm.png"

function Footer() {
  return (
    <footer className="bg-purple text-white md:py-12 py-4">
      <div className="mx-auto">
        <div className="mb-8 md:px-6 px-3">
          <h3 className="md:text-xl text-lg font-normal">Get Update And Stay Connected - Subscribe To Our Newsletter</h3>
          <div className="flex md:flex-row flex-col justify-between">
          <div className="flex md:flex-row flex-col md:gap-x-6 gap-y-4 mt-8">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="py-4 px-6 rounded-l md:w-96 w-full text-gray-700 bg-transparent border border-white placeholder:text-white"
            />
            <button className="px-6 md:w-44 w-full py-4 bg-white text-purple font-semibold">Subscribe</button>
          </div>
          <div className="mt-8 text-center md:text-left lg:block hidden">
              <div className="text-white mb-4 font-normal text-5xl">LOGO</div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center space-x-6 md:mb-2 mb-8 mt-12">
        <a href="#" className="text-white"><FontAwesomeIcon icon={faYoutube} size="1x" className='size-6' /></a>
                <a href="#" className="text-white"><FontAwesomeIcon icon={faFacebook} size="1x" className='size-6' /></a>
                <a href="#" className="text-white"><FontAwesomeIcon icon={faTwitter} size="1x" className='size-6' /></a>
                <a href="#" className="text-white"><FontAwesomeIcon icon={faLinkedin} size="1x" className='size-6' /></a>

        </div>
        <div className='absolute lg:right-20 md:right-8 right-2 md:-mt-20 mt-[560px] z-50'>
          <img src={ChatHero} alt="chat" className='lg:h-24 lg:max-w-96 h-16 max-w-64 md:block hidden' />
          <img src={ChatHeroSm} alt="chat" className='h-12 max-w-64 md:hidden block' />
        </div>
        <div className="w-full flex flex-wrap justify-between gap-8 text-left border-white border-t md:px-6 px-3 py-8">
          <div>
            <h4 className="md:text-xl text-lg font-normal md:mb-4 mb-2">Our Office</h4>
            <p className='md:w-96'>No. 4, Oyewo close, Clay Busstop, Juli Estate, off Kudirat Abiola way, Oregun, Ikeja Lagos</p>
            <h4 className="md:text-xl text-lg font-normal mt-4 md:mb-3 mb-2">Our Email</h4>
            <p>lwh.investment@gmail.com</p>
            <p>lwh@lightway.com.ng</p>
            <h4 className="md:text-xl text-lg font-normal mt-4 md:mb-3 mb-2">Our Phone Numbers</h4>
            <p>+234555566666</p>
            <p>+234789896554</p>
          </div>
          <div className='md:w-1/2 w-full flex md:justify-between gap-x-12 text-left'>
          <div>
            <h4 className="md:text-xl text-lg font-normal md:mb-4 mb-2">Quick Links</h4>
            <ul className='space-y-2 text-[15px]'>
              <li><a href="#" className="hover:text-gray-300">About</a></li>
              <li><a href="#" className="hover:text-gray-300">Contacts</a></li>
              <li><a href="#" className="hover:text-gray-300">Serviced Plot</a></li>
              <li><a href="#" className="hover:text-gray-300">Serviced Apartment</a></li>
              <li><a href="#" className="hover:text-gray-300">Become A Realtor</a></li>
              <li><a href="#" className="hover:text-gray-300">Download Brochure</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-normal md:mb-4 mb-2">Some Projects</h4>
            <ul className='space-y-2 text-[15px]'>
              <li><a href="#" className="hover:text-gray-300">The Naples</a></li>
              <li><a href="#" className="hover:text-gray-300">Roman Height</a></li>
              <li><a href="#" className="hover:text-gray-300">Novara Court</a></li>
            </ul>
            <div className="mt-16 text-center md:text-left lg:block hidden">
              <div className="text-white mb-4 font-normal text-5xl ml-4">LOGO</div>
            </div>

          </div>
          </div>
        </div>
        <div className="flex justify-center items-center text-center mt-8">
          <div className="text-white text-sm text-center">&copy; Copyright & Lightway Homes 2024</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
