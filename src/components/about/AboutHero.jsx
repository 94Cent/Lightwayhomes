import React from 'react'
import aboutUsImg from "../../assets/images/about-hero.png";


function AboutHero() {
  return (
    <section className="w-full overflow-hidden">
      <div className="h-full relative">
        <div>
          <img className="w-full md:h-full h-80" src={aboutUsImg} alt="" />
        </div>
        <div className="text-center text-white z-10 h-full flex items-center absolute top-0 w-full font-medium">
          <h2 className="w-full text-4xl">About Us</h2>
          </div>
      </div>
      <div className="border-b border-purple border-x py-5">
        <p className="first-letter:font-bold font-medium md:first-letter:text-4xl first-letter:text-3xl text-base  sm:w-[40%] w-[90%] text-purple text-center mx-auto">
        We're a reputable real estate firm with uncompromising integrity
        </p>
      </div>
    </section>
  )
}

export default AboutHero