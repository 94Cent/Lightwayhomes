import careerImg from "../../assets/images/careers.png";
const Career = () => {
  return (
    <section className="w-full overflow-hidden">
      <div className="h-full relative">
        <div>
          <img src={careerImg} className="w-full md:h-full h-80" alt="" />
        </div>
        <div className="text-center text-white text-4xl z-10 h-full flex items-center absolute top-0 font-medium w-full">
          <h2 className="w-full">Careers</h2>
        </div>
      </div>
      <div className="border-b border-purple border-x py-5">
        <p className="first-letter:font-bold font-medium md:first-letter:text-4xl first-letter:text-3xl text-base sm:w-[40%] w-[100%] text-purple text-center mx-auto">
          We thought it would be nice to break out of the norm. Is that okay
          with you?
        </p>
      </div>
    </section>
  );
};
export default Career;
