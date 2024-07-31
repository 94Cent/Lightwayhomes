import romanHeightImg from "../../assets/images/contact-hero.png";
const WebProject = () => {
  return (
    <section className="w-full overflow-hidden">
      <div className="h-full relative">
        <div>
          <img className="h-48 sm:h-full" src={romanHeightImg} alt="" />
        </div>
        <div className="text-center text-white text-4xl z-10 h-full flex items-center absolute top-0 font-medium w-full">
          <h2 className="w-full">The Roman Height</h2>
        </div>
      </div>
      <div className="border-b border-purple border-x py-5">
        <p className="first-letter:font-medium first-letter:text-2xl sm:w-[30rem] w-full px-2 text-lg text-purple text-center mx-auto">
        The Roman height Arepo is a premium residential development tailored towards meeting modern day living with contemporary architecture
        </p>
      </div>
    </section>
  );
};
export default WebProject;