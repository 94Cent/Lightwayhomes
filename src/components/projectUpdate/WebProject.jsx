import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const WebProject = ({project}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    waitForAnimate: true
  };
  const images = project.img
  return (
    <section className="">
      <Slider {...settings}>
        {images.map((slide, index) => (
          <div key={index} className="md:h-[90vh] h-[400px] flex-shrink-0 relative slide-container">
            <img src={slide} alt={`Slide ${index}`} className="w-full  object-cover slide-image" />
            <div className="md:px-12 px-6 absolute h-full inset-0 bg-black bg-opacity-30 flex flex-col text-white justify-center item-center">
            <h1 className="md:text-4xl text-3xl lg:text-6xl font-bold mb-4 text-center">Project Update</h1>
            </div>
          </div>
        ))}
      </Slider>
      <div className="border-b border-purple border-x py-5 w-full">
        <p className="first-letter:font-medium first-letter:text-2xl sm:w-[30rem] w-full px-2 text-lg text-purple text-center mx-auto">
        {project.description}
        </p>
      </div>
    </section>
  );
};
export default WebProject;