import React, { useState } from 'react';
import '../SliderCard.css';
import ProjectSm from "../../assets/images/project-1-sm.png";
import ProjectImg from "../../assets/images/project-1.png";

const ProjectCard = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [prevImage, setPrevImage] = useState(null);

  const nextImage = () => {
    setPrevImage(currentImage);
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImageHandler = () => {
    setPrevImage(currentImage);
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleThumbnailClick = (index) => {
    if (index !== currentImage) {
      setPrevImage(currentImage);
      setCurrentImage(index);
    }
  };

  return (
    <div className="w-full p-4 rounded-t mx-auto">
      <div className="relative slider-container h-80">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Project"
            className={`slider-image object-cover rounded-t-lg h-full ${index === currentImage ? 'active' : ''} ${
              index === prevImage ? 'prev' : ''
            }`}
          />
        ))}
        <button
          onClick={prevImageHandler}
          className="absolute top-1/2 transform -translate-y-1/2 left-0 size-9 bg-purple text-2xl font-light text-white rounded-full"
        >
          &#10094;
        </button>
        <button
          onClick={nextImage}
          className="absolute top-1/2 transform -translate-y-1/2 right-0 size-9 text-2xl font-light bg-purple text-white rounded-full"
        >
          &#10095;
        </button>
      </div>
      <div className="max-w-xl grid grid-cols-4 mx-auto gap-4 w-full md:gap-x-4 gap-x-2 gap-y-2 my-4">
        {images.map((_, index) => (
          <img
            key={index}
            onClick={() => handleThumbnailClick(index)}
            src={ProjectSm}
            alt="Project Thumbnail"
            className={`w-full md:h-24 h-[75px] object-cover cursor-pointer rounded ${
              index === currentImage ? 'border-2 border-purple' : ''
            }`}
          />
        ))}
      </div>
      <div className="max-w-xl mx-auto bg-purple text-white rounded-lg overflow-hidden w-full">
        <div className="p-6 border-b text-center">
          <h2 className="text-xl font-bold">Life worth complex</h2>
          <p className="text-gray-200 mt-2">Ajah, off cement road block d</p>
        </div>
        <div className="grid grid-cols-2 gap-px">
          <div className="bg-purple-700 p-4 border-r">
            <p className="text-gray-200">Starting from</p>
            <p className="md:text-2xl text-xl font-normal mt-4">#30,000,000</p>
          </div>
          <div>
            <div className="bg-white text-purple p-4 flex items-center justify-center">
              <button className="font-normal">Pre-Order</button>
            </div>
            <div className="bg-purple-700 text-center col-span-2 p-4">
              <button className="font-normal">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectSection = () => (
  <div className="flex md:flex-row flex-col justify-between w-[90%] gap-y-4 mx-auto md:my-12 my-6">
    <button className="px-4 md:w-[30%] py-4 bg-purple text-white text-xl">Ongoing Projects</button>
    <button className="px-4 py-4 md:w-[30%] border border-purple text-xl">Completed Projects</button>
    <button className="px-4 py-4 border border-purple md:w-[30%] text-xl">Upcoming Projects</button>
  </div>
);

const Projects = () => {
  const images = [
    ProjectImg,
    ProjectImg,
    ProjectImg,
    ProjectImg,
  ];

  return (
    <section className="py-8">
      <div className="mx-auto text-purple">
        <h2 className="md:text-3xl text-2xl font-normal my-4 text-center mb-8">Our Projects</h2>
        <ProjectSection />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto gap-4 xl:w-[80%] lg:w-[90%] md:w-full w-full xl:gap-x-16 lg:gap-x-10 gap-x-6 gap-y-4">
          {Array(4).fill().map((_, index) => (
            <ProjectCard key={index} images={images} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
