import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import Hero3 from "../../assets/images/naples-hero-home.jpg";
import Hero2 from "../../assets/images/dream-hero-home.jpeg";
import Hero1 from "../../assets/images/lifestyle-hero-home.jpeg";
import Hero4 from "../../assets/images/novara-hero-home.jpg";
import Hero5 from "../../assets/images/roman-height-home-hero.jpg";
import { Link } from "react-router-dom";

const slides = [
  {
    image: Hero1,
    heading: "A home that matches your lifestyle",
    caption: "Discover your perfect home today",
  },
  {
    image: Hero2,
    heading: "Where your home dreams come through",
    caption: "Your new journey begins here",
  },
  {
    image: Hero3,
    heading: "The Naples",
    caption: "Modern day living with contemporary architecture",
    label: "The-Naples",
  },
  {
    image: Hero4,
    heading: "Novara Court",
    caption: "Where you experience nature at it's best",
    label: "The-Novara-Courts",
  },
  {
    image: Hero5,
    heading: "Roman Heights",
    caption:
      "Welcome to Roman Heights Where Timeless Beauty Meets Mordern Luxury! ",
    label: "The-Roman-Heights",
  },
];

const NextArrow = ({ onClick }) => (
  <div className="custom-arrow custom-arrow-next bg-purple" onClick={onClick}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow custom-arrow-prev bg-purple" onClick={onClick}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 19l-7-7 7-7"
      />
    </svg>
  </div>
);

const HeroCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="relative w-full md:h-screen h-[400px] overflow-hidden group">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
            <img
              src={slide.image}
              alt={`Slide ${index}`}
              className="w-full md:h-screen h-[400px] object-cover"
            />
            <div className="md:px-12 px-6 absolute md:h-screen h-full inset-0 bg-black bg-opacity-50 flex flex-col text-white">
              <div className="lg:w-[70%] md:w-[80%] w-full h-full flex flex-col justify-center">
                {slide.heading && (
                  <h1 className="md:text-4xl text-3xl lg:text-6xl font-bold mb-4 text-start">
                    {slide.heading}
                  </h1>
                )}
                {slide.caption && (
                  <p className="text-lg md:text-2xl mb-8">{slide.caption}</p>
                )}
                {slide.label && (
                  <Link
                    to={`/projects/${slide.label}`}
                    className="w-36 h-12 bg-purple text-white font-bold py-2.5 px-5 text-center "
                  >
                    Learn More
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroCarousel;
