import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="z-50 absolute right-2 lg:top-[60%] md:top-[55%] top-[50%] bg-purple text-white sm:h-10 sm:w-10 w-7 h-7 rounded-full text-xl sm:text-2xl lg:text-3xl"
  >
    &#10095;
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="z-50 absolute left-2 lg:top-[60%] md:top-[55%] top-[50%] bg-purple text-white sm:h-10 sm:w-10 w-7 h-7 rounded-full text-xl sm:text-2xl lg:text-3xl"
  >
    &#10094;
  </button>
);

const OneBedroomMansionatte = ({ projectCat }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const projectCount = projectCat?.projects?.length || 0;

  if (projectCount === 0) {
    return (
      <section className="pt-24 text-center text-lg font-bold text-purple">
        No project
      </section>
    );
  }

  if (projectCount === 1) {
    const singleProject = projectCat.projects[0];
    return (
      <section className="pt-24">
        <div className="pb-5">
          <h2 className="text-purple mb-12 text-2xl border-b-2 border-b-purple py-6 text-center font-bold">
            Building Prototype
          </h2>
        </div>
        <div className="md:w-[70%] mx-auto sm:w-[80%] w-[90%] border border-purple rounded-t-xl">
          <div className="relative">
            <img
              className="w-full mx-auto md:h-[80vh] h-80 rounded-t-xl"
              src={`https://lightwayhomesltd.com/backend/uploads/${singleProject?.pic_names[0]}`}
              alt={singleProject?.title}
            />
            <div className="absolute top-6 w-full z-50 text-center font-bold text-purple md:text-2xl text-lg px-2">
              <h2>{singleProject?.title}</h2>
            </div>
          </div>
          <div className="text-purple mx-auto sm:w-[80%] w-[90%] border-purple py-4">
            <h2 className="py-4 md:text-2xl text-xl text-center">
              {singleProject?.title}
            </h2>
            <p className="mx-auto pb-6 pt-1 font-medium text-center text-lg">
              {singleProject?.details}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-24">
      <div className="pb-5">
        <h2 className="text-purple mb-12 text-2xl border-b-2 border-b-purple py-6 text-center font-bold">
          Building Prototype
        </h2>
      </div>
      <div className="md:w-[70%] mx-auto sm:w-[80%] w-[90%] border text-purple border-purple rounded-t-xl">
        <Slider {...settings}>
          {projectCat.projects.map((plans, index) => (
            <div key={index} className="relative">
              <div>
                <img
                  className="w-full mx-auto md:h-[80vh] h-80 rounded-t-xl"
                  src={`https://lightwayhomesltd.com/backend/uploads/${plans?.pic_names[0]}`}
                  alt={plans?.title}
                />
                <div className="absolute top-6 w-full z-50 text-center font-bold text-purple md:text-2xl text-lg px-2">
                  <h2>{plans?.title}</h2>
                </div>
              </div>
              <div className="text-purple mx-auto sm:w-[80%] w-[90%] border-purple py-4">
                <h2 className="py-4 md:text-2xl text-xl text-center">
                  {plans?.title}
                </h2>
                <p className="mx-auto pb-6 pt-1 font-medium text-lg text-center">
                  {plans?.details}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default OneBedroomMansionatte;
