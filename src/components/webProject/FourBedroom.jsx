import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../component/ui/popover";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReserveSpotForm from "./ReserveSpotForm";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="z-50 absolute right-2 lg:top-[55%] md:top-[50%] top-[47%] bg-purple text-white sm:h-10 sm:w-10 w-7 h-7 rounded-full sm:text-2xl md:text-3xl"
  >
    &#10095;
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="z-50 absolute left-2 lg:top-[55%] md:top-[50%] top-[47%]  bg-purple text-white sm:h-10 sm:w-10 w-7 h-7 rounded-full sm:text-2xl md:text-3xl"
  >
    &#10094;
  </button>
);

const FourBedroomMansionatte = ({ project, projectCat }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    pauseOnHover: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const plans = projectCat?.projects || [];

  if (!plans.length) {
    return (
      <section className="pt-24">
        <h2 className="text-center text-2xl text-gray-500">No project available</h2>
      </section>
    );
  }

  return (
    <section className="pt-24">
      <ToastContainer />
      <div className="pb-5">
        <h2 className="text-purple text-2xl border-b border-b-purple py-6 text-center font-bold">
          Price and Payment Plan
        </h2>
      </div>
      <div className="mt-12 md:w-[70%] mx-auto sm:w-[80%] w-[90%] border border-purple rounded-t-xl">
        {plans.length === 1 ? (
          <div className="relative">
            <div>
              <img
                className="w-full mx-auto md:h-[80vh] h-80 rounded-t-xl"
                src={`http://lightwayhomesltd.com/backend/uploads/${plans[0]?.pic_names[0]}`}
                alt={plans[0]?.title}
              />
              <div className="absolute top-6 w-full text-center font-bold text-purple md:text-2xl text-xl">
                <h2>{plans[0]?.title}</h2>
              </div>
            </div>
            <div className="text-purple mx-auto text-center border-purple pt-5">
              <h2 className="md:py-6 py-3 lg:text-2xl md:text-xl text-lg">
              {plans[0]?.title}
              </h2>
              <p className="md:pb-6 py-3 md:pt-4 md:text-lg text-base">
                While you spread the balance over 6 to 12 months
              </p>
              <p className="font-bold md:text-lg text-base mb-6">
                <i>From </i>#{plans[0]?.pricing}
              </p>
              <Popover className="bg-transparent">
                <PopoverTrigger className="md:py-3 bg-purple text-white font-medium w-full text-lg">
                  <button className="py-3 bg-purple text-white font-medium w-full text-lg">
                    Reserve your spot
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-full bg-transparent border-0 mx-0">
                  <ReserveSpotForm />
                </PopoverContent>
              </Popover>
            </div>
          </div>
        ) : (
          <Slider {...settings}>
            {plans.map((plan, index) => (
              <div key={index} className="relative">
                <div>
                  <img
                    className="w-full mx-auto md:h-[80vh] h-80 rounded-t-xl"
                    src={`http://lightwayhomesltd.com/backend/uploads/${plan?.pic_names[0]}`}
                    alt={plan?.title}
                  />
                  <div className="absolute top-6 w-full text-center font-bold text-purple md:text-2xl text-xl">
                    <h2>{plan?.title}</h2>
                  </div>
                </div>
                <div className="text-purple mx-auto text-center border-purple pt-5">
                  <h2 className="md:py-6 py-3 lg:text-2xl md:text-xl text-lg">
                    {plan?.title}
                  </h2>
                  <p className="md:pb-6 py-3 md:pt-4 md:text-lg text-base">
                    While you spread the balance over 6 to 12 months
                  </p>
                  <p className="font-bold md:text-lg text-base mb-6">
                    <i>From </i>#{plan?.pricing}
                  </p>

                  <Popover className="bg-transparent">
                    <PopoverTrigger className="md:py-3 bg-purple text-white font-medium w-full text-lg">
                      <button className="py-3 bg-purple text-white font-medium w-full text-lg">
                        Reserve your spot
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-full bg-transparent border-0 mx-0">
                      <ReserveSpotForm />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </section>
  );
};

export default FourBedroomMansionatte;
