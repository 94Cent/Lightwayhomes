import React, { useState } from 'react'
import './SliderCard.css';
const ProjectSlider = ({images}) => {
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
  return (
    <div className="relative slider-container lg:h-[520px] h-[400px]">
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
  )
}

export default ProjectSlider