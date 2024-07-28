import appreciationImg from "../../assets/images/compliment.png";
const Appreciation = () => {
  return (
    <section>
      <div className="relative my-12">
        <div className="md:h-screen h-72">
          <img className="w-full h-full" src={appreciationImg} alt="" />
        </div>
        <div className="absolute top-0 left-0 flex flex-col items-center justify-center h-full text-white w-full md:gap-y-20 gap-y-10 px-2">
          <div>
            <div className="md:text-4xl text-2xl font-medium text-center md:pb-20 pb-10">
              <h2>What Our Clients Say About Us</h2>
            </div>
            <div className="flex items-center justify-center md:gap-x-10 gap-x-6">
              <button className="bg-white text-purple sm:h-10 sm:w-10 w-7 h-7 rounded-full sm:text-2xl md:text-3xl">&#10094;</button>
              <div className="md:w-[60%] w-[80%] sm:text-lg text-sm font-light text-center">
                LightwayHomes and Properties helped me get my dream apartment.
                Their response time is fast and their delivery is superb! I
                would recommend them any day and anytime.
              </div>
              <button className="bg-white text-purple sm:h-10 sm:w-10 w-7 h-7 rounded-full sm:text-2xl md:text-3xl">&#10095;</button>
            </div>
          </div>
          <div>
            <i>Mr Bolly Akinola</i>
          </div>
          </div>
      </div>
    </section>
  );
};
export default Appreciation;
