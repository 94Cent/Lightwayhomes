import coreValues from "../../assets/images/core-values.png";
const CoreValues = () => {
  return (
    <section className="md:h-[75rem] relative">
      <h2 className="text-purple w-full py-6 border-b-purple-600 border-b text-3xl font-medium text-center">
        Our Core Values
      </h2>
      <div className="relative mt-12 md:mt-0 md:block flex flex-wrap items-center sm:justify-between gap-y-12 justify-center">
        <div className="text-white w-56 relative md:top-16 md:left-[40%]">
          <img src={coreValues} alt="" />
          <div className="absolute top-0 flex flex-col items-center gap-3 h-full justify-center text-center px-2">
            <h3 className="text-2xl">Excellence</h3>
            <p>
              We are practicing and providing competent, quality, and efficient
              services with a skilled team on board.
            </p>
          </div>
        </div>
      </div>
      <div className="relative mt-12 md:mt-0 md:block flex flex-wrap items-center sm:justify-between gap-y-12 justify-center">
        <div className="text-white w-56 relative md:top-24 md:left-[60%]">
          <img src={coreValues} alt="" />
          <div className="absolute top-0 flex flex-col items-center gap-3 h-full justify-center text-center px-2">
            <h3 className="text-2xl">Teamwork</h3>
            <p>
              We embrace a collaborative effort to achieve our ultimate goal
              which is making our clients’ home dreams a reality.
            </p>
          </div>
        </div>
      </div>
      <div className="relative mt-12 md:mt-0 md:block flex flex-wrap items-center sm:justify-between gap-y-12 justify-center">
        <div className="text-white w-56 relative md:top-40 md:left-[65%]">
          <img src={coreValues} alt="" />
          <div className="absolute top-0 flex flex-col items-center gap-3 h-full justify-center text-center px-2">
            <h3 className="text-2xl">Customer Focus</h3>

            <p>We place premium value on customer satisfaction.</p>
          </div>
        </div>
      </div>
      <div className="relative mt-12 md:mt-0 md:block flex flex-wrap items-center sm:justify-between gap-y-12 justify-center">
        <div className="text-white w-56 relative md:top-44 md:left-[40%]">
          <img src={coreValues} alt="" />
          <div className="absolute top-0 flex flex-col items-center gap-3 h-full justify-center text-center px-2">
            <h3 className="text-2xl">Creativity</h3>
            <p>
              We make use of cutting-edge, innovative, and modern art in making
              your dream home.
            </p>
          </div>
        </div>
      </div>
      <div className="relative mt-12 md:mt-0 md:block flex flex-wrap items-center sm:justify-between gap-y-12 justify-center">
        <div className="text-white w-56 relative md:-top-[18rem] md:left-[15%]">
          <img src={coreValues} alt="" />
          <div className="absolute top-0 flex flex-col items-center gap-3 h-full justify-center text-center px-2">
            <h3 className="text-2xl">Passion</h3>
            <p>
              We are enthusiastic, fond, and committed to building your ideal
              homes.
            </p>
          </div>
        </div>
      </div>
      <div className="relative mt-12 md:mt-0 md:block flex flex-wrap items-center sm:justify-between gap-y-12 justify-center">
        <div className="text-white w-56 relative md:-top-[50rem] md:left-[20%]">
          <img src={coreValues} alt="" />
          <div className="absolute top-0 flex flex-col items-center gap-3 h-full justify-center text-center px-2">
            <h3 className="text-2xl">Integrity</h3>
            <p>
              We adhere to uncompromising, undivided, and unbroken honesty in
              delivering the best services and homes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CoreValues;
