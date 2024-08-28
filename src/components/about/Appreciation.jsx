import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const NextArrow = ({ onClick }) => (
  <button onClick={onClick} className="z-50 absolute right-0 top-[20%] bg-white text-purple sm:h-10 sm:w-10 w-7 h-7 rounded-full sm:text-2xl md:text-3xl">&#10095;</button>
);

const PrevArrow = ({ onClick }) => (
  <button onClick={onClick} className="z-50 absolute left-0 top-[20%]  bg-white text-purple sm:h-10 sm:w-10 w-7 h-7 rounded-full sm:text-2xl md:text-3xl">&#10094;</button>
);

const Appreciation = ({ testimonial }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    pauseOnHover: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />
  };
  return (
    <section>
      <div className="relative my-12">
        <div className="bg-[url('/src/assets/images/compliment.png')] bg-cover bg-no-repeat md:h-screen h-96 flex flex-col justify-center text-white w-full md:gap-y-20 gap-y-10 px-2">
          <div>
            <div className="md:text-4xl text-2xl font-medium text-center md:pb-20 pb-10">
              <h2>What Our Clients Say About Us</h2>
            </div>
            <div className="md:w-[70%] text-center mx-auto w-full md:gap-x-10 gap-x-6">
              <Slider {...settings}>
                {testimonial.map((author, index) => (
                  <div key={index} className="sm:text-lg text-sm font-light text-center lg:px-20 md:px-8 px-4">
                    <p>{author.testimonial}</p>
                    <br />
                    {author.testimonial2 && <p>{author.testimonial2}</p>}
                    <div className="mt-8">
                      <i className="text-2xl font-semibold">{author.author}</i>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Appreciation;
