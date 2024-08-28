import React from "react";
import mission from "../../assets/images/achieve.png";
import vision from "../../assets/images/forsee.png";

const Mission = () => {
  return (
    <section className="mt-12 container">
      <h2 className="text-purple w-full py-6 border-b-purple border-b text-3xl font-medium text-center">
        Our Mission
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-x-24 gap-y-16 mt-20">
        <div>
          <img src={mission} alt="mission" />
        </div>
        <div className="text-purple w-80 text-center">
          <h2 className="text-2xl font-medium pb-6">
            What we intend to achieve
          </h2>
          <p className="text-purple">
            To blend creativity with professionalism in delivering
            well-structured, globally acceptable, and top-notch properties to
            our revered clients..
          </p>
        </div>
      </div>
    </section>
  );
};

const Vision = () => {
  return (
    <section className="my-12 container">
      <h2 className="text-purple w-full py-6 border-b-purple border-b text-3xl font-medium text-center">
        Our Vision
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-x-24 gap-y-16 mt-20">
        <div className="text-purple w-80 text-center">
          <h2 className="text-3xl font-medium pb-6">What we Forsee</h2>
          <p>
            A world-class real estate development company, driven by value
            innovation and optimum service to deliver functional homes.
          </p>
        </div>
        <div>
          <img src={vision} alt="" />
        </div>
      </div>
    </section>
  );
};

export { Mission, Vision };
